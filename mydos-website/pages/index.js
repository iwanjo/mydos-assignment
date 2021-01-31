import Head from 'next/head'
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>MyDos Technology - Home</title>
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <Hero />

    </>

  )
}
