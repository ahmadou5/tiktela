import Image from 'next/image'
import { Inter, Questrial } from 'next/font/google'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'


const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${questrial.variable} ${NeueHaasDisplay.variable} relative flex max-h-screen justify-between`}>
      <Navbar />
      <div className='w-[80%] ml-auto mt-[240px] mr-auto text-center h-screen'>
      <div className=" text-white text-center xl:text-center pr-[1.06rem] sm:pr-8 ">
        <h1 className="lg:text-5xl text-xl  mb-8 sm:mb-2 sm:text-[2.5rem] tracking-[-0.075rem] sm:leading-[3.375rem]">
          Welcome to
          <span className="bg-green-400/70 bg-clip-text text-transparent">
            TickTela
          </span>
          the On-Chain Event Management Protocol
        </h1>
        <p className="text-[#D1D1D6] mt-11 mb-8 tracking-[-0.01125rem] text-lg md:text-xl w-full xl:pr-52">
          Easily Create and Maintain Events with our easy to use platform, Create Your Events, Sell Tickets to
          your audiance Securely and Seemlessly on
         
          <span className="text-green-400/60">TickTela</span>
        </p>
        <div className="flex justify-center items-center xl:justify-start">
          <Link href={'/create'}>
          <button
            
            className="mr-8 text-base outline-none rounded-2xl w-[180px] h-12 py-2 px-3 bg-green-500/70 text-white"
          >
            Create Event
          </button>
          </Link>
          <Link href={'/register'}>
          <button
           
           className="text-base outline-none">Book Events</button>
          </Link>
        </div>
      </div>
      <div className="mt-[3.69rem] mb-[5.19rem] whitespace-nowrap pr-[1.06rem] sm:pr-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.88rem]">
        {/* TOTAL LIQUIDITY RAISED */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL EVENTS CREATED
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              39
            </h1>
          </div>
        </section>
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL USERS
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              35K
            </h1>
          </div>
        </section> 
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL TICKET VALUE
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              3M
            </h1>
          </div>
        </section>
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL TICKET SOLD
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              378K
            </h1>
          </div>
        </section> 
      </div>
      
      </div>
    </main>  )
}
