import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Sky } from '@react-three/drei'
import UI from './UI'   

function PlayerDetails() {

}

function handleFishClick() {}
function Scene() {
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    return(
    <div style= {{position: 'relative', display: 'inline-block', width: '100vw', height: '100vh'}}>
        <UI />
        <Canvas style = {{position: 'absolute', zIndex: 1}}>
            <ambientLight />
            <Sky turbidity = {10}
					rayleigh = {3}
					mieCoefficient = {0.005}
					mieDirectionalG =  {0.7}
					elevation =  {2}
					azimuth =  {180}
					exposure = {renderer.toneMappingExposure}/>
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
    </div>
        
    )
}

export default Scene