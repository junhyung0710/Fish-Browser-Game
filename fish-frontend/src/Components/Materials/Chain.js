import React, { Suspense, useRef, forwardRef, useEffect, useState, useImperativeHandle} from "react";
import { useGLTF } from "@react-three/drei";
import { useSphere, useDistanceConstraint, useCylinder, useLockConstraint } from "@react-three/cannon"
import { useSpring, a } from "@react-spring/three";
export const FishChain = forwardRef((props, ref) => {
    const x = props.locale[0]
    const y = props.locale[1]
    const z = props.locale[2]
    const [link1, api1] = useCylinder(() => ({
        mass: 0,
        position: [x,y,z]
      }));
    const [link2, api2] = useCylinder(() => ({
    mass: 1,
    position: [x, y-1, z]
    }));
    const [link3, api3] = useCylinder(() => ({
        mass: 1,
        position: [x, y-2, z]
      }));
    const [link4, api4] = useCylinder(() => ({
    mass: 1,
    position: [x,y-3,z]
    }));
    const [link5, api5] = useCylinder(() => ({
        mass: 1,
        position: [x,y-4,z]
    }));
    const [link6, api6] = useCylinder(() => ({
        mass: 1,
        position: [x,y-5,z]
    }));
    const [link7, api7] = useCylinder(() => ({
        mass: 1,
        position: [x,y-6,z]
    }));
    const [link8, api8] = useCylinder(() => ({
        mass: 1,
        position: [x,y-7,z]
    }));
    const [link9, api9] = useCylinder(() => ({
        mass: 1,
        position: [x,y-8,z]
    }));
    const [link10, api10] = useCylinder(() => ({
        mass: 1,
        position: [x,y-9,z]
    }));
    const [link11, api11] = useCylinder(() => ({
        mass: 1,
        position: [x,y-10,z]
    }));
    const [link12, api12] = useCylinder(() => ({
        mass: 1,
        position: [x,y-11,z]
    }));
    const [link13, api13] = useCylinder(() => ({
        mass: 1,
        position: [x,y-12,z]
    }));
    const [link14, api14] = useCylinder(() => ({
        mass: 1,
        position: [x,y-13,z]
    }));
    const [link15, api15] = useCylinder(() => ({
        mass: 1,
        position: [x,y-14,z]
    }));
    const [link16, api16] = useCylinder(() => ({
        mass: 1,
        position: [x,y-15,z]
    }));
    const [link17, api17] = useCylinder(() => ({
        mass: 1,
        position: [x,y-16,z]
    }));
    const [link18, api18] = useCylinder(() => ({
        mass: 1,
        position: [x,y-17,z]
    }));
    const [link19, api19] = useCylinder(() => ({
        mass: 1,
        position: [x,y-18,z]
    }));
    const [link20, api20] = useCylinder(() => ({
        mass: 1,
        position: [x,y-19,z]
    }));
    const apiarray = [api1, api2, api3, api4, api5, api6, api7, api8, api9, api10, api11, api12, api13, api14, api15, api16, api17, api18, api19, api20]
    useImperativeHandle(ref, () => ({
        swapPos(chosenSpot, hookInPlace) {
            if (hookInPlace) {
                let temp_x = chosenSpot[0]
                let temp_y = chosenSpot[1]
                let temp_z = chosenSpot[2]
                for (let i= 0; i < apiarray.length; i++) {
                    
                    apiarray[i].position.set(temp_x, temp_y - (i), temp_z)
                }
                props.FishComponent.ref.current.toggleAnimation(true)
            } else {
                for (let i= 0; i < apiarray.length; i++) {
                    
                    apiarray[i].position.set(x, y - (i), z)
                }
                props.FishComponent.ref.current.toggleAnimation(false)
            }
        },
        swapHook(chosenSpot, hookInPlace) {
            if (hookInPlace) {
                let temp_x = 40
                let temp_y = 40
                let temp_z = 40
                for (let i= 0; i < apiarray.length; i++) {
                    apiarray[i].position.set(temp_x, temp_y - (i), temp_z)
                }
                
            } else {
                let temp_x = chosenSpot[0]
                let temp_y = chosenSpot[1]
                let temp_z = chosenSpot[2]
                for (let i= 0; i < apiarray.length; i++) {
                    apiarray[i].position.set(temp_x, temp_y -  (i), temp_z)
                }
            }  
        }
    }))
    const constraint1 = useLockConstraint(link1, link2, {
        distance: 1
      });
    const constraint2 = useLockConstraint(link2, link3, {
        distance: 1
    });
    const constraint3 = useLockConstraint(link3, link4, {
        distance: 1
    });
    const constraint4 = useLockConstraint(link4, link5, {
        distance: 1
    });
    const constraint5 = useLockConstraint(link5, link6, {
        distance: 1
    });
    const constraint6 = useLockConstraint(link6, link7, {
        distance: 1
    });
    const constraint7 = useLockConstraint(link7, link8, {
        distance: 1
    });
    const constraint8 = useLockConstraint(link8, link9, {
        distance: 1
    });
    const constraint9 = useLockConstraint(link9, link10, {
        distance: 1
    });
    const constraint10 = useLockConstraint(link10, link11, {
        distance: 1
    });
    const constraint11 = useLockConstraint(link11, link12, {
        distance: 1
    });
    const constraint12 = useDistanceConstraint(link12, link13, {
        distance: 1
    });
    const constraint13 = useLockConstraint(link13, link14, {
        distance: 1
    });
    const constraint14 = useLockConstraint(link14, link15, {
        distance: 1
    });
    const constraint15 = useLockConstraint(link15, link16, {
        distance: 1
    });
    const constraint16 = useLockConstraint(link16, link17, {
        distance: 1
    });
    const constraint17 = useLockConstraint(link17, link18, {
        distance: 1
    });
    const constraint18 = useLockConstraint(link18, link19, {
        distance: 1
    });
    const constraint19 = useLockConstraint(link19, link20, {
        distance: 1
    });
    return (
        <group>
            <mesh ref = {link1}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link2}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link3}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link4}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link5}
            >
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link6}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link7}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link8}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link9}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link10}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link11}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link12}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link13}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link14}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link15}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link16}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link17}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link18}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link19}>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link20} onClick={() => {
                api20.applyImpulse([-150, 200, 0], [0, 0, 0]);
              }}>
                {props.FishComponent}
            </mesh>        
            

        </group>
           
    )

})