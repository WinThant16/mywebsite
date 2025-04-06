import type { AppProps } from 'next/app'
import './index.css' // Global styles (Tailwind + fonts)

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
