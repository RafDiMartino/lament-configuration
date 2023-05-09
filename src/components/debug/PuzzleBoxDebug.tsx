import React from 'react'
import { meshBounds, OrbitControls, useEnvironment, Environment, Float } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import LightsDebug from './LightsDebug'
import * as THREE from 'three'
import { Model } from '../Model'

export default function PuzzleBoxDebug(){

    // const model = useGLTF('./lament-final-opt.glb')    

    // const envMap = useEnvironment({files: './kloppenheim_02_2k.hdr'})

    const envMap = useEnvironment({path: './enviroment', encoding: THREE.sRGBEncoding})
    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault  />
            {/* maxDistance={20} minDistance={5} */}
            
            <LightsDebug/>

            <Environment map={envMap} background blur={0.5} resolution={1024} />
            <Float 
                speed={1} // Animation speed, defaults to 1
                rotationIntensity={1.1} // XYZ rotation intensity, defaults to 1
                floatIntensity={0.03} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
                <Model
                    raycast={meshBounds}
                    position={[0, -1.5, 0]} 
                    onPointerEnter={() => document.body.style.cursor = 'pointer'} 
                    onPointerLeave={() => document.body.style.cursor = 'default'} 
                />
            </Float>

        </>
    )

}