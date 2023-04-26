import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'


export default function Home() {
  return (
    <>

      <Head>
        <title>Lament Configuration</title>
        <meta name="description" content="Raf Di Martino | Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
      >
        
      </Canvas>
    </>

  )
}
