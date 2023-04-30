import { useGLTF, OrbitControls, useHelper, useTexture, Plane } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import LamentConfig from './LamentConfig'
import { PointLight, PointLightHelper, DirectionalLight, DirectionalLightHelper, AmbientLight } from 'three'
import { useRef, Suspense } from 'react'

export default function PuzzleBox(){
    const model = useGLTF('./lament-final-opt.glb')    

    const poiLightRef = useRef<PointLight>(null!)
    const dirLightRef = useRef<DirectionalLight>(null!)
    useHelper(poiLightRef, PointLightHelper, 1, "red")
    useHelper(dirLightRef, DirectionalLightHelper, 1, "red")

    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />
            <pointLight ref={poiLightRef} castShadow  position={ [ 5, 5, 0 ] } intensity={ 1.5 } shadow-normalBias={0.04}/>
            <directionalLight ref={dirLightRef} castShadow  position={ [ -1, -7, -5 ] } intensity={ 1 } shadow-normalBias={0.04}/>
            <ambientLight intensity={0.8}/>
            <primitive object={model.scene} scale={1} material/>
{/* 
            <Suspense fallback={null}>
                <LamentConfig/>
            </Suspense> */}

        </>
    )

}