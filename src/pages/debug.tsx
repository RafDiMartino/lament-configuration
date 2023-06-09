import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import PuzzleBoxDebug from 'component/components/debug/PuzzleBoxDebug'
import { Center, PerspectiveCamera } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'
import { Suspense } from 'react'
import Loaders from 'component/components/Loaders'

export default function Home() {

  // function CameraHelper() {
  //   const camera = new THREE.PerspectiveCamera(45,1,5,10)
  //   return (
  //     <group position={[- 4, 3, 6]}>
  //       <cameraHelper args={[camera]}/>
  //     </group>
  //   )
  // }

  return (
    <>

      <Head>
        <title>Debug Lament Configuration</title>
        <meta name="description" content="LeMarchand's Box" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, alpha: false, outputEncoding: THREE.sRGBEncoding }}
        // colorManagement={false}
        flat
        // linear
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
            <PuzzleBoxDebug />
          </Center>

        </Suspense>
      </Canvas>

    </>
  )
}