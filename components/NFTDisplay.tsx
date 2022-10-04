import React, { useEffect, useState } from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

import NFTCard from './NFTCard'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

interface Props {}

const NFTDisplay = (props: Props) => {
  const [walletAddress, setWalletAddress] = useState<any>(null)
  const [noWallet, setNoWallet] = useState<boolean>(false)
  const [nftData, setNftData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)

  const connectWallet = async () => {
    if (!window.ethereum) return setNoWallet(true)

    const addresses: any = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })

    setWalletAddress(addresses[0])
    setLoaded(true)
  }

  const getNFTData = async () => {
    if (walletAddress) {
      const response = await fetch(
        `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`
      )
      const data = await response.json()
      console.log(data.items)
      setNftData(data.items)
    }
  }

  useEffect(() => {
    setLoading(true)
    getNFTData()
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [walletAddress])

  if (noWallet)
    return (
      <div className='h-screen relative flex flex-col justify-center items-center text-center'>
        <button
          className='absolute border top-[125px] border-[#6a6767] text-[#797575] p-3 px-4 xs:px-10 xs:py-4 rounded-md hover:bg-[#6a6767] hover:text-[#141920] active:bg-[#797575]/70 font-semibold transition-all duration-500 cursor-not-allowed'
          onClick={connectWallet}
          disabled
        >
          Connect Wallet
        </button>
        <div className='space-y-0'>
          <h1 className='text-center font-medium text-gray-500 text-2xl xs:text-lg'>
            Looks like you don't have MetaMask installed.
          </h1>
          <p className='text-center font-medium text-gray-500 text-lg xs:text-sm '>
            If you'd like a wallet, head on over to{' '}
            <a
              href='https://metamask.io/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex justify-center items-center text-[#eb8e24] hover:text-[#eb8e24]/70 transition-all duration-300'
            >
              <span className='flex items-center justify-center'>
                MetaMask.io
                <ArrowTopRightOnSquareIcon
                  width={20}
                  height={20}
                  className='ml-1'
                />
              </span>
            </a>{' '}
            to get the Chrome Extension and join the revolution!
          </p>
        </div>
      </div>
    )

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0 xs:pb-24'>
      {walletAddress ? (
        <div className='xs:flex-col mt-10 absolute top-24 xs:top-16 uppercase text-gray-500 text-[22px] xs:text-xl font-sm text-center'>
          Connected Address:{' '}
          <span className='text-[#5fddb3] hover:opacity-50 transition-all duration-500 font-semibold'>
            {`${walletAddress.substring(0, 5)}...${walletAddress.substring(
              walletAddress.length - 5,
              walletAddress.length - 1
            )}`}
          </span>
        </div>
      ) : (
        <button
          className='mt-32 xs:mt-32 border border-[#5fddb3] text-[#5fddb3] p-3 px-4 xs:px-10 xs:py-4 rounded-md hover:bg-[#5fddb3] hover:text-[#141920] active:bg-[#5fddb3]/70 font-semibold transition-all duration-500'
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}

      {!loaded && (
        <div className='space-y-0'>
          <h1 className='text-center font-medium text-gray-500 mt-[250px] text-2xl xs:text-lg'>
            Speaking of Web3, NFTs are pretty cool.
          </h1>
          <p className='text-center font-medium text-gray-500 mt-[250px] text-lg xs:text-sm '>
            Go ahead and connect and let's see yours!
          </p>
        </div>
      )}

      <div className='h-3/5 xs:h-4/5 w-full flex justify-left items-center overflow-scroll space-x-10 xs:space-x-28 px-12 mt-[150px] xs:pl-[100px] scrollbar-none'>
        {nftData.map((nft: any, i: number) => {
          return <NFTCard key={i} nft={nft} />
        })}
      </div>

      {loading ? (
        <div />
      ) : loaded && nftData.length > 1 ? (
        <div className='relative xs:bottom-10 text-center text-xl xs:text-lg font-medium text-gray-400 xs:mt-10'>
          Those are some <u>good</u> looking NFTs 😎💯
        </div>
      ) : loaded && nftData.length === 1 ? (
        <div className='relative xs:bottom-10 text-center text-xl xs:text-lg font-medium text-gray-400 xs:mt-10'>
          Cool NFT ya got there 😎💯
        </div>
      ) : loaded && nftData.length === 0 ? (
        <div className='relative xs:bottom-10 text-center text-xl xs:text-lg font-medium text-gray-400 xs:mt-10 h-full w-[300px]'>
          Hmm... so I'm not sensing any NFTs on this account. 🤔 No worries, if
          you're looking for some, check out collections on{' '}
          <a
            href='https://opensea.io/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex justify-center items-center text-[#4f88dd] hover:text-[#4f88dd]/70 transition-all duration-300'
          >
            OpenSea!
            <ArrowTopRightOnSquareIcon
              width={20}
              height={20}
              className='ml-1'
            />
          </a>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

export default NFTDisplay
