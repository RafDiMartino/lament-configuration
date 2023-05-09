/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/lament-remeshed.glb -t -r public
*/

import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Group } from 'three'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    cube: THREE.Mesh
    face1: THREE.Mesh
    face3: THREE.Mesh
    face4: THREE.Mesh
    face6: THREE.Mesh
    face2: THREE.Mesh
    face5: THREE.Mesh
  }
  materials: {
    wood272k: THREE.MeshStandardMaterial
    brass2k: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/lament-remeshed.glb') as GLTFResult
  const [active, setActive] = useState(true)
  const cube = useRef<Group>(null!)
  
  useFrame((state, delta) => {
    active ? cube.current.rotation.y += delta * 0.2 : cube.current.rotation.y += 0
  })

  const handleRotation = (event: any) => {
    event.stopPropagation()
    setActive(!active)
  }

  return (
    <group {...props} dispose={null} onClick={handleRotation} ref={cube}>
      <mesh name='cube' receiveShadow geometry={nodes.cube.geometry} material={materials.wood272k} position={[0, 1.01, 0]} />
      <mesh name='face1' castShadow geometry={nodes.face1.geometry} material={materials.brass2k} position={[0.001, 2.01, -0.003]} scale={[18.65, 0.47, 18.66]} />
      <mesh name='face2' castShadow geometry={nodes.face3.geometry} material={materials.brass2k} position={[-1, 1.005, -0.03]} rotation={[0, 0, -Math.PI / 2]} scale={[18.7, 0.09, 18.66]} />
      <mesh name='face3' castShadow geometry={nodes.face4.geometry} material={materials.brass2k} position={[0.015, 1.015, 1]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[18.65, 0.12, 18.66]} />
      <mesh name='face4' castShadow geometry={nodes.face6.geometry} material={materials.brass2k} position={[-0.0215, 1.02, -1]} rotation={[1.57, -1.57, 0]} scale={[18.65, 0.14, 18.66]} />
      <mesh name='face5' castShadow geometry={nodes.face2.geometry} material={materials.brass2k} position={[0.0015, 0.015, -0.005]} scale={[18.65, 1.05, 18.66]} />
      <mesh name='face6' castShadow geometry={nodes.face5.geometry} material={materials.brass2k} position={[1, 1.02, -0.03]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[18.65, 0.14, 18.66]} />
    </group>
  )
}

useGLTF.preload('/lament-remeshed.glb')