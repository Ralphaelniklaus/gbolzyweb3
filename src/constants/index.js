export const ARTIST_CONTRACT_ADDRESS = '0x10A4c4758a5dC80BdB4A49F5C5EBAD0B0712187e'
export const ARTIST_ABI = [
	{
	  "inputs": [],
	  "name": "Freechain__AlreadyAnArtist",
	  "type": "error"
	},
	{
	  "inputs": [],
	  "name": "Freechain__OnlyArtists",
	  "type": "error"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "dateJoined",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "artistAddress",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "string",
		  "name": "artistDetails",
		  "type": "string"
		}
	  ],
	  "name": "newArtistJoined",
	  "type": "event"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "artistByAddress",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "dateJoined",
		  "type": "uint256"
		},
		{
		  "internalType": "address",
		  "name": "artistAddress",
		  "type": "address"
		},
		{
		  "internalType": "string",
		  "name": "artistDetails",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "artistCount",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "name": "artists",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "dateJoined",
		  "type": "uint256"
		},
		{
		  "internalType": "address",
		  "name": "artistAddress",
		  "type": "address"
		},
		{
		  "internalType": "string",
		  "name": "artistDetails",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getAllArtists",
	  "outputs": [
		{
		  "components": [
			{
			  "internalType": "uint256",
			  "name": "id",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "dateJoined",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "artistAddress",
			  "type": "address"
			},
			{
			  "internalType": "string",
			  "name": "artistDetails",
			  "type": "string"
			}
		  ],
		  "internalType": "struct FreechainArtist.Artist[]",
		  "name": "",
		  "type": "tuple[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getCreatorofTheDay",
	  "outputs": [
		{
		  "components": [
			{
			  "internalType": "uint256",
			  "name": "id",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "dateJoined",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "artistAddress",
			  "type": "address"
			},
			{
			  "internalType": "string",
			  "name": "artistDetails",
			  "type": "string"
			}
		  ],
		  "internalType": "struct FreechainArtist.Artist",
		  "name": "",
		  "type": "tuple"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "isArtist",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_artistDetails",
		  "type": "string"
		}
	  ],
	  "name": "newArtistSignup",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_artistDetails",
		  "type": "string"
		},
		{
		  "internalType": "uint256",
		  "name": "_artistid",
		  "type": "uint256"
		}
	  ],
	  "name": "updateArtistDetails",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}
  ]
export const MARKET_ADDRESS = '0xff808193E14cA3Cfd7D100Fce24179300EF332D1';
export const MARKET_ABI = [
	{
	  "inputs": [],
	  "name": "Freechain__ERC721AlreadyListed",
	  "type": "error"
	},
	{
	  "inputs": [],
	  "name": "Freechain__ERC721ApprovalRequired",
	  "type": "error"
	},
	{
	  "inputs": [],
	  "name": "Freechain__ERC721NotOwner",
	  "type": "error"
	},
	{
	  "inputs": [],
	  "name": "Freechain__ListingNotOpen",
	  "type": "error"
	},
	{
	  "inputs": [],
	  "name": "Freechain__SellerNotOwner",
	  "type": "error"
	},
	{
	  "inputs": [],
	  "name": "Freechain__WrongPrice",
	  "type": "error"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "_tokenId",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "_nftAddress",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "_seller",
		  "type": "address"
		}
	  ],
	  "name": "ListingCancelled",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "_price",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "_tokenId",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "_nftAddress",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "_seller",
		  "type": "address"
		}
	  ],
	  "name": "ListingCreated",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "_price",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "_tokenId",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "_nftAddress",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "_seller",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "_buyer",
		  "type": "address"
		}
	  ],
	  "name": "ListingSold",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "previousOwner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "newOwner",
		  "type": "address"
		}
	  ],
	  "name": "OwnershipTransferred",
	  "type": "event"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "listingId",
		  "type": "uint256"
		}
	  ],
	  "name": "buyListing",
	  "outputs": [],
	  "stateMutability": "payable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "listingId",
		  "type": "uint256"
		}
	  ],
	  "name": "cancelListing",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_tokenId",
		  "type": "uint256"
		},
		{
		  "internalType": "address",
		  "name": "_nftAddress",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "_price",
		  "type": "uint256"
		}
	  ],
	  "name": "createListing",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getAllActiveListings",
	  "outputs": [
		{
		  "components": [
			{
			  "internalType": "uint256",
			  "name": "id",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "price",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "nftAddress",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "seller",
			  "type": "address"
			},
			{
			  "internalType": "enum FreechainMarketplace.State",
			  "name": "state",
			  "type": "uint8"
			}
		  ],
		  "internalType": "struct FreechainMarketplace.Listing[]",
		  "name": "",
		  "type": "tuple[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "userAddress",
		  "type": "address"
		}
	  ],
	  "name": "getListingsByUser",
	  "outputs": [
		{
		  "components": [
			{
			  "internalType": "uint256",
			  "name": "id",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "price",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "nftAddress",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "seller",
			  "type": "address"
			},
			{
			  "internalType": "enum FreechainMarketplace.State",
			  "name": "state",
			  "type": "uint8"
			}
		  ],
		  "internalType": "struct FreechainMarketplace.Listing[]",
		  "name": "",
		  "type": "tuple[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "owner",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "renounceOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "newOwner",
		  "type": "address"
		}
	  ],
	  "name": "transferOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}
  ]
