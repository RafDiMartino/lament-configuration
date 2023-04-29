import { useGLTF, OrbitControls, useHelper, useTexture, Plane } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import LamentConfig from './LamentConfig'
import { PointLight, PointLightHelper, DirectionalLight, DirectionalLightHelper, LinearEncoding } from 'three'
import { useRef, Suspense } from 'react'

export default function PuzzleBox(){
    const model = useGLTF('./lament-final-nom-opt.glb')    

    const lightRef = useRef<PointLight>(null!)
    const dirLightRef = useRef<DirectionalLight>(null!)
    useHelper(lightRef, PointLightHelper, 1, "red")
    useHelper(dirLightRef, DirectionalLightHelper, 1, "red")

    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />
            <pointLight ref={lightRef} castShadow  position={ [ 5, 5, 0 ] } intensity={ 1.5 } shadow-normalBias={0.04}/>
            {/* <directionalLight ref={dirLightRef} castShadow  position={ [ -1, 7, -5 ] } intensity={ 5 } shadow-normalBias={0.04}/> */}

            {/* <primitive object={model.scene} scale={1} >
                <meshStandardMaterial
                    map={woodTexture}
                    attach='background'
                />
            </primitive> */}
            <Suspense fallback={null}>
                <LamentConfig/>
            </Suspense>

        </>
    )

}