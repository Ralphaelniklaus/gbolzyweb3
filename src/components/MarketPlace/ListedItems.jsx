import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useProvider, useSigner, useContract } from 'wagmi'
import { MARKET_ABI, MARKET_ADDRESS } from '../../constants/index'
import toast from 'react-hot-toast';
import ListedItem from '../layout/ListedItem';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'


function ListedItems() {
  const effect = useRef(true);
  const [listedItems, setListedItems] = useState([]);
  const provider = useProvider();
  const signer = useSigner();
  const MarketContract = useContract({ addressOrName: MARKET_ADDRESS, contractInterface: MARKET_ABI, signerOrProvider: signer.data || provider });

  useEffect(() => {
    if (effect.current) {
      effect.current = false;
      const fetch = async () => {
        try {
          console.log("fetching");
          const listedItemsArray = await MarketContract.getAllActiveListings();
          console.log(listedItemsArray);
          if (listedItemsArray.length > 0) {
            for (let i = 0; i < 5; ++i) {
              if(listedItemsArray[i] !== undefined) {
              setListedItems(listedItems => [...listedItems, listedItemsArray[i]]);
              }
            }
          }
        } catch (error) {
          toast.error("An error occured");
        }
      }
      fetch();
    }
  }, [MarketContract]);
  return (
    <div className='min-h-screen transition-all duration-300 ease-in w-[90vw] mx-auto pt-4 pb-8'>
      <h1 className="text-indigo-700 dark:text-indigo-500 text-center font-semibold mt-8 text-2xl sm:text-3xl md:text-4xl trans">
        Preview of all digital items on our platform.
      </h1>
      <p className='text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 pt-2'>
        Explore all listed digital items.
      </p>

      <ul className="md:min-h-[30vh] pb-8 grid grid-cols-1 gap-y-4 lg:gap-y-4 gap-x-4 lg:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-[65%] sm:w-3/4 lg:w-5/6 mx-auto mt-8 md:mt-16">
        {listedItems.length > 0 && listedItems.map((listedItem, index) => {
          return (
            <ListedItem listedItem={listedItem} key={index} className='rounded-xl relative text-ld' />
          )
        })
        }


        {listedItems.length === 0 && <p className='text-slate-400 dark:text-slate-100 font-semibold'>There are no current listings.</p>}
      </ul>

      <Link to='/marketplace/all721tokens' className='group mt-4 md:mt-8 flex items-center justify-center gap-2 text-indigo-700 dark:text-indigo-500 trans'>
        <p className='text-center text-sm sm:text-base'>View All</p>
        <ArrowNarrowRightIcon className="h-6 w-6 group-hover:-mr-2 trans" aria-hidden="true" />
      </Link>
    </div>
  )
}

export default ListedItems