export const FACTORY_ADDRESS = '0xf8e1291d49a9Dfb32E79d3861BA3d806dE293A3f';
export const FACTORY_ABI = [
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "tokenContract",
		  "type": "address"
		}
	  ],
	  "name": "ERC1155Created",
	  "type": "event"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "artist",
		  "type": "address"
		}
	  ],
	  "name": "AllArtistContracts",
	  "outputs": [
		{
		  "internalType": "address[]",
		  "name": "",
		  "type": "address[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "name": "ArtistToContracts",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_contractHash",
		  "type": "string"
		},
		{
		  "internalType": "string[]",
		  "name": "_hashOfNFTS",
		  "type": "string[]"
		},
		{
		  "internalType": "uint256[]",
		  "name": "quantities",
		  "type": "uint256[]"
		}
	  ],
	  "name": "deployERC1155",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}
  ]

export const ERC1155TOKEN_ABI = [
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_contractHash",
		  "type": "string"
		},
		{
		  "internalType": "string[]",
		  "name": "_hashOfNFTS",
		  "type": "string[]"
		},
		{
		  "internalType": "uint256[]",
		  "name": "_quantities",
		  "type": "uint256[]"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "operator",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "bool",
		  "name": "approved",
		  "type": "bool"
		}
	  ],
	  "name": "ApprovalForAll",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "previousOwner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "newOwner",
		  "type": "address"
		}
	  ],
	  "name": "OwnershipTransferred",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "operator",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256[]",
		  "name": "ids",
		  "type": "uint256[]"
		},
		{
		  "indexed": false,
		  "internalType": "uint256[]",
		  "name": "values",
		  "type": "uint256[]"
		}
	  ],
	  "name": "TransferBatch",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "operator",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "TransferSingle",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "string",
		  "name": "value",
		  "type": "string"
		},
		{
		  "indexed": true,
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		}
	  ],
	  "name": "URI",
	  "type": "event"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "name": "_tokenURIs",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		}
	  ],
	  "name": "balanceOf",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address[]",
		  "name": "accounts",
		  "type": "address[]"
		},
		{
		  "internalType": "uint256[]",
		  "name": "ids",
		  "type": "uint256[]"
		}
	  ],
	  "name": "balanceOfBatch",
	  "outputs": [
		{
		  "internalType": "uint256[]",
		  "name": "",
		  "type": "uint256[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "contractHash",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		}
	  ],
	  "name": "exists",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getTotalChildren",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "account",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "operator",
		  "type": "address"
		}
	  ],
	  "name": "isApprovedForAll",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "mintAll",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "owner",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "renounceOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256[]",
		  "name": "ids",
		  "type": "uint256[]"
		},
		{
		  "internalType": "uint256[]",
		  "name": "amounts",
		  "type": "uint256[]"
		},
		{
		  "internalType": "bytes",
		  "name": "data",
		  "type": "bytes"
		}
	  ],
	  "name": "safeBatchTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		},
		{
		  "internalType": "bytes",
		  "name": "data",
		  "type": "bytes"
		}
	  ],
	  "name": "safeTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "operator",
		  "type": "address"
		},
		{
		  "internalType": "bool",
		  "name": "approved",
		  "type": "bool"
		}
	  ],
	  "name": "setApprovalForAll",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "bytes4",
		  "name": "interfaceId",
		  "type": "bytes4"
		}
	  ],
	  "name": "supportsInterface",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		}
	  ],
	  "name": "totalSupply",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "newOwner",
		  "type": "address"
		}
	  ],
	  "name": "transferOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "id",
		  "type": "uint256"
		}
	  ],
	  "name": "uri",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	}
  ]