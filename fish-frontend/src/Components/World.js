import React, { Suspense, useRef, useEffect } from "react";
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Koi } from '../Components/Fishes/Koi'
import { Rod } from '../Components/Materials/Rod'
import { FishChain } from '../Components/Materials/Chain'
import { useGLTF } from '@react-three/drei'
import { Physics, useBox, useCylinder, usePlane, useDistanceConstraint } from '@react-three/cannon'

export default function World() {
    useThree(({camera}) => {
        camera.position.set(20,20,20)
      });
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    return (    
        <Physics>
            <Plane position={[0, -1.5, 0]} />
            <primitive object={gltf.scene} position = {[0,0.42,0]} scale = {[4,4,4]}/>
            <Fish position={[10, 10, 0]}/>
            <FishingRod/>
        </Physics>
    )
}

function Plane(props) {
    const [PlaneRef] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh ref={PlaneRef} receiveShadow>
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

function FishingRod(props) {
    const [ref] = useCylinder(() => ({mass: 0, ...props}))
    const child1 = useRef()
    useEffect(() => {
        console.log(child1)
    }, [])
    return (
        <group>
            <group ref = {ref}>
                <Rod position = {[30,10,0]} scale = {[2,1,2]} rotation =  {[-Math.PI / 2, 0, Math.PI / 2]}/>
            </group>
            <FishChain ref = {child1}/>
        </group>
        
    )
}

