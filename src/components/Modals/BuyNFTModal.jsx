import { Fragment, useRef, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ethers } from "ethers"
import { shortenAddress } from '../../utils/shortenAddress';
import { useProvider, useSigner, useContract } from 'wagmi'
import { MARKET_ABI, MARKET_ADDRESS } from '../../constants/index';
import toast from 'react-hot-toast'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

export default function BuyNFTModal(props) {
    const [metadata, setMetadata] = useState(null);
    const [show, setShow] = useState(false);
    const { price, nft, open, onClose, listedItem } = props;
    // eslint-disable-next-line
    let { nftAddress, seller, tokenId, id } = listedItem;
    const cancelButtonRef = useRef(null);
    const effect = useRef(true);

    const provider = useProvider();
    const signer = useSigner();
    // Set up a contract instance
    const MarketContract = useContract({ addressOrName: MARKET_ADDRESS, contractInterface: MARKET_ABI, signerOrProvider: signer.data || provider });

    useEffect(() => {
        if (effect.current) {
            effect.current = false;
            const fetch = async () => {
                try {
                    const nftDetails = nft.rawMetadata.attributes;
                    setMetadata(nftDetails);
                } catch (error) {
                    console.log(error);
                }
            }
            fetch();
        }
    });



    const BuyToken = async (e) => {
        e.preventDefault();
        try {
            let _price = ethers.utils.parseUnits(price, "ether");
            _price = ethers.utils.formatUnits(_price);
            console.log(_price);
            const options = {value: ethers.utils.parseEther(`${_price}`)};
            console.log(options);
            console.log(id);


            const tx = await MarketContract.buyListing( id , options);
            await tx.wait();
            onClose(false);
            toast.success(`Transaction ${tx.hash} has been submitted.`);
        } catch (error) {
            onClose(false);
            console.log(error.message);
            toast.error(error.message);
        }
    }

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} open={open} onClose={() => onClose(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="text-ld flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-[90%] sm:w-full">
                                    <div className="bg-ld px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:flex-col sm:items-center">
                                            <div className='mx-auto'>
                                            <div className="flex-1 relative mx-auto flex-shrink-0 flex items-center justify-center h-36 w-[70%] rounded-md overflow-hidden bg-green-100 mb-4 sm:h-24 sm:w-24">
                                                {nft.media && (<img src={nft.media[0].gateway} alt="" className="h-full w-full object-center object-cover absolute" />)}
                                            </div>
                                            <div>
                                                <span 
                                                onClick={() => {setShow(!show)}}
                                                className="bg-red flex items-center justify-center gap-1 md:-mb-4 md:py-2 text-sm font-medium text-gray-900 text-center cursor-pointer">
                                                    Attributes 
                                                    <ChevronDownIcon className={!show?`h-4 w-4 text-gray-600`:`hidden`}  />
                                                    <ChevronUpIcon className={show ? `h-4 w-4 text-gray-600`:`hidden`}  />
                                                </span>
                                               <ul className={show ? `flex gap-2 flex-wrap md:mt-3 trans`: `hidden trans`}>
                                                {metadata && metadata.map((item, index) => {
                                                    return (
                                                        <li key={index} className="text-ld flex flex-col rounded-md p-2">
                                                            <span className="text-indigo-800 text-[10px] md:text-[12px] font-semibold">{item.trait_type}</span>
                                                            <span className="text-[9px]">{item.value}</span>
                                                        </li>
                                                    )
                                                })
                                                }
                                                </ul>
                                            </div>
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                {/* <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                                                    Buy this Item
                                                </Dialog.Title> */}
                                                <div className="mt-2">
                                                    <p className="text-sm py-2">
                                                        You're about to buy this item from <span className='text-indigo-700 dark:text-indigo-500'>{shortenAddress(seller)} </span>
                                                        for{' '}<span className='font-semibold'> {price} ETH</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-ld px-4 pb-3 sm:px-6 sm:flex items-center justify-center w-full">
                                        <button
                                            type="button"
                                            className="bttn bttn-primary md:w-fit md:px-24"
                                            onClick={BuyToken}
                                            ref={cancelButtonRef}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
