import React from 'react'
import { meshBounds, OrbitControls, useEnvironment, Environment } from '@react-three/drei'
import Lights from './Lights'
import * as THREE from 'three'
import { Lament2k } from './Lament2k'
import { Cube } from './Cube'

export default function PuzzleBox(){

    const envMap = useEnvironment({path: './enviroment', encoding: THREE.sRGBEncoding})
    
    return(
        <>
            <OrbitControls makeDefault maxDistance={20} minDistance={5} />
            
            <Lights/>

            <Environment map={envMap} background blur={0.5} resolution={256} />

            <Cube
                raycast={meshBounds}
                position={[0, -1, 0]} 
                onPointerEnter={() => document.body.style.cursor = 'pointer'} 
                onPointerLeave={() => document.body.style.cursor = 'default'} 
            />
        </>
    )

}