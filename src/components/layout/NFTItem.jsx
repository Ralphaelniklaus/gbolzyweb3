import SellNFTModal from "../Modals/SellNFTModal"
import TransferModal from "../Modals/TransferModal";
import { useState } from 'react'

function NFTItem({nft}) {
  const [sell, setSell] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const sellClick = () => {
    setSell(true);
  }
  const transferClick = () => {
    setTransfer(true);
  }

  return (
    <>
    {sell && <SellNFTModal nft={nft} open={sell} onClose={() => setSell(false)}/>}
    {transfer && <TransferModal nft={nft} open={transfer} onClose={() => setTransfer(false)} />}
    <div>
    <div className="group relative w-full square aspect-square rounded-lg overflow-hidden hover:scale-105 transition-all duration-1000 ease-in-out shadow-me cursor-pointer">
      {nft.media && (<img src={nft.media[0].gateway} alt="" className="h-full w-full duration-300 object-center object-cover absolute" />)}
      <div className="hidden group-hover:flex gap-2 w-full px-2 absolute bottom-2 transition-all duration-1000 ease-in-out">
      <button className="text-xs bttn-5 bttn-primary-2 w-1/2 bg-opacity-80"
      onClick={sellClick}
      >
        Sell</button>
      <button className="text-xs bttn-5 bttn-secondary-2 w-1/2 bg-opacity-80"
      onClick={transferClick}
      >Transfer</button>
      </div>

    </div>
      <div className="pb-4">
      {nft.metadata.name && (<p className="text-left mt-4 ml-2 text-xs font-medium">{nft.metadata.name}</p>)}
      {/* {!nft.metadata.name && (<p className="text-left mt-4 ml-2 text-xs font-medium">NFT</p>)} */}
      
      </div>
    </div>
    </>
  )
}

export default NFTItem