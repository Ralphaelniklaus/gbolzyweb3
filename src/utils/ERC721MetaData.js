import { Network, initializeAlchemy, getNftMetadata } from "@alch/alchemy-sdk";

const settings = {
    apiKey: "LJDs2jvLKBWSOZiQrWmaWhgKSMbDeRxL",
    network: Network.MATIC_MUMBAI, 
    maxRetries: 10,
};

const alchemy = initializeAlchemy(settings);

export const NFTMetadata = async (_nftAddress, _tokenId) => {
    try {
        const nftMetadata = await getNftMetadata(
            alchemy,
            `${_nftAddress}`,
            `${_tokenId}`,
            "ERC721"
        );
        console.log(nftMetadata);
        return nftMetadata;
    } catch(err) {
        console.log(err.message);
    }
}
export const ERC1155NFTMetadata = async (_nftAddress, _tokenId) => {
    try {
        const nftMetadata = await getNftMetadata(
            alchemy,
            `${_nftAddress}`,
            `${_tokenId}`,
            "ERC1155"
        );
        console.log(nftMetadata);
        return nftMetadata;
    } catch(err) {
        console.log(err.message);
    }
}
