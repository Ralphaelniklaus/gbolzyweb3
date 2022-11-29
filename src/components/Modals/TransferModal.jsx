import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAccount } from 'wagmi'
import { useProvider, useSigner, useContract } from 'wagmi'
import toast from 'react-hot-toast'

export default function TransferModal({ nft, open, onClose }) {
// eslint-disable-next-line
  const [receiver, setReceiver] = useState("");

  const provider = useProvider()
  const signer = useSigner();
  const { address } = useAccount();
  const abi = ['function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external'];
  // Set up a contract instance
  const transferContract = useContract({addressOrName: `${nft.contract.address}`,contractInterface: abi, signerOrProvider: signer.data || provider});


  const transferNFT = async () => {
    let tokenId = nft.id.tokenId;
    tokenId = parseInt(tokenId, 16);
    try {
      const transfer = await transferContract.safeTransferFrom(address, receiver, tokenId, "0x");
      onClose(false);
      await transfer.wait();
      toast.success("Succesfully transferred token");
    } catch (error) {
      toast.error("Error transferring token")
    }
  }
  const cancelButtonRef = useRef(null);

  if (nft) {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=>onClose(false)}>
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
                          Transfer this NFT
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 pb-2">
                              You're about to transfer this item.
                          </p>
                          <p className="text-sm text-indigo-500 pb-2">
                              Enter recipient address:
                          </p>
                          <input type="text" name="" id="" className='form-input' 
                          value={receiver}
                          onChange={(e)=>{setReceiver(e.target.value)}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-ld px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:items-center">
                    <button
                      type="button"
                      className="bttn-4 bttn-primary"
                      onClick={transferNFT}
                      ref={cancelButtonRef}
                    >
                      Transfer
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
    }
}
