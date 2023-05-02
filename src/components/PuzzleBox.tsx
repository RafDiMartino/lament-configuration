import React from 'react'
import { useGLTF, OrbitControls, useHelper, useTexture, Plane, Float, ContactShadows, useEnvironment, Environment, Box, CameraShake, } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import LamentConfig from './LamentConfig'
import { useRef, Suspense, useEffect, useState } from 'react'
import LamentTS from './LamentTS'
import Lights from './Lights'


export default function PuzzleBox(){
    let test = true

    const handleClick = () => {
        test = !test
        setRotation({
            autoRotate: !test
        })
        
        console.log(test);
    }
    const [autoRotate, setRotation] = useState({
        autoRotate: test
    })
    
    // const model = useGLTF('./lament-final-opt.glb')    

    // const envMap = useEnvironment({files: './syferfontein_18d_clear_puresky_2k.hdr'})

    const envMap = useEnvironment({path: './enviroment'})

    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault maxDistance={20} minDistance={5} {...autoRotate}/>
           
            <Lights/>

            <Environment map={envMap}/>

            <Suspense fallback={null}>
                <LamentTS position={[0, -1, 0]} onClick={handleClick}/>
            </Suspense>

            {/* <LamentConfig/> */}
            {/* <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}> */}
                {/* <LamentTS /> */}
            {/* </Float> */}
            
            {/* <ContactShadows position={[0, -0.3, 0]} blur={2.5} scale={20} far={10}/> */}
            {/* <mesh ref={cube} scale={2} onClick={handleClick}>
                <boxGeometry />
                <meshStandardMaterial color="orange" metalness={1} roughness={0}/>
            </mesh> */}

            {/* <Plane receiveShadow position={[0,-1, 0]} rotation={[20.42, -3.14, 0,]} scale={5}>
                <meshStandardMaterial color="orange" metalness={0} roughness={0}/>
            </Plane> */}


        </>
    )

}