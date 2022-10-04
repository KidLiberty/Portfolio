import React, { useEffect, useState } from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

interface Props {}

const NFTDisplay = (props: Props) => {
  const [walletAddress, setWalletAddress] = useState<any>(null)
  const [nftData, setNftData] = useState<any>([])
  const [loaded, setLoaded] = useState<boolean>(false)

  const connectWallet = async () => {
    if (!window.ethereum)
      return setWalletAddress(
        <div className='h-screen flex flex-col justify-center items-center'>
          {"Please install MetaMask. It's free to join the revolution. :) "}
          <a href='https://metamask.io/' target='_blank'>
            <u className='hover:cursor-pointer'>Here.</u>
          </a>
        </div>
      )
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
    getNFTData()
  }, [walletAddress])

  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0 xs:pb-24'>
      {walletAddress ? (
        <div className='xs:flex-col mt-10 absolute top-24 xs:top-16 uppercase text-gray-500 text-[22px] xs:text-xl font-medium text-center'>
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
          <h1 className='text-center font-medium mt-[250px] text-2xl text-gray-500'>
            Speaking of Web3, NFTs are pretty cool.
          </h1>
          <p className='text-center font-medium mt-[250px] text-lg text-gray-500'>
            Go ahead and connect and let's see yours!
          </p>
        </div>
      )}

      <div className='h-3/5 xs:h-4/5 w-full flex justify-left items-center overflow-scroll space-x-10 xs:space-x-28 px-12 mt-[150px] xs:pl-[100px] mr-[50px] scrollbar-none'>
        {nftData.map((nft: any, i: number) => {
          return (
            <div
              key={i}
              className='lg:h-[600px] sm:h-[425px] xs:h-[500px] xs:w-[250px] rounded-lg bg-[#c3c3c3]'
            >
              <div className='w-[200px] xs:w-[250px]'>
                <img
                  src={nft?.meta?.content[0]?.url.replace(
                    'ipfs.infura.io',
                    'infura-ipfs.io'
                  )}
                  className='w-[200px] h-[200px] xs:h-[250px] xs:w-[250px] object-cover rounded-tl-lg rounded-tr-lg'
                />
              </div>

              <div className='flex flex-col flex-1 overflow-y-scroll w-[200px] h-[225px] xs:h-[250px] xs:w-[250px] p-2'>
                <p className='text-black'>Blockchain: {nft?.blockchain}</p>
                <p className='text-black'>Name: {nft?.meta?.name}</p>
                <p className='text-black'> Description:</p>
                <div className='text-xs overflow-y-scroll'>
                  <p className='text-black'>{nft?.meta?.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {loaded && nftData.length > 1 ? (
        <div className='relative xs:bottom-10 text-center text-xl xs:text-lg font-medium text-gray-400 xs:mt-10'>
          Those are some good looking NFTs 😎💯
        </div>
      ) : loaded && nftData.length === 1 ? (
        <div className='relative xs:bottom-10 text-center text-xl xs:text-lg font-medium text-gray-400 xs:mt-10'>
          Cool NFT ya got there 😎💯
        </div>
      ) : loaded && nftData.length === 0 ? (
        <div className='relative xs:bottom-10 text-center text-xl xs:text-lg font-medium text-gray-400 xs:mt-10 h-full w-[300px]'>
          Hmm... so I am not sensing any NFTs on this account. 🤔 No worries,
          you are looking for some, you can join in by checking out{' '}
          <a
            href='https://opensea.io/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex justify-center items-center text-[#4f88dd] hover:text-[#4f88dd]/70 transition-all dura'
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
