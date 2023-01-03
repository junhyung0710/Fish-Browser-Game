import React, { Suspense, useRef, useEffect, forwardRef, useState, useImperativeHandle } from "react";
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RodLvl1, RodLvl2, RodLvl3, RodLvl4, RodLvl5 } from '../Components/Materials/Rod'
import { useSpring, animated } from '@react-spring/three'
import { FishChain } from '../Components/Materials/Chain'
import { useGLTF } from '@react-three/drei'
import { Physics, useBox, useCylinder, usePlane, useDistanceConstraint, Debug } from '@react-three/cannon'
import { Koi, Anglerfish, Betta, BlackLionFish, Blobfish, BlueGoldfish } from '../Components/Fish/Fishes'
import { Hook } from '../Components/Materials/Hook'
const World = forwardRef((props, ref) => {
    const [chosenSpot, setChosenSpot] = useState([26, 20, 0])
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
    const [active, setActive] = useState(false)
    
    
    useImperativeHandle(ref, () => ({
        swapChildren() {
            HookRef.current.swapHook(chosenSpot, hookInPlace)
            refarray[props.fishId].current.swapPos(chosenSpot, hookInPlace)
            setHookInPlace(!hookInPlace)
        }
    }))
    const waterfall = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    const boat = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/GLB/Dock_Long.glb")
    const KoiAnimationRef = useRef()
    const AnglerfishAnimationRef = useRef()
    const BettaAnimationRef = useRef()
    const BlackLionFishAnimationRef = useRef()
    const BlobfishAnimationRef = useRef()
    const BlueGoldfishAnimationRef = useRef()
    const [fishLoaded, setFishLoaded] = useState([])
    const PhysicsRef = useRef()
    useThree(({camera}) => {
        camera.position.set(31,5,-2)
      });
    useEffect(() => {
        const fishesOnLoad = []
        fishesOnLoad.push(<FishChain locale = {[50,40,0]} ref = {KoiRef} FishComponent = {<Koi rotation = {[4.7,0,4.6]} ref = {KoiAnimationRef}/>}/>)
        fishesOnLoad.push(<FishChain locale = {[50,40,4]} ref = {AnglerfishRef} FishComponent = {<Anglerfish rotation = {[4.7,0,4.6]} ref = {AnglerfishAnimationRef} />} />)
        fishesOnLoad.push(<FishChain locale = {[50,40,8]} ref = {BettaRef} FishComponent = {<Betta rotation = {[4.7,0, 4.6]} ref = {BettaAnimationRef}/>}  />)
        fishesOnLoad.push(<FishChain locale = {[50,40,12]} ref = {BlackLionFishRef} FishComponent = {<BlackLionFish rotation = {[4.7,0, 4.6]} ref = {BlackLionFishAnimationRef} />}/>)
        fishesOnLoad.push(<FishChain locale = {[50,40,16]} ref = {BlobfishRef} FishComponent = {<Blobfish rotation = {[4.7,0, 4.6]} ref = {BlobfishAnimationRef} />} />)
        fishesOnLoad.push(<FishChain locale = {[50,40,20]} ref = {BlueGoldfishRef} FishComponent = {<BlueGoldfish rotation = {[4.7,0, 4.6]} ref = {BlueGoldfishAnimationRef} />}/>)
        setFishLoaded(fishesOnLoad)
    }, [])
    return (    
        <>
        <primitive object={waterfall.scene} position = {[0,0.42,0]} scale = {[6,6,6]}/>
        <primitive object={boat.scene} position = {[31,0,-24]} scale = {[0.5,0.5,0.5]} rotation = {[0, 12, 0]}/>
        <Physics key = {props.fishId}>
            <Plane position={[0, -1.5, 0]} />
            {/* <Debug color = "black" scale = {1.1}> */}
            <group>
                <animated.mesh onClick = {() => setActive(!active)}>
                    <RodLvl5 position = {[chosenSpot[0] + 7, chosenSpot[1] + 1, chosenSpot[2]]} scale = {[2,1,2]} rotation =  {[-Math.PI / 2,Math.PI * (1/4),  Math.PI / 2]} />
                </animated.mesh>
                <FishChain locale = {chosenSpot} ref = {HookRef} FishComponent = {<Hook rotation = {[6.4,0,4.6]} position = {[0,0,-0.75]}/>}/>
                {fishLoaded[props.fishId]}
            </group>
            {/* </Debug> */}
        </Physics>
        </>
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