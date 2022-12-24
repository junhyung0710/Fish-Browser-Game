import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Environment } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import UI from './UI'   
import { Koi } from '../Components/Fishes/Koi'
import { AnimationActionLoopStyles } from 'three'
import { useGLTF } from '@react-three/drei'

function PlayerDetails() {

}


function handleFishClick() {}
function Scene() {
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    useGLTF.preload(process.env.PUBLIC_URL + "/models/GLB/Koi.glb");
    return(
    <div style= {{position: 'relative', display: 'inline-block', width: '100vw', height: '100vh'}}>
        <UI />
        <Canvas style = {{position: 'absolute', zIndex: 1}}>
            <Suspense fallback = {null}>
                <Environment
                background={true} // Whether to affect scene.background
                files={process.env.PUBLIC_URL + "/models/HDRI/sky_linekotsi_23_HDRI.hdr"}
                />
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
                <Koi position = {[4, 4, 4]}/>
            </Suspense>
        </Canvas>
    </div>
        
    )
}

export default Scene