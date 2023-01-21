import '@/styles/globals.css'
import { NinetailedProvider } from '@ninetailed/experience.js-next'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NinetailedProvider clientId="005bdece-a11c-45b4-a21e-b566f8eeb489">
      <Component {...pageProps} />
    </NinetailedProvider>
  )
  
  
}
