import { useState, useEffect, useRef } from 'react'
import { useProvider, useSigner, useContract } from 'wagmi'
import { MARKET_ABI, MARKET_ADDRESS } from '../../constants/index'
import toast from 'react-hot-toast';
import ListedItem from '../layout/ListedItem';


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
          const listedItemsArray = await MarketContract.getAllActiveListings();
          setListedItems(listedItemsArray);
        } catch (error) {
          toast.error(error.message);
        }
      }
      fetch();
    }
  }, [MarketContract]);
  return (
    <div className='transition-all duration-300 ease-in w-[90vw] mx-auto pt-4 pb-8'>
      <h1 className="text-indigo-700 dark:text-indigo-500 text-center font-semibold mt-8 text-2xl sm:text-3xl md:text-4xl trans">
        Explore all listed digital items on our platform.
      </h1>
      <p className='text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 pt-2'>
        Explore all listed digital items and make a purchase.
      </p>

      <ul className="md:min-h-[40vh] pb-8 grid grid-cols-1 gap-y-4 lg:gap-y-4 gap-x-4 lg:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-[65%] sm:w-3/4 lg:w-5/6 mx-auto mt-8 md:mt-16">
        {listedItems.length > 0 && listedItems.map((listedItem, index) => {
          return (
            <ListedItem listedItem={listedItem} key={index} className='rounded-xl relative text-ld' />
          )
        })
        }
      </ul>
    </div>
  )
}

export default ListedItems