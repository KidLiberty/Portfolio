import React from 'react'

interface Props {
  nft?: any
}

const NFTCard = ({ nft }: Props) => {
  return (
    <div className='lg:h-[600px] sm:h-[425px] xs:h-[500px] xs:w-[250px] rounded-lg bg-[#c3c3c3]'>
      <div className='w-[200px] xs:w-[250px]'>
        <img
          src={nft?.meta?.content[0]?.url.replace(
            'ipfs.infura.io',
            'infura-ipfs.io'
          )}
          className='w-[200px] h-[200px] xs:h-[250px] xs:w-[250px] object-cover rounded-tl-lg rounded-tr-lg'
        />
      </div>

      <div className='flex flex-col flex-1 overflow-y-scroll w-[200px] h-[225px] xs:h-[250px] xs:w-[250px] p-2 scrollbar-none'>
        <p className='text-black font-semibold'>NFT: {nft?.meta?.name}</p>
        <p className='text-black font-medium'>Blockchain: {nft?.blockchain}</p>
        <p className='text-black text-sm'> Description:</p>
        <div className='text-xs overflow-y-scroll border-b-2 border-[#292d2b] scrollbar-none'>
          <p className='text-black'>{nft?.meta?.description}</p>
        </div>
        <div>
          <p className='text-black text-sm'>Minting Date:</p>
          <p className='text-black text-sm'>
            {new Date(nft?.mintedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default NFTCard
