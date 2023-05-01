import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { PointLight, PointLightHelper, DirectionalLight, DirectionalLightHelper, RectAreaLight, SpotLight, SpotLightHelper } from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { useControls } from 'leva'
import * as THREE from 'three'

export default function Lights(){
    
    const { ambientIntensity, pointIntensity, dirIntensity, position } = useControls({
        ambientIntensity: {
            value: 1,
            min: 0,
            max: 10,
            step: 0.1,
        },
        pointIntensity: {
            value: 1,
            min: 0,
            max: 10,
            step: 0.1,
        },
        dirIntensity: {
            value: 1,
            min: 0,
            max: 10,
            step: 0.1,
        },
        position: [2, 0, 3]
    })
    const poiLightRef = useRef<PointLight>(null!)
    const dirLightRef = useRef<DirectionalLight>(null!)
    const dirLightRef2 = useRef<DirectionalLight>(null!)
    const rectAreaRef = useRef<RectAreaLight>(null!)
    const spotLightRef = useRef<SpotLight>(null!)
    useHelper(poiLightRef, PointLightHelper, 1, "red")
    useHelper(dirLightRef, DirectionalLightHelper, 1, "red")
    useHelper(dirLightRef2, DirectionalLightHelper, 1, "red")
    useHelper(rectAreaRef, RectAreaLightHelper, "white")
    useHelper(spotLightRef, SpotLightHelper, "red")

    return(
        <>
             {/* <pointLight 
                ref={poiLightRef} 
                castShadow  
                position={ [ 3, 4, -5 ] } 
                intensity={ pointIntensity } 
                shadow-normalBias={0.04}
                // distance={10}
                // decay={0}
            /> */}
            <directionalLight ref={dirLightRef} position={position} castShadow intensity={ dirIntensity } />
            <directionalLight ref={dirLightRef2} position={[0, -2, 0]} color={''} castShadow intensity={ dirIntensity } />
            <ambientLight intensity={ambientIntensity} />
            {/* <hemisphereLight args={['blue', 'red', 30]}/> */}
            {/* <primitive object={model.scene} scale={1} material/> */}
            {/* <rectAreaLight ref={rectAreaRef} args={['white', 10, 20, 20]} position={[0, 1, 5]} rotation={[0, 0, 0]} /> */}
            {/* <spotLight ref={spotLightRef} position={position} intensity={3} angle={1} penumbra={0} castShadow/> */}
        </>
    )
}