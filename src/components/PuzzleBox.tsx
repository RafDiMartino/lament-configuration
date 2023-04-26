import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

export default function PuzzleBox(){
    const model = useGLTF('./lament.glb')    

    const { intensity } = useControls({
        intensity: {
            value: 3,
            min: 0,
            max: 10,
            step: 0.5
        }
    })

    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />
            <directionalLight castShadow  position={ [ 1, 2, 3 ] } intensity={ intensity } />
            <ambientLight intensity={ intensity }/>
            <primitive object={model.scene} scale={15} />
        </>
    )

}