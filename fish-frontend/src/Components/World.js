import React, { Suspense } from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Koi } from '../Components/Fishes/Koi'
import { useGLTF } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'

function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh ref={ref} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <shadowMaterial color="#171717" transparent opacity={0.4} />
      </mesh>
    )
  }


function Fish(props) {
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
    return (
        <group ref = {ref}>
            <Koi/>
        </group>
    )
}

export default function World() {
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    return (
        <Physics>
            <Plane position={[0, -1.5, 0]} />
            <primitive object={gltf.scene} position = {[0,0.42,0]} scale = {[4,4,4]}/>
            <Fish position={[10, 5, 0]} />
        </Physics>
    )
}