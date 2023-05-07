export default function Lights(){

    return(
        <>
            <directionalLight position={[-3.41, -1.45, 1.49]} castShadow intensity={ 0.15 } />
            <directionalLight position={[2.1, 0.2, -3.0]} castShadow intensity={ 0.15 } />
            <directionalLight position={[2.76, -1.6, 2.68]} castShadow intensity={ 0.15 } />
            <ambientLight intensity={0.5}/>
        </>
    )
}