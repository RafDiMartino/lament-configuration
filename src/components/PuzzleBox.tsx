import React from 'react'
import { meshBounds, OrbitControls, useEnvironment, Environment } from '@react-three/drei'
import LamentTS from './LamentTS'
import Lights from './Lights'
import * as THREE from 'three'

export default function PuzzleBox(){

    const envMap = useEnvironment({path: './enviroment', encoding: THREE.sRGBEncoding})
    
    return(
        <>
            <OrbitControls makeDefault maxDistance={20} minDistance={5} />
            
            <Lights/>

            <Environment map={envMap} background blur={0.5} resolution={1024} />

            <LamentTS 
                raycast={meshBounds}
                position={[0, -1, 0]} 
                onPointerEnter={() => document.body.style.cursor = 'pointer'} 
                onPointerLeave={() => document.body.style.cursor = 'default'} 
            />
        </>
    )

}