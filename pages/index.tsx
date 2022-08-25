import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dielle Impianti</title>
        <meta name="description" content="Dielle Impianti" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css" />
      </Head>
      <h1 className="text-3xl font-bold  underline">
        Hello world!
      </h1>
    </>
  )
}

export default Home
