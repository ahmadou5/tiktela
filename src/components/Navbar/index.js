
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import Link from "next/link";


export const Navbar = () => {
 
  const [show, setShow] = useState(false);
  

  const Pages = [
    
  ];
  return (
    <div>
      <div
        style={{ "backdrop-filter": "blur(12px)" }}
        className=" backdrop-blur-lg bg-clip-padding bg-opacity-60 z-10 fixed text-white sm:flex w-[100%] h-20 lg:hidden md:hidden"
      >
        <div className="w-[98%] flex flex-row mt-1 py-2 px-2 ml-auto mr-auto h-[90%]">
          <div className="ml-0 mr-auto mt-auto mb-auto">
            <Link href={"/"}>
              <div className="text-xl font-semibold flex">
                <p className="text-white text-3xl font-thin ml-1">Tik<span className="text-green-400">Tela</span></p>
              </div>
            </Link>
          </div>
          <div className="mr-3 ml-3 mt-auto mb-auto">
            <div className="flex ml-auto mr-auto flex-row">
              <div className=" items-end mr-0">
              <div className="w-[280px] ml-auto mr-3">
                {/**<ConnectWallet/>**/}
           <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
              }) => {
                const ready = authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="rounded-[3.125rem]  p-[0.42rem] border-[0.5px] w-[9.38rem] h-10 bg-green-500 text-white border-[#424242]"
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="rounded-[3.125rem] p-[0.62rem] border-[0.5px] w-fit h-10 bg-[#9e2f2f] text-white border-[#424242]"
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      style={{ display: "flex", alignItems: "center" }}
                      type="button"
                      className="bg-[#28282B] text-white p-[0.625rem] h-10 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]"
                    >
                      {chain.hasIcon && (
                        <div
                          className="w-auto h-auto xl:w-7 xl:h-7"
                          style={{
                            background: chain.iconBackground,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              height={5}
                              width={5}
                              src={chain.iconUrl}
                              className=" h-6 w-6  xl:w-7 xl:h-7"
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                      <img
                        width={10}
                        height={10}
                        className="hidden xl:inline-block"
                        src="/icons/chevron-down.svg"
                        alt="chevron-down"
                      />
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] h-10 w-32 rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]"
                    >
                      {account.displayName}
                    </button>
                  </div>
                );
              })()}
            </div>)
              }}
            </ConnectButton.Custom>
            </div>

              </div>
            </div>
          </div>
        </div>
        {show && "Hello"}
      </div>
      {/**for desktop view **/}
      <div
        style={{ "backdrop-filter": "blur(12px)" }}
        className="mb-5 bg-transaparent backdrop-blur-lg bg-clip-padding bg-opacity-60 fixed z-10 text-black lg:flex md:flex hidden w-[100%] h-20"
      >
        <div className="py-5 px-5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
          <div className="ml-0 mr-auto">
            <Link href={"/"}>
              <div className="text-sm flex">
                {/**<img className="w-[52px] h-[52px]" src="./assets/body.png" />**/}
                <p className="text-white text-3xl font-thin ml-1">Tik<span className="text-green-400">Tela</span></p>
              </div>
            </Link>
          </div>
          <div className="mr-auto ml-auto px-2 py-2">
            <div className="flex flex-row">
              {Pages.map((page, i) => (
                <div key={i} className="flex ml-2 mr-2">
                  <p className="ml-0 mr-0 text-white cursor-pointer hover:font-light font-bold text-lg">
                    {page.name}
                  </p>
                  
                </div>
              ))}
            </div>
          </div>
          {/**<ConnectWallet className="h-12" />**/}
          <div className="w-[280px] ml-[60px] mr-[0px]">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
              }) => {
                const ready = authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="rounded-[3.125rem]  p-[0.42rem] border-[0.5px] w-[9.38rem] h-10 bg-green-500 text-white border-[#424242]"
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="rounded-[3.125rem] p-[0.62rem] border-[0.5px] w-fit h-10 bg-[#9e2f2f] text-white border-[#424242]"
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      style={{ display: "flex", alignItems: "center" }}
                      type="button"
                      className="bg-[#28282B] text-white p-[0.625rem] h-10 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]"
                    >
                      {chain.hasIcon && (
                        <div
                          className="w-auto h-auto xl:w-7 xl:h-7"
                          style={{
                            background: chain.iconBackground,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              height={5}
                              width={5}
                              src={chain.iconUrl}
                              className="w-auto h-auto xl:w-7 xl:h-7"
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                      <img
                        width={10}
                        height={10}
                        className="hidden xl:inline-block"
                        src="/icons/chevron-down.svg"
                        alt="chevron-down"
                      />
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] h-10 w-32 rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]"
                    >
                      {account.displayName}
                    </button>
                  </div>
                );
              })()}
            </div>)
              }}
            </ConnectButton.Custom> 
            </div>

        </div>
      </div>
    </div>
  );
};
