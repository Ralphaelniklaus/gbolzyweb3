import { useState, useEffect, useRef } from 'react'
import { shortenAddress } from '../../utils/shortenAddress';
import { NFTMetadata } from '../../utils/ERC721MetaData';
import { ethers } from "ethers"
import BuyNFTModal from '../Modals/BuyNFTModal';

function ListedItem({ listedItem }) {
    const [buy, setBuy] = useState(false);
    const effect = useRef(true);
    const [nft, setNft] = useState();
    let { id, nftAddress, price, seller, tokenId } = listedItem;
    // eslint-disable-next-line
    let newId = parseInt(id, 16);
    tokenId = parseInt(tokenId, 16);
    let price2 = ethers.utils.formatEther(price);

    const buyClick = () => {
        setBuy(true);
      }


    useEffect(() => {
        if (effect.current) {
            effect.current = false;
            const fetch = async () => {
                const nftDetails = await NFTMetadata(nftAddress, tokenId);
                console.log(nftDetails);
                setNft(nftDetails);
            }
            fetch();
        }
    }, [nftAddress, tokenId]);

    if (nft && !nft.metadataError) return (
        <>
        {buy && <BuyNFTModal nft={nft} open={buy} onClose={() => setBuy(false)} price={price2} listedItem={listedItem}/>}
        <div>
            {nft && <div className="group relative w-full square aspect-square rounded-lg overflow-hidden hover:scale-105 transition-all duration-1000 ease-in-out shadow-me cursor-pointer">
                {!nft.metadataError && (<img src={nft.media[0].gateway} alt="" className="h-full w-full duration-300 object-center object-cover absolute" />)}
                <div className="hidden group-hover:flex gap-2 w-full px-2 absolute bottom-2 transition-all duration-1000 ease-in-out">
                    <button className="bttn-5 bttn-primary-2 w-1/2 bg-opacity-80 text-xs"
                      onClick={buyClick}
                    >
                        Buy</button>
                    <button className="bttn-5 bttn-secondary-2 w-1/2 bg-opacity-80 text-xs"
                    // onClick={offerClick}
                    >
                        Offer
                    </button>
                </div>

            </div>}
            <div className='pt-4'>
                <p className='text-ld font-semibold text-xs sm:text-sm'>Price: {price2} MATIC</p>
                <p className='text-xs text-ld'>Seller: <span>{shortenAddress(seller)}</span></p>
            </div>
        </div>
        </>
    )
    else return null;
}

export default ListedItem
