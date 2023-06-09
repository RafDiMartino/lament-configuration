import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import PuzzleBox from '../components/PuzzleBox'
import { Center } from '@react-three/drei'
import * as THREE from 'three'
import { Suspense } from 'react'
import Loaders from 'component/components/Loaders'

export default function Home() {

  return (
    <>

      <Head>
        <title>Lament Configuration</title>
        <meta name="description" content="LeMarchand's Box" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, alpha: false, outputEncoding: THREE.sRGBEncoding }}
        flat
        shadows={true}
        camera={ {
            fov: 45,
            near: 0.01,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
      >
        <color args={['#0b0b0b']} attach='background'/>

        <Suspense fallback={<Loaders />}>

          <Center >
            <PuzzleBox />
          </Center>

        </Suspense>
      </Canvas>

    </>
  )
}