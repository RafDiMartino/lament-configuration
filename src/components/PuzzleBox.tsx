import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import LamentConfig from './LamentConfig'

export default function PuzzleBox(){
    // const model = useGLTF('./lament-final-nom-opt.glb')    
    // const modelFlat = useGLTF('./lament-final-opt.glb')    

    // const { intensity } = useControls({
    //     intensity: {
    //         value: 3,
    //         min: 0,
    //         max: 10,
    //         step: 0.5
    //     }
    // })

    return(
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />
            <directionalLight castShadow  position={ [ 1, 2, 3 ] } intensity={ 5 } />
            <directionalLight castShadow  position={ [ -1, 2, -3 ] } intensity={ 5 } />
            {/* <ambientLight intensity={ 3 }/> */}
            {/* <primitive object={model.scene} scale={1} >
                <meshStandardMaterial color="red" transparent />
            </primitive> */}
            {/* <primitive object={modelFlat.scene} scale={1} /> */}
            <LamentConfig/>
        </>
    )

}