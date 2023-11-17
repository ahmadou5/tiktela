'use client'
import CustomInput from "./CustomInput";
import { Event } from "@/utils/Contracts";
import { useAddress, useContract, useOwnedNFTs, Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import {
    useContractWrite,
    usePrepareContractWrite,
    useAccount,
  } from "wagmi";
export const Modal = ({
  date,
  name,
  location,
  descri,
  price,
  contract,
  
}) => {
  const [isOpen, setIsOpen] = useState(false)
    //const smartWalletAddress = useAddress();
  {/**  const { address:userAddress } = useAccount()
  // Fetch owned NFTs
    //const { contract, error:contractErr } = useContract("0x967e19C9a147d7EDB5cc3Bbdd91bE77A15D237E2");
    const error = false
    const [isOpen, setIsOpen] = useState(false)
    const { config: MintEvent } = usePrepareContractWrite({
        address: Event.address,
        abi: Event.abi,
        functionName: "mintNFT",
        args: [userAddress, 'no uri'],
        gas: 40000,
      });
      const {
        write: mint,
        isSuccess,
        isLoading,
        data: tokendata,
      } = useContractWrite(MintEvent);
     const handleMint = async () => {
        await mint?.();
        alert('workin')
     } **/}
    return(
    <div className="mt-20">
        <main
      id="modal"
      className={`bg-[#3F3F46]/50 w-full absolute  flex min-h-screen justify-center items-center z-[0]`}
    >
      {/* modal */}
      <div className="bg-[#1D1C20] rounded-[0.625rem] p-6 xl:p-8 pt-10 w-[90%] md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
        <section onClick={() => setIsOpen(true)} className="text-white pb-[1.5rem] cursor-pointer flex justify-between items-center border-b border-[#26272b]">
          <h1 className="tracking-[-0.015rem] text-xl md:text-2xl">
            {`${isOpen ? 'Book a Ticket' : name }`}
          </h1>
          
        </section>
        <div className="mt-[1.62rem]">
         
        </div>
        <div className={`h-[400px] ${isOpen ? 'flex' : 'hidden'} w-[100%]`} >
            <div className="w-[90%]  h-[95%] py-1 px-1 ml-auto mr-auto" >
                <div className="mt-5 ml-auto mr-auto w-[91%] bg-slate-400/50 h-9 rounded-xl py-1 px-2 mb-5">{name}</div>
                <div className="mt-5 w-[90%] ml-auto mr-auto h-[140px] bg-slate-400/50 py-2 px-4  rounded-2xl mb-5">{descri}</div>
                <div className="mt-5 ml-auto mr-auto w-[91%] bg-slate-400/50 h-9 rounded-xl py-1 px-3 mb-5">{date}</div>
                <div className="mt-5 ml-auto mr-auto w-[91%] bg-slate-400/50 h-9 rounded-xl py-1 px-3 mb-5">{location}</div>
                <div className="mt-5 ml-auto mr-auto w-[91%] bg-slate-400/50 h-9 rounded-xl py-1 px-3 mb-5">{price}</div>
            </div>
        </div>
        <div className={`flex flex-col ${isOpen ? 'flex' : 'hidden'} gap-6`}>

          <div  className="flex gap-2  md:items-center mt-4 ml-auto w-fit">
            <button
              onClick={() => {
               //handleMint()
               alert('ji')
              }}
              className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[10.625rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
            >
              {'Book'}
            </button>
            
          </div>
        </div>
      </div>
    </main>
    </div>
    )
}