import React, { Suspense, useRef, forwardRef, useEffect, useState, useImperativeHandle} from "react";
import { useGLTF } from "@react-three/drei";
import { useSphere, useDistanceConstraint, useCylinder, useLockConstraint } from "@react-three/cannon"
import { useSpring, a } from "@react-spring/three";
export const FishChain = forwardRef((props, ref) => {
    const x = props.locale[0]
    const y = props.locale[1]
    const z = props.locale[2]
    const [link1, api1] = useSphere(() => ({
        mass: 0,
        position: [x,y,z]
      }));
    const [link2, api2] = useSphere(() => ({
    mass: 1,
    position: [x, y-2, z]
    }));
    const [link3, api3] = useSphere(() => ({
        mass: 1,
        position: [x, y-4, z]
      }));
    const [link4, api4] = useSphere(() => ({
    mass: 1,
    position: [x,y-6,z]
    }));
    const [link5, api5] = useCylinder(() => ({
    mass: 1,
    position: [x,y-8,z]
    }));
    useImperativeHandle(ref, () => ({
        swapPos(chosenSpot, hookInPlace) {
            if (hookInPlace) {
                let temp_x = chosenSpot[0]
                let temp_y = chosenSpot[1]
                let temp_z = chosenSpot[2]
                api1.position.set(temp_x, temp_y, temp_z)
                api2.position.set(temp_x, temp_y - 2, temp_z)
                api3.position.set(temp_x, temp_y - 4, temp_z)
                api4.position.set(temp_x, temp_y - 6, temp_z)
                api5.position.set(temp_x, temp_y - 8, temp_z)
                console.log('hello3')
                props.FishComponent.ref.current.toggleAnimation(true)
            } else {
                api1.position.set(x,y,z)
                api2.position.set(x,y-2,z)
                api3.position.set(x,y-4,z)
                api4.position.set(x,y-6,z)
                api5.position.set(x,y-8,z)
                console.log('hello4')
                props.FishComponent.ref.current.toggleAnimation(false)
            }
        },
        swapHook(chosenSpot, hookInPlace) {
            if (hookInPlace) {
                api1.position.set(10,10,10)
                api2.position.set(10,8,10)
                api3.position.set(10,6,10)
                api4.position.set(10,4,10)
                api5.position.set(10,2,10)
                console.log('hello1')
                
            } else {
                let temp_x = chosenSpot[0]
                let temp_y = chosenSpot[1]
                let temp_z = chosenSpot[2]
                api1.position.set(temp_x, temp_y, temp_z)
                api2.position.set(temp_x, temp_y-2, temp_z)
                api3.position.set(temp_x, temp_y-4, temp_z)
                api4.position.set(temp_x, temp_y-6, temp_z)
                api5.position.set(temp_x, temp_y-8, temp_z)
                console.log('hello2')
            }  
        }
    }))
    const constraint1 = useDistanceConstraint(link1, link2, {
        distance: 2
      });
    const constraint2 = useDistanceConstraint(link2, link3, {
    distance: 2
    });
    const constraint3 = useDistanceConstraint(link3, link4, {
        distance: 2
    });
    const constraint4 = useLockConstraint(link4, link5, {
        distance: 2
    });
    
    return (
        <group>
            <mesh ref = {link1}>
                <sphereGeometry />
                <meshLambertMaterial color="hotpink" />
            </mesh>
            <mesh ref = {link2}>
                <sphereGeometry />
                <meshLambertMaterial color="hotpink" />
            </mesh>
            <mesh ref = {link3}>
                <sphereGeometry />
                <meshLambertMaterial color="hotpink" />
            </mesh>
            <mesh ref = {link4}>
                <sphereGeometry />
                <meshLambertMaterial color="hotpink" />
            </mesh>
            <mesh ref = {link5}>
                {props.FishComponent}
            </mesh>        
            

        </group>
           
    )

})