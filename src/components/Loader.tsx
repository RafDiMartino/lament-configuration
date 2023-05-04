import { Html, useProgress } from '@react-three/drei'

export default function Loader(){

    const { progress } = useProgress()
    
    return (

        // <Html center>{progress} % loaded</Html>

        <Html center>
            <div >
                <span>{ progress }</span>
                <img src="./box.png" alt="Loader" />
            </div>
        </Html>
    )

}