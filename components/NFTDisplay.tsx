import React, { useEffect, useState } from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

type Props = {}

const NFTDisplay = (props: Props) => {
  const [walletAddress, setWalletAddress] = useState<any>([])
  const [nftData, setNftData] = useState<any>([])

  useEffect(() => {
    checkIfConnected
  }, [])

  async function checkIfConnected() {
    if (!window.ethereum) return alert('Please install MetaMask.')
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    setWalletAddress(accounts)
    console.log(accounts)
  }

  const getData = async () => {
    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb`
    )

    const data = await response.json()
    console.log(data)
    setNftData(data.items)
    console.log(nftData)
  }

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0'>
      <button onClick={checkIfConnected}>Connect</button>
      <button onClick={getData}>Get Data</button>
      {nftData.map((nft: any, i: number) => {
        return <div key={i}>{/* <img src={nft?.meta.content.url} /> */}</div>
      })}
    </div>
  )
}

export default NFTDisplay
