import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import PuzzleBox from 'component/components/PuzzleBox'
import { Center } from '@react-three/drei'
import { useControls } from 'leva'

export default function Home() {

  const { color } = useControls({
    color: '#000000'
})
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
        <color args={[color]} attach='background'/>
        <Center>
          <PuzzleBox />
        </Center>

      </Canvas>
    </>

  )
}
