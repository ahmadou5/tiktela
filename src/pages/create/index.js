'use client'
//import { Modal } from "@/components/modal"
import { CreateModal } from "@/components/CreateModal"
import { Navbar } from "@/components/Navbar"
import { useState } from "react"
import { EventDeployer } from '@/utils/Contracts'
import {
    useContractWrite,
    usePrepareContractWrite,
    useAccount,
  } from "wagmi";

import { ethers } from "ethers"


export default function Create() {
    const { config } = usePrepareContractWrite({
        address: EventDeployer.address,
        abi: EventDeployer.abi,
        functionName: "deployToken",
        args: [
            'Ahmadou',
          'AHM',
          123333333
        ],
        gas: 3000000,
      });
      const {
        write: mint,
        isSuccess,
        isError,
        isLoading,
        data: tokendata,
      } = useContractWrite(config);
     const handleDeploy = async () => {
       try {
        await mint?.();
        
       } catch (error) {
        alert(error);
        console.log(error)
       }
     }
     
    const [isOpen , setIsOpen] = useState(false)
    return(
    <div className="flex">
        <Navbar />
        
        <div className="mt-20 w-[100%] ml-auto mr-auto ">
            {isError && <div className="text-white w-[80%] h-12 mt-40 bg-red-700">Error</div>}
            { isOpen ? <div className="w-[100%] h-auto ml-auto mr-auto mt-3"><CreateModal/></div> :
             (
              <div className="h-10 flex items-center w-[50% ml-auto mr-auto mt-[300px] ">
            { !isSuccess && <button
              onClick={() => handleDeploy()}
              className="bg-green-500/70 disabled:bg-[#C38CC3]/80 hover:bg-green-500/90 w-[10.625rem] ml-auto mr-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-white text-[0.875rem]"
            >
              {isLoading ? 'Initializing...' : 'Initialize Event'}
            </button>}
            { isSuccess && <button
              onClick={() => setIsOpen(true)}
              className="bg-green-500/70 disabled:bg-[#C38CC3]/80 hover:bg-green-500/90 w-[10.625rem] ml-auto mr-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-white text-[0.875rem]"
            >
              {'Set Metadata'}
            </button>}
              </div>
              )
            }
        </div>
    </div>
    )

}