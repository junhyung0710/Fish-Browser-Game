import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Anglerfish, Betta, BlackLionFish, Blobfish, 
    BlueGoldfish, BlueTang, ButterflyFish, CardinalFish,
    Clownfish, CoralGrouper, Cowfish, Flatfish, FlowerHorn, GoblinShark,
    Goldfish, Humphead, Koi, Lionfish, MandarinFish, MoorishIdol, ParrotFish, Piranha, Puffer, 
    RedSnapper, RoyalGramma, Shark, Sunfish, Swordfish, Tang, Tetra, Tuna, Turbot, Worm, YellowTang, ZebraClownFish } from '../Components/Fish/Fishes'
const CatchResults = ({fishId}) => {
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
    const [rotationset, setRotationSet] = useState([0,0,0])
    const fishes = [<Anglerfish ref = {animationrefarray[0]} rotation = {rotationset}/>, <Betta ref = {animationrefarray[1]} rotation = {rotationset}/>, 
                    <BlackLionFish ref= {animationrefarray[2]} rotation = {rotationset}/>, <Blobfish ref = {animationrefarray[3]} rotation = {rotationset}/>, 
                    <BlueGoldfish ref = {animationrefarray[4]} rotation = {rotationset}/>, <BlueTang ref = {animationrefarray[5]} rotation = {rotationset}/>, 
                    <ButterflyFish ref = {animationrefarray[6]} rotation = {rotationset}/>, <CardinalFish ref = {animationrefarray[7]} rotation = {rotationset}/>, 
                    <Clownfish ref = {animationrefarray[8]} rotation = {rotationset}/>, <CoralGrouper ref = {animationrefarray[9]} rotation = {rotationset}/>, 
                    <Cowfish ref = {animationrefarray[10]} rotation = {rotationset}/>, <Flatfish ref = {animationrefarray[11]} rotation = {rotationset}/>, 
                    <FlowerHorn ref = {animationrefarray[12]} rotation = {rotationset}/>, <GoblinShark ref = {animationrefarray[13]} rotation = {rotationset}/>,
                    <Goldfish ref = {animationrefarray[14]} rotation = {rotationset}/>, <Humphead ref = {animationrefarray[15]} rotation = {rotationset}/>, 
                    <Koi ref = {animationrefarray[16]} rotation = {rotationset}/>, <Lionfish ref  = {animationrefarray[17]} rotation = {rotationset}/>, 
                    <MandarinFish ref = {animationrefarray[18]} rotation = {rotationset}/>, <MoorishIdol ref = {animationrefarray[19]} rotation = {rotationset}/>, 
                    <ParrotFish ref = {animationrefarray[20]} rotation = {rotationset}/>, <Piranha ref = {animationrefarray[21]} rotation = {rotationset}/>,
                    <Puffer ref = {animationrefarray[22]} rotation = {rotationset}/>, <RedSnapper ref = {animationrefarray[23]} rotation = {rotationset}/>,
                     <RoyalGramma ref = {animationrefarray[24]} rotation = {rotationset}/>, <Shark ref = {animationrefarray[25]} rotation = {rotationset}/>, 
                     <Sunfish ref = {animationrefarray[26]} rotation = {rotationset}/>, <Swordfish ref = {animationrefarray[27]} rotation = {rotationset}/>, 
                     <Tang ref = {animationrefarray[28]} rotation = {rotationset}/>, <Tetra ref ={animationrefarray[29]} rotation = {rotationset}/>, 
                     <Tuna ref = {animationrefarray[30]} rotation = {rotationset}/>, <Turbot ref = {animationrefarray[31]} rotation = {rotationset}/>, 
                     <Worm ref = {animationrefarray[32]} rotation = {rotationset}/>, <YellowTang ref = {animationrefarray[33]} rotation = {rotationset}/>, 
                     <ZebraClownFish ref = {animationrefarray[34]} rotation = {rotationset}/>
                ]
    useFrame(() => {
        const rotationset_x = rotationset[0]
        const rotationset_y = rotationset[1]
        const rotationset_z = rotationset[2]
        setRotationSet([rotationset_x, rotationset_y + 0.02, rotationset_z ])
    })
    console.log(fishes[fishId])
    return(
        <>
            {fishes[fishId]}
        </>
    )
    
}
export default CatchResults;