import { useGLTF, OrbitControls, useHelper, useTexture, Plane, Float, ContactShadows, useEnvironment, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import LamentConfig from './LamentConfig'
import { useRef, Suspense } from 'react'
import LamentTS from './LamentTS'
import Lights from './Lights'

export default function PuzzleBox(){

    const model = useGLTF('./lament-final-opt.glb')    

    // const envMap = useEnvironment({files: './neon_photostudio_2k.hdr'})
    const envMap = useEnvironment({path: './enviroment'})

    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />
           
            {/* <Lights /> */}

            <Environment map={envMap} />

            <Suspense fallback={null}>
                <LamentTS/>
            </Suspense>

            {/* <LamentConfig/> */}
            {/* <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}> */}
                {/* <LamentTS /> */}
            {/* </Float> */}
            
            {/* <ContactShadows position={[0, -0.3, 0]} blur={2.5} scale={20} far={10}/> */}

            {/* <mesh>
            <planeGeometry />
            <meshStandardMaterial color="orange" metalness={0.5} roughness={0}/>
            </mesh> */}
        </>
    )

}