import { useState, useEffect } from "react";
import { useProvider, useSigner, useContract } from "wagmi";
import { ERC1155TOKEN_ABI } from "../../constants/index";

const CollectionCard = ({ contract }) => {
  const [details, setDetails] = useState({});

  const provider = useProvider();
  const signer = useSigner();
  // Set up a contract instance
  const ERC1155Contract = useContract({
    addressOrName: contract,
    contractInterface: ERC1155TOKEN_ABI,
    signerOrProvider: signer.data || provider,
  });

  useEffect(() => {
    const fetchDetails = async () => {
      const _details = await ERC1155Contract.contractHash();
      let res = await fetch(`https://ipfs.io/ipfs/${_details}/nft.json`)
      console.log(res);
      setDetails({
        res,
      });
    };
    fetchDetails();
  }, [ERC1155Contract]);

  return <div>{contract}</div>;
};

export default CollectionCard;
