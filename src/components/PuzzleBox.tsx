import React from 'react'
import { meshBounds, OrbitControls, useHelper, useTexture, Plane, Float, ContactShadows, useEnvironment, Environment, Box, CameraShake, } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { useRef, Suspense, useEffect, useState } from 'react'
import LamentTS from './LamentTS'
import Lights from './Lights'


export default function PuzzleBox(){
    
    let test = true
    
    const [autoRotation, setRotation] = useState({autoRotate:true})
    console.log(autoRotation)
    const handleClick = (event: { stopPropagation: () => void; object: { name: any } }) => {
        event.stopPropagation()
        // test = !test
        setRotation((autoRotation) => ({...autoRotation, autoRotate: test}))
        console.log(event.object.name)
        test = !test
    }

    const handleDoubleClick = (event: { stopPropagation: () => void; object: { name: any } }) => {
        event.stopPropagation()
        // test = !test
        setRotation((autoRotation) => ({...autoRotation, autoRotate: test}))
        console.log(event.object.name)
        test = !test
    }

    // const model = useGLTF('./lament-final-opt.glb')    

    // const envMap = useEnvironment({files: './syferfontein_18d_clear_puresky_2k.hdr'})

    const envMap = useEnvironment({path: './enviroment'})

    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault maxDistance={20} minDistance={5} {...autoRotation}/>

            <Lights/>

            <Environment map={envMap}/>

            {/* <Suspense fallback={null}>
                <LamentTS position={[0, -1, 0]} onClick={handleClick} />
            </Suspense> */}

            <Suspense fallback={null}>
                <LamentTS 
                    // raycast={meshBounds}
                    position={[0, -1, 0]} 
                    onClick={handleClick}
                    onDoubleClick={handleDoubleClick}
                    onPointerEnter={() => document.body.style.cursor = 'pointer'} 
                    onPointerLeave={() => document.body.style.cursor = 'default'} 
                />
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