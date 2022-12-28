import React, { Suspense, useRef, forwardRef, useEffect, useState} from "react";
import { useGLTF } from "@react-three/drei";
import { useSphere, useDistanceConstraint, useCylinder, useLockConstraint } from "@react-three/cannon"
import { Koi, Anglerfish, Betta, BlackLionFish, Blobfish, BlueGoldfish } from '../Fish/Fishes'
export const FishChain = forwardRef((props, ref) => {
    const FishRef = useRef()
    const [link1] = useSphere(() => ({
        mass: 0,
        position: [25,20,0]
      }));
    const [link2, api2] = useSphere(() => ({
    mass: 1,
    position: [25,18,0]
    }));
    const [link3, api3] = useSphere(() => ({
        mass: 1,
        position: [25,16,0]
      }));
    const [link4, api4] = useSphere(() => ({
    mass: 1,
    position: [25,14,0]
    }));
    const [link5, api5] = useCylinder(() => ({
    mass: 1,
    position: [25,12,0]
    }));

    useDistanceConstraint(link1, link2, {
        distance: 2
      });
    useDistanceConstraint(link2, link3, {
    distance: 2
    });
    useDistanceConstraint(link3, link4, {
        distance: 2
    });
    useLockConstraint(link4, link5, {
        distance: 2
    });
    const listOfFishComponents = []
    listOfFishComponents.push(null)
    listOfFishComponents.push(<Koi ref = {FishRef} rotation = {[4.7,0,4.6]}/>)
    listOfFishComponents.push(<Anglerfish ref = {FishRef} rotation = {[4.7,0,4.6]}/>)
    listOfFishComponents.push(<Betta ref = {FishRef} rotation = {[4.7,0, 4.6]} />)
    listOfFishComponents.push(<BlackLionFish ref = {FishRef} rotation = {[4.7,0, 4.6]} />)
    listOfFishComponents.push(<Blobfish ref = {FishRef} rotation = {[4.7,0, 4.6]} />)
    listOfFishComponents.push(<BlueGoldfish ref = {FishRef} rotation = {[4.7,0, 4.6]} />)
    console.log(listOfFishComponents)

    function chooseFish(fishId) {
        console.log(listOfFishComponents[fishId])
        return (
            <>
                {listOfFishComponents[fishId]}
            </>
            
        )
    }
    
    return (
        <group>
            <group ref = {link1}>
                <mesh>
                    <sphereGeometry />
                    <meshLambertMaterial color="hotpink" />
                </mesh>
            </group>
            <group ref = {link2}
            onClick={() => {
                api2.applyImpulse([100, 37, 3], [0, 0, 0]);
              }}
              >
                <mesh>
                    <sphereGeometry />
                    <meshLambertMaterial color="hotpink" />
                </mesh>
            </group>
            <group ref = {link3}
            // onClick={() => {
            //     api3.applyImpulse([3, 3, 3], [0, 0, 0]);
            //     console.log(link3.current.position)
            //   }}
            >
                <mesh>
                    <sphereGeometry />
                    <meshLambertMaterial color="hotpink" />
                </mesh>
            </group>
            <group ref = {link4}
            // onClick={() => {
            //     api4.applyImpulse([3, 3, 3], [0, 0, 0]);
            //   }}
              >
                <mesh>
                    <sphereGeometry />
                    <meshLambertMaterial color="hotpink" />
                </mesh>
            </group>
            <group ref = {ref} name = {'hello'}>
                <group ref = {link5} name = {'hello2'}
                // onClick={() => {
                //     api5.applyImpulse([3, 3, 3], [0, 0, 0])
                //     console.log(link5.current.position);
                // }}
                >
                    <mesh>
                        {chooseFish(props.fishId)}
                    </mesh>
                </group>            
            </group>
            

        </group>
           
    )

});