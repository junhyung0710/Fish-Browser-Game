import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import UI from './UI'   
import { AccessFishData } from './ServerFunctions/Access'

function PlayerDetails() {

}

function handleFishClick() {
    let fishid = Math.floor(Math.random() * 10)
    
}


function Scene() {
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    const [fishList, setFishList] = useState([])
    AccessFishData()
    
    return(
    <>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <mesh
                rotation = {[-Math.PI / 2, 0, 0]} 
                position = {[2,0.001,2]} 
                onClick = {handleFishClick()}
                >
                <circleGeometry args={[0.5, 100, 1]} />
                <meshBasicMaterial attach="material" color="rgb(15, 180, 204)" />
            </mesh>
            <mesh rotation = {[-Math.PI / 2, 0, 0]} position = {[2,0,2]} >
                <circleGeometry args={[0.55, 100, 1]} />
            </mesh>
            <Suspense fallback={null}>
                <primitive object={gltf.scene} position = {[0,0.42,0]} />
            </Suspense>
        </Canvas>
        <UI />
    </>
        
    )
}

export default Scene