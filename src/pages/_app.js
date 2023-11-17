import '@/styles/globals.css'
import { EthProvider } from './web3Provider'

export default function App({ Component, pageProps }) {
  return (
    <EthProvider>
      <Component {...pageProps} />
    </EthProvider>
  )
}
