import React, { Suspense, useRef, useEffect, forwardRef, useState, useImperativeHandle } from "react";
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RodLvl1, RodLvl2, RodLvl3, RodLvl4, RodLvl5 } from '../Components/Materials/Rod'
import { useSpring, animated } from '@react-spring/three'
import { FishChain } from '../Components/Materials/Chain'
import { useGLTF } from '@react-three/drei'
import { Physics, useBox, useCylinder, usePlane, useDistanceConstraint, Debug } from '@react-three/cannon'
import { Anglerfish, Betta, BlackLionFish, Blobfish, 
         BlueGoldfish, BlueTang, ButterflyFish, CardinalFish,
         Clownfish, CoralGrouper, Cowfish, Flatfish, FlowerHorn, GoblinShark,
         Goldfish, Humphead, Koi, Lionfish, MandarinFish, MoorishIdol, ParrotFish, Piranha, Puffer, 
         RedSnapper, RoyalGramma, Shark, Sunfish, Swordfish, Tang, Tetra, Tuna, Turbot, Worm, YellowTang, ZebraClownFish } from '../Components/Fish/Fishes'
import { Hook } from '../Components/Materials/Hook'
const World = forwardRef((props, ref) => {
    const [chosenSpot, setChosenSpot] = useState([26, 100, -100])
    const [hookInPlace, setHookInPlace] = useState(true)
    const placeholderref = useRef()
    const HookRef = useRef()
    const AnglerfishRef = useRef()
    const BettaRef = useRef()
    const BlackLionFishRef = useRef()
    const BlobfishRef = useRef()
    const BlueGoldfishRef = useRef()
    const BlueTangRef = useRef()
    const ButterflyFishRef = useRef()
    const CardinalFishRef = useRef()
    const ClownfishRef = useRef()
    const CoralGrouperRef = useRef()
    const CowfishRef = useRef()
    const FlatfishRef = useRef()
    const FlowerHornRef = useRef()
    const GoblinSharkRef = useRef()
    const GoldfishRef = useRef()
    const HumpheadRef = useRef()
    const KoiRef = useRef()
    const LionfishRef = useRef()
    const MandarinFishRef = useRef()
    const MoorishIdolRef = useRef()
    const ParrotFishRef = useRef()
    const PiranhaRef = useRef()
    const PufferRef = useRef()
    const RedSnapperRef = useRef()
    const RoyalGrammaRef = useRef()
    const SharkRef = useRef()
    const SunfishRef = useRef()
    const SwordfishRef = useRef()
    const TangRef = useRef()
    const TetraRef = useRef()
    const TunaRef = useRef()
    const TurbotRef = useRef()
    const WormRef = useRef()
    const YellowTangRef = useRef()
    const ZebraClownFishRef = useRef()
    const refarray = [AnglerfishRef, BettaRef, BlackLionFishRef, BlobfishRef, BlueGoldfishRef, BlueTangRef, ButterflyFishRef, 
        CardinalFishRef, ClownfishRef, CoralGrouperRef, CowfishRef, FlatfishRef, FlowerHornRef, GoblinSharkRef, GoldfishRef,
        HumpheadRef, KoiRef, LionfishRef, MandarinFishRef, MoorishIdolRef, ParrotFishRef, PiranhaRef, PufferRef, RedSnapperRef, 
        RoyalGrammaRef, SharkRef, SunfishRef, SwordfishRef, TangRef, TetraRef, TunaRef, TurbotRef, WormRef, YellowTangRef, ZebraClownFishRef]
    const AnglerfishAnimationRef = useRef()
    const BettaAnimationRef = useRef()
    const BlackLionFishAnimationRef = useRef()
    const BlobfishAnimationRef = useRef()
    const BlueGoldfishAnimationRef = useRef()
    const BlueTangAnimationRef = useRef()
    const ButterflyFishAnimationRef = useRef()
    const CardinalFishAnimationRef = useRef()
    const ClownfishAnimationRef = useRef()
    const CoralGrouperAnimationRef = useRef()
    const CowfishAnimationRef = useRef()
    const FlatfishAnimationRef = useRef()
    const FlowerHornAnimationRef = useRef()
    const GoblinSharkAnimationRef = useRef()
    const GoldfishAnimationRef = useRef()
    const HumpheadAnimationRef = useRef()
    const KoiAnimationRef = useRef()
    const LionfishAnimationRef = useRef()
    const MandarinFishAnimationRef = useRef()
    const MoorishIdolAnimationRef = useRef()
    const ParrotFishAnimationRef = useRef()
    const PiranhaAnimationRef = useRef()
    const PufferAnimationRef = useRef()
    const RedSnapperAnimationRef = useRef()
    const RoyalGrammaAnimationRef = useRef()
    const SharkAnimationRef = useRef()
    const SunfishAnimationRef = useRef()
    const SwordfishAnimationRef = useRef()
    const TangAnimationRef = useRef()
    const TetraAnimationRef = useRef()
    const TunaAnimationRef = useRef()
    const TurbotAnimationRef = useRef()
    const WormAnimationRef = useRef()
    const YellowTangAnimationRef = useRef()
    const ZebraClownFishAnimationRef = useRef()
    const animationrefarray = [
        AnglerfishAnimationRef, BettaAnimationRef, BlackLionFishAnimationRef, BlobfishAnimationRef, 
        BlueGoldfishAnimationRef, BlueTangAnimationRef, ButterflyFishAnimationRef, CardinalFishAnimationRef,
        ClownfishAnimationRef, CoralGrouperAnimationRef, CowfishAnimationRef, FlatfishAnimationRef, 
        FlowerHornAnimationRef, GoblinSharkAnimationRef,  GoldfishAnimationRef, HumpheadAnimationRef, 
        KoiAnimationRef, LionfishAnimationRef, MandarinFishAnimationRef, MoorishIdolAnimationRef, 
        ParrotFishAnimationRef, PiranhaAnimationRef, PufferAnimationRef, RedSnapperAnimationRef, 
        RoyalGrammaAnimationRef,SharkAnimationRef, SunfishAnimationRef, SwordfishAnimationRef, 
        TangAnimationRef, TetraAnimationRef, TunaAnimationRef, TurbotAnimationRef, WormAnimationRef,
        YellowTangAnimationRef, ZebraClownFishAnimationRef
    ]    
    useImperativeHandle(ref, () => ({
        swapChildren() {
            HookRef.current.swapHook(chosenSpot, hookInPlace)
            refarray[props.fishId].current.swapPos(chosenSpot, hookInPlace)
            setHookInPlace(!hookInPlace)
        }
    }))
    const [active, setActive] = useState(false)
    const [scaleset, setScaleSet] = useState([5,5,5])
    const [rotationset, setRotationSet] = useState([4.7, 0, 4.6])
    const [localeset, setLocaleSet] = useState([50,100,20])
    const waterfall = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    const boat = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/GLB/Dock_Long.glb")
    const [fishLoaded, setFishLoaded] = useState([])
    const PhysicsRef = useRef()
    useThree(({camera}) => {
        camera.position.set(200,30,-10)
      });
    useEffect(() => {
        const fishesOnLoad = []
        fishesOnLoad.push(<FishChain id = {0} locale = {localeset} ref = {refarray[0]} FishComponent = {<Anglerfish rotation = {rotationset} ref = {animationrefarray[0]} scale = {scaleset}/>} />)
        fishesOnLoad.push(<FishChain id = {1} locale = {localeset} ref = {refarray[1]} FishComponent = {<Betta rotation = {rotationset} ref = {animationrefarray[1]}scale = {scaleset}/>}  />)
        fishesOnLoad.push(<FishChain id = {2} locale = {localeset} ref = {refarray[2]} FishComponent = {<BlackLionFish rotation = {rotationset} ref = {animationrefarray[2]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {3}locale = {localeset} ref = {refarray[3]} FishComponent = {<Blobfish rotation = {rotationset} ref = {animationrefarray[3]} scale = {scaleset}/>} />)
        fishesOnLoad.push(<FishChain id = {4} locale = {localeset} ref = {refarray[4]} FishComponent = {<BlueGoldfish rotation = {rotationset} ref = {animationrefarray[4]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {5} locale = {localeset} ref = {refarray[5]} FishComponent = {<BlueTang rotation = {rotationset} ref = {animationrefarray[5]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {6} locale = {localeset} ref = {refarray[6]} FishComponent = {<ButterflyFish rotation = {rotationset} ref = {animationrefarray[6]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {7} locale = {localeset} ref = {refarray[7]} FishComponent = {<CardinalFish rotation = {rotationset} ref = {animationrefarray[7]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {8} locale = {localeset} ref = {refarray[8]} FishComponent = {<Clownfish rotation = {rotationset} ref = {animationrefarray[8]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {9} locale = {localeset} ref = {refarray[9]} FishComponent = {<CoralGrouper rotation = {rotationset} ref = {animationrefarray[9]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {10} locale = {localeset} ref = {refarray[10]} FishComponent = {<Cowfish rotation = {rotationset} ref = {animationrefarray[10]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {11} locale = {localeset} ref = {refarray[11]} FishComponent = {<Flatfish rotation = {rotationset} ref = {animationrefarray[11]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {12} locale = {localeset} ref = {refarray[12]} FishComponent = {<FlowerHorn rotation = {rotationset} ref = {animationrefarray[12]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {13} locale = {localeset} ref = {refarray[13]} FishComponent = {<GoblinShark rotation = {rotationset} ref = {animationrefarray[13]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {14} locale = {localeset} ref = {refarray[14]} FishComponent = {<Goldfish rotation = {rotationset} ref = {animationrefarray[14]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {15} locale = {localeset} ref = {refarray[15]} FishComponent = {<Humphead rotation = {rotationset} ref = {animationrefarray[15]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {16} locale = {localeset} ref = {refarray[16]} FishComponent = {<Koi rotation = {rotationset} ref = {animationrefarray[16]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {17} locale = {localeset} ref = {refarray[17]} FishComponent = {<Lionfish rotation = {rotationset} ref = {animationrefarray[17]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {18} locale = {localeset} ref = {refarray[18]} FishComponent = {<MandarinFish rotation = {rotationset} ref = {animationrefarray[18]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {19} locale = {localeset} ref = {refarray[19]} FishComponent = {<MoorishIdol rotation = {rotationset} ref = {animationrefarray[19]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {20} locale = {localeset} ref = {refarray[20]} FishComponent = {<ParrotFish rotation = {rotationset} ref = {animationrefarray[20]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {21} locale = {localeset} ref = {refarray[21]} FishComponent = {<Piranha rotation = {rotationset} ref = {animationrefarray[21]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {22} locale = {localeset} ref = {refarray[22]} FishComponent = {<Puffer rotation = {rotationset} ref = {animationrefarray[22]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {23} locale = {localeset} ref = {refarray[23]} FishComponent = {<RedSnapper rotation = {rotationset} ref = {animationrefarray[23]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {24} locale = {localeset} ref = {refarray[24]} FishComponent = {<RoyalGramma rotation = {rotationset} ref = {animationrefarray[24]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {25} locale = {localeset} ref = {refarray[25]} FishComponent = {<Shark rotation = {rotationset} ref = {animationrefarray[25]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {26} locale = {localeset} ref = {refarray[26]} FishComponent = {<Sunfish rotation = {rotationset} ref = {animationrefarray[26]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {27} locale = {localeset} ref = {refarray[27]} FishComponent = {<Swordfish rotation = {rotationset} ref = {animationrefarray[27]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {28} locale = {localeset} ref = {refarray[28]} FishComponent = {<Tang rotation = {rotationset} ref = {animationrefarray[28]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {29} locale = {localeset} ref = {refarray[29]} FishComponent = {<Tetra rotation = {rotationset} ref = {animationrefarray[29]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {30} locale = {localeset} ref = {refarray[30]} FishComponent = {<Tuna rotation = {rotationset} ref = {animationrefarray[30]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {31} locale = {localeset} ref = {refarray[31]} FishComponent = {<Turbot rotation = {rotationset} ref = {animationrefarray[31]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {32} locale = {localeset} ref = {refarray[32]} FishComponent = {<Worm rotation = {rotationset} ref = {animationrefarray[32]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {33} locale = {localeset} ref = {refarray[33]} FishComponent = {<YellowTang rotation = {rotationset} ref = {animationrefarray[33]} scale = {scaleset}/>}/>)
        fishesOnLoad.push(<FishChain id = {34} locale = {localeset} ref = {refarray[34]} FishComponent = {<ZebraClownFish rotation = {rotationset} ref = {animationrefarray[34]} scale = {scaleset}/>}/>)
        setFishLoaded(fishesOnLoad)
    }, [])
    return (    
        <>
        <primitive object={waterfall.scene} position = {[0, 90.42,0]} scale = {[15,15,15]}/>
        <primitive object={boat.scene} position = {[31,0,-24]} scale = {[0.5,0.5,0.5]} rotation = {[0, 12, 0]}/>
        <Physics key = {props.fishId}>
            <Plane position={[0, -1.5, 0]} />
            {/* <Debug color = "black" scale = {1.1}> */}
            <group>
                    <RodLvl5 position = {[chosenSpot[0] + 7, chosenSpot[1] + 1, chosenSpot[2]]} scale = {[2,1,2]} rotation =  {[-Math.PI / 2,Math.PI * (1/4),  Math.PI / 2]} />
                {fishLoaded[props.fishId]}
                <FishChain locale = {chosenSpot} ref = {HookRef} FishComponent = {<Hook rotation = {[6.4,0,4.6]} scale = {[6,6,6]} position = {[0,0,-0.75]}/>}/>
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