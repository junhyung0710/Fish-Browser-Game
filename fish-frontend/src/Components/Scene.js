import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Stats } from '@react-three/drei'
import UI from './UI'   
import World from './World'

function Scene() {
    const [fishId, setFishId] = useState(-1)
    const chainref = useRef()
    const handleFishChangeForward = (e) => {
        e.preventDefault();
        setFishId(fishId + 1)
    }
    const handleFishChangeBackward = (e) => {
        e.preventDefault();
        setFishId(fishId -1)
    }
    const handleSwapClick = (e) =>{
        e.preventDefault();
        chainref.current.swapChildren()
    }
    return(
    <div style= {{position: 'relative', display: 'inline-block', width: '100vw', height: '100vh'}}>
        <UI handleFishChangeForward = {handleFishChangeForward} handleFishChangeBackward = {handleFishChangeBackward} handleSwapClick ={handleSwapClick} number = {fishId}/>
        <Canvas style = {{position: 'absolute', zIndex: 1}}>
            <Suspense fallback = {null}>
                <Environment
                background={true} // Whether to affect scene.background
                files={process.env.PUBLIC_URL + "/models/HDRI/sky_linekotsi_15_HDRI.hdr"}
                />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <World fishId = {fishId} ref = {chainref}/>
            </Suspense>
            <Stats />
        </Canvas>
    </div>
        
    )
}

export default Scene