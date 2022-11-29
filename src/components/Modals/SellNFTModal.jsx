import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ethers } from "ethers"
import ListingModal from './ListingModal'
import { useProvider, useSigner, useContract } from 'wagmi'
import { MARKET_ABI, MARKET_ADDRESS } from '../../constants/index'
import toast from 'react-hot-toast'

export default function SellNFTModal(props) {
  const { open, onClose, nft } = props;
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState('');
  const cancelButtonRef = useRef(null);

  const provider = useProvider();
  const signer = useSigner();
  const abi = ['function setApprovalForAll(address operator, bool _approved) external'];
  // Set up a contract instance
  const approvalContract = useContract({ addressOrName: `${nft.contract.address}`, contractInterface: abi, signerOrProvider: signer.data || provider });
  const MarketContract = useContract({ addressOrName: MARKET_ADDRESS, contractInterface: MARKET_ABI, signerOrProvider: signer.data || provider });

  const ListToken = async (e) => {
    if (price < 0) return toast.error("Price too low");
    e.preventDefault();
    let tokenId = nft.id.tokenId;
    tokenId = parseInt(tokenId, 16);
    try {
      await approvalContract.setApprovalForAll(MARKET_ADDRESS, true);
      const _price = ethers.utils.parseUnits(price, "ether");
      console.log(_price);
      const listed = await MarketContract.createListing(tokenId, nft.contract.address, _price);
      onClose(false);
      await listed.wait();
      setStatus('success');
    } catch (error) {
      onClose(false);
      setStatus('error');
    }
  }

  if (nft) {
    return (
      <>
      {status.length > 0 && <ListingModal status={status} />}
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
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
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
                      <div className="sm:flex sm:items-start">
                        <div className="relative mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md overflow-hidden bg-green-100 sm:mx-0 sm:h-24 sm:w-24">
                          {nft.media && (<img src={nft.media[0].gateway} alt="" className="h-full w-full object-center object-cover absolute" />)}
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                            List this Item for sale.
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500 pb-4">
                              You're about to list this item for sale.
                            </p>
                            <p className="text-sm text-indigo-500 pb-2">
                              Enter price(MATIC):
                            </p>
                            <input type="text" name="" id="" className='form-input'
                              value={price}
                              onChange={(e) => { setPrice(e.target.value) }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-ld px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:items-center">
                      <button
                        type="button"
                        className="bttn-4 bttn-primary"
                        onClick={ListToken}
                        ref={cancelButtonRef}
                      >
                        List Item
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
}
