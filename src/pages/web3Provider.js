import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const telos = {
    id: 41,
    name: 'Telos',
    network: 'telos',
    iconUrl: 'https://www.teloscan.io/img/evm_logo.b258c0a0.png',
    iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: 'Telos',
      symbol: 'TLOS',
    },
    rpcUrls: {
      public: { http: ['https://testnet.telos.net/evm'] },
      default: { http: ['https://testnet.telos.net/evm'] },
    },
    blockExplorers: {
      default: { name: 'TelosScan', url: 'https://testnet.teloscan.io' },
     
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 11_907_934,
      },
    },
    testnet: true,
  };

const { chains, publicClient } = configureChains(
    [ telos ],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'fa7b299471fa848b2dc52a5e1529ac37',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })

  
export default function EthProvider ({children}) {
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider coolMode theme={darkTheme()} chains={chains}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    );
  };