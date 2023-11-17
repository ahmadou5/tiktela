'use client'
//import { Modal } from "@/components/modal"
import { CreateModal } from "@/components/CreateModal"
import { Navbar } from "@/components/Navbar"
import { useState } from "react"
//import { EventDeployer } from '@/utils/Contracts'
import { PublicClient } from "wagmi"

//import { ethers } from "ethers"


export default function Create() {
    {/**const { config } = usePrepareContractWrite({
        address: EventDeployer.address,
        abi: EventDeployer.abi,
        functionName: "deployToken",
        args: [
            'Ahmadou',
          'AHM',
          ethers.utils.parseEther('1000000')
        ],
        gas: 400000,
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
        alert('clicked')
       } catch (error) {
        alert(error);
        console.log(error)
       }
     }**/}
     const isSuccess = false
     const isLoading = true
    const [isOpen , setIsOpen] = useState(false)
    return(
    <div className="flex">
        <Navbar />
        <div className="mt-20 w-[90%] ml-auto mr-auto ">
            {
             (
              <div className="h-10 flex items-center w-[50% ml-auto mr-auto mt-[300px] ">
            { !isSuccess && <button
             
              className="bg-green-500/70 disabled:bg-[#C38CC3]/80 hover:bg-green-500/90 w-[10.625rem] ml-auto mr-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-white text-[0.875rem]"
            >
              {isLoading ? 'Initializing...' : 'Initialize Event'}
            </button>}
            { isSuccess && <button
            
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