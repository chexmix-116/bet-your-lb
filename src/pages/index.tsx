import { HeroBanner } from '@/components/hero-banner'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Bet Your Pound</title>
        <meta name="description" content="Bet Your Pound" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroBanner></HeroBanner>
      </main>
    </>
  )
}
