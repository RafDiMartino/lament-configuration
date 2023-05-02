import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import PuzzleBox from '../components/PuzzleBox'
import { Center, PerspectiveCamera } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'

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
        <title>Lament Configuration</title>
        <meta name="description" content="Raf Di Martino | Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping, alpha: false }}
        // colorManagement={false}
        flat
        // linear
        shadows
        camera={ {
            fov: 45,
            near: 0.01,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
      >
        {/* <CameraHelper /> */}
        <color args={['#1e1e1e']} attach='background'/>
        <Center>
          <PuzzleBox />
        </Center>

      </Canvas>
    </>

  )
}
