import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <>

      <Head>
        <title>Lament Configuration</title>
        <meta name="description" content="Raf Di Martino | Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <main>
        <div className='flex justify-center items-center'>Initial Setup</div>
      </main>
    </>

  )
}
