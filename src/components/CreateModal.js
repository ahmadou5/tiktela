'use client'
import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

import { ethers } from "ethers";
//import { etherUnits } from "viem";
export const CreateModal = () => {
    const [selectedTokenType, setSelectedTokenType] = useState("Virtual Event");
    const [eventName, setEventName] = useState('')
    const [eventLocation, setEventLocation] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventDescription, setEventDescription] = useState('')
    const [eventSupply, setEventSupply] = useState(0)
    const [eventPrice, setEventPrice] = useState(0)
    const error = false
    const tokenTypes = [
        {
          id: 0,
          value: "Virtual Event",
        },
        {
          id: 1,
          value: "In-Person Event",
        },
        
      ];

   
    return(
    <div>
        <main
      id="modal"
      className="bg-[#3F3F46]/50 w-full absolute flex min-h-screen justify-center items-center z-[9]"
    >
      {/* modal */}
      <div className="bg-[#1D1C20] rounded-[0.625rem] p-6 xl:p-8 pt-10 w-[90%] md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
        <section className="text-white pb-[1.5rem] flex justify-between items-center border-b border-[#26272b]">
          <h1 className="tracking-[-0.015rem] text-xl md:text-2xl">
            {isLoading && <>Hello</>}
          </h1>
          
        </section>
        <div className="mt-[1.62rem]">
          <p className="mb-6 text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
            <span className="text-[#F04438]">(*) </span>is required field
          </p>
          {error && (
            <p className="text-[#F04438] mt-4 text-sm sm:text-base">{error}</p>
          )}
        </div>
        <form className="flex flex-col gap-6">
          {/* TOKEN TYPE */}
           {/* TOKEN TYPE */}
           <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <p>
              Event type<span className="text-[#F04438]">*</span>
            </p>
            <CustomSelect
              options={tokenTypes}
              header={selectedTokenType}
              setHeader={setSelectedTokenType}
            />
            {/* create Event fee 
            <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              Create Event fee: <span className="text-[#F3CE92]">0.2 Telos</span>
            </p>
           */}
          </div>
       
          {/* Event Type */}
          <CustomInput
            id="Event Name"
            className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Event Name"
            type="text"
            placeholder="Telos Hackerthon"
            value={eventName}
            onChange={(e) => {
              setEventName?.(e.target.value);
              setError?.("");
            }}
            isRequired={true}
          />
          
          <CustomInput
            id="Event Date"
            className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Event Date"
            type="date"
            placeholder="Event Description"
            value={eventDate}
            onChange={(e) => {
              setEventDate?.(e.target.value);
              setError?.("");
            }}
            isRequired={true}
          />
          <CustomInput
            id="Ticket Supply"
            className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Ticket Supply"
            type="number"
            placeholder="10000"
            value={eventSupply}
            onChange={(e) => {
              setEventSupply?.(e.target.value);
              setError?.("");
            }}
            isRequired={true}
          />
          <CustomInput
            id="Ticket Price"
            className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Ticket Price"
            type="number"
            placeholder="1 Eth"
            value={eventPrice}
            onChange={(e) => {
              setEventPrice?.(e.target.value);
              setError?.("");
            }}
            isRequired={true}
          />
          
        </form>
        <div className="flex gap-2 mt-6 md:items-center ml-auto w-fit">
            <button
              
              className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
            >
              Back
            </button>
            <button
             
              className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[10.625rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
            >
              {'Create Event'}
            </button>
          </div>
      </div>
    </main>
    </div>
    )
}