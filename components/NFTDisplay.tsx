import React, { useState } from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

type Props = {}

const NFTDisplay = (props: Props) => {
  const [walletAddress, setWalletAddress] = useState<any>()
  const [nftData, setNftData] = useState<any>([])

  const connectWallet = async () => {
    if (!window.ethereum)
      return setWalletAddress(
        <div>
          {"Please install MetaMask. It's free to join the revolution. :) "}
          <a href='https://metamask.io/' target='_blank'>
            <u className='hover:cursor-pointer'>Here.</u>
          </a>
        </div>
      )
    const addresses = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })

    setWalletAddress(addresses)
    console.log(walletAddress)

    if (walletAddress) {
      const response = await fetch(
        `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`
      )
      const data = await response.json()
      setNftData(data.items)
    }
  }

  console.log(nftData)

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0 overflow-x-scroll'>
      {walletAddress ? (
        <div className='mt-10 absolute top-24 uppercase text-gray-500 text-1xl font-semibold text-center'>
          Connected Address:{' '}
          <span className='text-[#5fddb3] hover:opacity-50 transition-all duration-500 '>
            {walletAddress}
          </span>
        </div>
      ) : (
        <button
          className='mt-10 border border-[#5fddb3] text-[#5fddb3] p-2.5 rounded-md hover:bg-[#5fddb3] hover:text-[#141920] font-semibold transition-all duration-500'
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
      <div className='h-3/5 w-full flex justify-center items-center overflow-scroll'>
        {nftData.map((nft: any, i: number) => {
          return (
            <div key={i} className='h-4/5 rounded-lg bg-[#3b4d5e] m-2'>
              <div className='w-[200px]'>
                <img
                  src={nft?.meta?.content[0]?.url}
                  className='w-[200px] h-[200px] object-cover rounded-tl-lg rounded-tr-lg'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <p className='text-black'>Blockchain: {nft?.blockchain}</p>
              </div>
            </div>
          )
        })}
        {nftData.length === 0 && <div>Mark is a Class!</div>}
      </div>
    </div>
  )
}

export default NFTDisplay
