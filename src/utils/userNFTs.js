const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// Using HTTP
const web3 = createAlchemyWeb3( `https://polygon-mumbai.g.alchemy.com/v2/V89muXksxig8e47Q6mKzqTKuU6Gp0DV7` );

export const getUserERC721NFTS = async (address) => {
   try {
    // Get all NFTs
    const nfts = await web3.alchemy.getNfts({ owner: address });

    //filter all nfts and check that tokentype is ERC721
    const ERC721Tokens = nfts.ownedNfts.filter((nft) => {
        return nft.id.tokenMetadata.tokenType === "ERC721"
    });
    console.log(ERC721Tokens);
    return ERC721Tokens;
   }
   catch(err) {
    console.log(err.message);
   }
}
export const getUserERC1155NFTS = async (address) => {
   try {
    // Get all NFTs
    const nfts = await web3.alchemy.getNfts({ owner: address });

    //filter all nfts and check that tokentype is ERC1155
    const ERC1155Tokens = nfts.ownedNfts.filter((nft) => {
        return nft.id.tokenMetadata.tokenType === "ERC1155"
    });
    console.log(ERC1155Tokens);
    return ERC1155Tokens;
   }
   catch(err) {
    console.log(err.message);
   }
}

