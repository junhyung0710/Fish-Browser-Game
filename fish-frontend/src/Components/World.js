import React, { Suspense, useRef, useEffect, forwardRef, useState, useImperativeHandle } from "react";
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RodLvl1, RodLvl2, RodLvl3, RodLvl4, RodLvl5 } from '../Components/Materials/Rod'
import { FishChain } from '../Components/Materials/Chain'
import { useGLTF } from '@react-three/drei'
import { Physics, useBox, useCylinder, usePlane, useDistanceConstraint } from '@react-three/cannon'
import { Koi, Anglerfish, Betta, BlackLionFish, Blobfish, BlueGoldfish } from '../Components/Fish/Fishes'
import { Hook } from '../Components/Materials/Hook'
const World = forwardRef((props, ref) => {
    const [chosenSpot, setChosenSpot] = useState([15, 40, -7])
    const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0) 
    const [hookInPlace, setHookInPlace] = useState(true)
    const placeholderref = useRef()
    const HookRef = useRef()
    const KoiRef = useRef()
    const AnglerfishRef = useRef()
    const BettaRef = useRef()
    const BlackLionFishRef = useRef()
    const BlobfishRef = useRef()
    const BlueGoldfishRef = useRef()
    const refarray = [KoiRef, AnglerfishRef, BettaRef, BlackLionFishRef, BlobfishRef]
    
    useThree(({camera}) => {
        camera.position.set(20,20,20)
      });
    useImperativeHandle(ref, () => ({
        swapChildren() {
            HookRef.current.swapHook(chosenSpot, hookInPlace)
            refarray[currentVisibleIndex].current.swapPos(chosenSpot, hookInPlace)
            setHookInPlace(!hookInPlace)
        }
    }))
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    const KoiAnimationRef = useRef()
    const AnglerfishAnimationRef = useRef()
    const BettaAnimationRef = useRef()
    const BlackLionFishAnimationRef = useRef()
    const BlobfishAnimationRef = useRef()
    const BlueGoldfishAnimationRef = useRef()
    const fishLoaded = []
    fishLoaded.push(<FishChain locale = {chosenSpot} ref = {HookRef} FishComponent = {<Hook rotation = {[6.4,0,4.6]} position = {[0,0,-0.75]}/>}/>)
    fishLoaded.push(<FishChain locale = {[50,40,0]} ref = {KoiRef} FishComponent = {<Koi rotation = {[4.7,0,4.6]} ref = {KoiAnimationRef}/>}/>)
    fishLoaded.push(<FishChain locale = {[50,40,4]} ref = {AnglerfishRef} FishComponent = {<Anglerfish rotation = {[4.7,0,4.6]} ref = {AnglerfishAnimationRef}/>} />)
    fishLoaded.push(<FishChain locale = {[50,40,8]} ref = {BettaRef} FishComponent = {<Betta rotation = {[4.7,0, 4.6]} ref = {BettaAnimationRef}/>} />)
    fishLoaded.push(<FishChain locale = {[50,40,12]} ref = {BlackLionFishRef} FishComponent = {<BlackLionFish rotation = {[4.7,0, 4.6]} ref = {BlackLionFishAnimationRef} />}/>)
    fishLoaded.push(<FishChain locale = {[50,40,16]} ref = {BlobfishRef} FishComponent = {<Blobfish rotation = {[4.7,0, 4.6]} ref = {BlobfishAnimationRef}/>} />)
    fishLoaded.push(<FishChain locale = {[50,40,20]} ref = {BlueGoldfishRef} FishComponent = {<BlueGoldfish rotation = {[4.7,0, 4.6]} ref = {BlueGoldfishAnimationRef}/>}/>)
    return (    
        <Physics>
            <Plane position={[0, -1.5, 0]} />
            <primitive object={gltf.scene} position = {[0,0.42,0]} scale = {[4,4,4]}/>
            <group>
                <RodLvl5 position = {[22,41, -7]} scale = {[2,1,2]} rotation =  {[-Math.PI / 2, 0, Math.PI / 2]} />
                {fishLoaded} 
            </group>
        </Physics>
    )
})

function Plane(props) {
    const [PlaneRef] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh ref={PlaneRef} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <shadowMaterial color="#171717" transparent opacity={0.4} />
      </mesh>
    )
  }

export default World