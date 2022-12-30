import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import UI from './UI'   
import World from './World'

function Scene() {
    const [fishId, setFishId] = useState(2)
    const chainref = useRef()
    const handleFishChangeClick = (e) => {
        e.preventDefault();
        console.log(fishId)
        setFishId(fishId + 1)
        chainref.current.swapChildren()
    }
    return(
    <div style= {{position: 'relative', display: 'inline-block', width: '100vw', height: '100vh'}}>
        <UI handleFishChangeClick = {handleFishChangeClick} number = {fishId}/>
        <Canvas style = {{position: 'absolute', zIndex: 1}}>
            <Suspense fallback = {null}>
                <Environment
                background={true} // Whether to affect scene.background
                files={process.env.PUBLIC_URL + "/models/HDRI/sky_linekotsi_23_HDRI.hdr"}
                />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <World fishId = {fishId} ref = {chainref}/>
            </Suspense>
        </Canvas>
    </div>
        
    )
}

export default Scene