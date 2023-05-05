import { Html, useProgress } from '@react-three/drei'

export default function Loader(){

    const { progress } = useProgress()
    
    return (

        // <Html center>{progress} % loaded</Html>

        <Html center >
            <div className="w-32">
                <span className="hidden">{ progress }</span>
                <img className='loader' src="./box.png" alt="Loader" />
            </div>
        </Html>
    )

}