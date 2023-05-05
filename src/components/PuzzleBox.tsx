import React from 'react'
import { meshBounds, OrbitControls, useHelper, useTexture, Plane, Float, ContactShadows, useEnvironment, Environment, Box, CameraShake, TrackballControls, } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { useRef, Suspense, useEffect, useState } from 'react'
import LamentTS from './LamentTS'
import Lights from './Lights'
import { Group } from 'three'


export default function PuzzleBox(){
    
    // let test = true
    
    // const [autoRotation, setRotation] = useState({autoRotate:true})
    // console.log(autoRotation)
    // const handleClick = (event: { stopPropagation: () => void; object: { name: any } }) => {
    //     event.stopPropagation()
    //     // test = !test
    //     setRotation((autoRotation) => ({...autoRotation, autoRotate: test}))
    //     console.log(event.object.name)
    //     test = !test
    // }

    // const handleDoubleClick = (event: { stopPropagation: () => void; object: { name: any } }) => {
    //     event.stopPropagation()
    //     // test = !test
    //     setRotation((autoRotation) => ({...autoRotation, autoRotate: test}))
    //     console.log(event.object.name)
    //     test = !test
    // }

    // const model = useGLTF('./lament-final-opt.glb')    

    // const envMap = useEnvironment({files: './syferfontein_18d_clear_puresky_2k.hdr'})

    const envMap = useEnvironment({path: './enviroment'})

    
    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault maxDistance={20} minDistance={5} />
            {/* <TrackballControls />  {...autoRotation}*/}
            
            <Lights/>

            <Environment map={envMap} background blur={0.5}/>

            <LamentTS 
                // raycast={meshBounds}
                position={[0, -1, 0]} 
                // onClick={handleClick}
                // onDoubleClick={handleDoubleClick}
                onPointerEnter={() => document.body.style.cursor = 'pointer'} 
                onPointerLeave={() => document.body.style.cursor = 'default'} 
            />

        </>
    )

}