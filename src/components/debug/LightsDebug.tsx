import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { PointLight, PointLightHelper, DirectionalLight, DirectionalLightHelper, RectAreaLight, SpotLight, SpotLightHelper } from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { useControls } from 'leva'
import * as THREE from 'three'

export default function LightsDebug(){
    
    const { ambientIntensity, pointIntensity, dirIntensity, position, position2, position3 } = useControls({
        ambientIntensity: {
            value: 0.5,
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
            value: 0.15,
            min: 0,
            max: 10,
            step: 0.1,
        },
        position: [-3.41, -1.45, 1.49],
        position2: [2.1, 0.2, -3.0],
        position3: [2.76, -1.6, 2.68],

    })
    const poiLightRef = useRef<PointLight>(null!)
    const dirLightRef = useRef<DirectionalLight>(null!)
    const dirLightRef2 = useRef<DirectionalLight>(null!)
    const dirLightRef3 = useRef<DirectionalLight>(null!)
    const rectAreaRef = useRef<RectAreaLight>(null!)
    const spotLightRef = useRef<SpotLight>(null!)
    useHelper(poiLightRef, PointLightHelper, 1, "red")
    useHelper(dirLightRef, DirectionalLightHelper, 1, "red")
    useHelper(dirLightRef2, DirectionalLightHelper, 1, "red")
    useHelper(dirLightRef3, DirectionalLightHelper, 1, "red")
    useHelper(rectAreaRef, RectAreaLightHelper, "white")
    useHelper(spotLightRef, SpotLightHelper, "red")

    return(
        <>
            {/* <pointLight ref={poiLightRef} castShadow position={ [ 3, 4, -5 ] } intensity={ pointIntensity } shadow-normalBias={0.04} distance={10} decay={0} /> */}
            <directionalLight ref={dirLightRef} position={position} color={''} castShadow intensity={ dirIntensity } />
            <directionalLight ref={dirLightRef2} position={position2} castShadow intensity={ dirIntensity } />
            <directionalLight ref={dirLightRef3} position={position3} castShadow intensity={ dirIntensity } />
            <ambientLight intensity={ambientIntensity}/>
            {/* <hemisphereLight args={['white', 'black', 10]}/> */}
            {/* <rectAreaLight castShadow ref={rectAreaRef} args={['white', 10, 10, 10]} position={[0, 5, 0]} rotation={[4.7, 0, 0]} /> */}
            {/* <spotLight ref={spotLightRef} position={position} intensity={3} angle={1} penumbra={0} castShadow/> */}
        </>
    )
}