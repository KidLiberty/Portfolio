import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const emojiFavicon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <text x="0" y="32" font-size="42">🧑🏻‍💻</text>
  </svg>
`;

  const emojiFaviconUrl = `data:image/svg+xml,${encodeURIComponent(emojiFavicon)}`;

  return (
    <>
      <Head>
        <link rel='icon' href={emojiFaviconUrl} type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}