import { Html, useProgress, Loader } from '@react-three/drei'

export default function Loaders(){

    const { progress } = useProgress()
    
    return (

        <Html center >
            <div className="w-32">
                <Loader containerStyles={{backgroundColor: "rgba(255, 255, 255, 0)", position: "absolute", top: "100px"}}/>
                <span className="hidden">{ progress }</span>
                <img className='loader z-20' src="./box.png" alt="Loader" />
            </div>
        </Html>
    )

}