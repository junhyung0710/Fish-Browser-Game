import React, { Suspense, useRef, useEffect, forwardRef, useState } from "react";
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Rod } from '../Components/Materials/Rod'
import { FishChain } from '../Components/Materials/Chain'
import { useGLTF } from '@react-three/drei'
import { Physics, useBox, useCylinder, usePlane, useDistanceConstraint } from '@react-three/cannon'
import { SphereGeometry } from "three";
import { Koi, Anglerfish, Betta, BlackLionFish, Blobfish, BlueGoldfish } from '../Components/Fish/Fishes'
export default function World({fishId}) {
    console.log(fishId)
    useThree(({camera}) => {
        camera.position.set(20,20,20)
      });
    const listOfFishComponents = []
    listOfFishComponents.push(null)
    listOfFishComponents.push(<FishChain FishComponent = {<Koi rotation = {[4.7,0,4.6]}/>}/>)
    listOfFishComponents.push(<FishChain FishComponent = {<Anglerfish rotation = {[4.7,0,4.6]}/>} />)
    listOfFishComponents.push(<FishChain FishComponent = {<Betta rotation = {[4.7,0, 4.6]} />} />)
    listOfFishComponents.push(<FishChain FishComponent = {<BlackLionFish rotation = {[4.7,0, 4.6]} />}/>)
    listOfFishComponents.push(<FishChain FishComponent = {<Blobfish rotation = {[4.7,0, 4.6]} />} />)
    listOfFishComponents.push(<FishChain FishComponent = {<BlueGoldfish rotation = {[4.7,0, 4.6]} />}/>)
      

    // useEffect(() => {
    //     fishingHeadRef.current.position.x = fishingLineRef.current.children[0].position.x - 20
    //     fishingHeadRef.current.position.y = fishingLineRef.current.children[0].position.y + 0.8
    //     fishingHeadRef.current.position.z = fishingLineRef.current.children[0].position.z
    //     console.log(fishingHeadRef.current)
    // }, [])
    // useFrame(() => {
    //     fishingHeadRef.current.position.x += 0.1 

        
        
    // }
    // )
    console.log(fishId)
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    return (    
        <Physics>
            <Plane position={[0, -1.5, 0]} />
            <primitive object={gltf.scene} position = {[0,0.42,0]} scale = {[4,4,4]}/>
            <group>
                <Rod position = {[30,10,0]} scale = {[2,1,2]} rotation =  {[-Math.PI / 2, 0, Math.PI / 2]}/>
                {listOfFishComponents[fishId]}
            </group>
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
