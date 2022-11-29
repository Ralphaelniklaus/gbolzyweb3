import React from 'react'
// import NotableDrop from './notableDrop'
// import SpotCreator from './SpotCreator'
import ListedItems from './ListedItems'
// import Collectibles from './Collectibles'
import { useAccount } from 'wagmi'

function MarketPlace() {
  const { isConnected } = useAccount();
  if(!isConnected) return (
    <>
    {/* min-h-screen */}
    <div className='min-h-screen trans flex items-center justify-center'>
      <h1 className='text-ld text-sm md:text-base'>Please connect your wallet to continue</h1>
    </div>
    </>
  )
  else return (
    <>
    <div className='w-full text-ld trans'>
      <ListedItems />
      </div>
    </>
  )
}

export default MarketPlace