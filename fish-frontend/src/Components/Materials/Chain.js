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
    const [link21, api21] = useCylinder(() => ({
        mass: 1,
        position: [x,y-20,z]
    }));
    const [link22, api22] = useCylinder(() => ({
        mass: 1,
        position: [x,y-21,z]
    }));
    const [link23, api23] = useCylinder(() => ({
        mass: 1,
        position: [x,y-22,z]
    }));
    const [link24, api24] = useCylinder(() => ({
        mass: 1,
        position: [x,y-23,z]
    }));
    const [link25, api25] = useCylinder(() => ({
        mass: 1,
        position: [x,y-24,z]
    }));
    const [link26, api26] = useCylinder(() => ({
        mass: 1,
        position: [x,y-25,z]
    }));
    const [link27, api27] = useCylinder(() => ({
        mass: 1,
        position: [x,y-26,z]
    }));
    const [link28, api28] = useCylinder(() => ({
        mass: 1,
        position: [x,y-27,z]
    }));
    const [link29, api29] = useCylinder(() => ({
        mass: 1,
        position: [x,y-28,z]
    }));
    const [link30, api30] = useCylinder(() => ({
        mass: 1,
        position: [x,y-29,z]
    }));
    const [link31, api31] = useCylinder(() => ({
        mass: 1,
        position: [x,y-30,z]
    }));
    const [link32, api32] = useCylinder(() => ({
        mass: 1,
        position: [x,y-31,z]
    }));
    const [link33, api33] = useCylinder(() => ({
        mass: 1,
        position: [x,y-32,z]
    }));
    const [link34, api34] = useCylinder(() => ({
        mass: 1,
        position: [x,y-33,z]
    }));
    const [link35, api35] = useCylinder(() => ({
        mass: 1,
        position: [x,y-34,z]
    }));
    const [link36, api36] = useCylinder(() => ({
        mass: 1,
        position: [x,y-35,z]
    }));
    const [link37, api37] = useCylinder(() => ({
        mass: 1,
        position: [x,y-36,z]
    }));
    const [link38, api38] = useCylinder(() => ({
        mass: 1,
        position: [x,y-37,z]
    }));
    const [link39, api39] = useCylinder(() => ({
        mass: 1,
        position: [x,y-38,z]
    }));
    const [link40, api40] = useCylinder(() => ({
        mass: 1,
        position: [x,y-39,z]
    }));
    const [link41, api41] = useCylinder(() => ({
        mass: 1,
        position: [x,y-40,z]
    }));
    const [link42, api42] = useCylinder(() => ({
        mass: 1,
        position: [x,y-41,z]
    }));
    const [link43, api43] = useCylinder(() => ({
        mass: 1,
        position: [x,y-42,z]
    }));
    const [link44, api44] = useCylinder(() => ({
        mass: 1,
        position: [x,y-43,z]
    }));
    const [link45, api45] = useCylinder(() => ({
        mass: 1,
        position: [x,y-44,z]
    }));
    const [link46, api46] = useCylinder(() => ({
        mass: 1,
        position: [x,y-45,z]
    }));
    const [link47, api47] = useCylinder(() => ({
        mass: 1,
        position: [x,y-46,z]
    }));
    const [link48, api48] = useCylinder(() => ({
        mass: 1,
        position: [x,y-47,z]
    }));
    const [link49, api49] = useCylinder(() => ({
        mass: 1,
        position: [x,y-48,z]
    }));
    const [link50, api50] = useCylinder(() => ({
        mass: 10,
        position: [x,y-49,z]
    }));
    const apiarray = [api1, api2, api3, api4, api5, api6, api7, api8, api9, api10, 
        api11, api12, api13, api14, api15, api16, api17, api18, api19, api20, 
        api21, api22, api22, api23, api24, api25, api26, api27, api28, api29, api30,
        api31, api32, api33, api34, api35,api36, api37, api38, api39, api40, 
        api41, api42, api43, api44, api45, api46, api47, api48, api49, api50]
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
    const constraint12 = useLockConstraint(link12, link13, {
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
    const constraint20 = useLockConstraint(link20, link21, {
        distance: 1
    });
    const constraint21 = useLockConstraint(link21, link22, {
        distance: 1
    });
    const constraint22 = useLockConstraint(link22, link23, {
        distance: 1
    });
    const constraint23 = useLockConstraint(link23, link24, {
        distance: 1
    });
    const constraint24 = useLockConstraint(link24, link25, {
        distance: 1
    });
    const constraint25 = useLockConstraint(link25, link26, {
        distance: 1
    });
    const constraint26 = useLockConstraint(link26, link27, {
        distance: 1
    });
    const constraint27 = useLockConstraint(link27, link28, {
        distance: 1
    });
    const constraint28 = useLockConstraint(link28, link29, {
        distance: 1
    });
    const constraint29 = useLockConstraint(link29, link30, {
        distance: 1
    });
    const constraint30 = useLockConstraint(link30, link31, {
        distance: 1
    });
    const constraint31 = useLockConstraint(link31, link32, {
        distance: 1
    });
    const constraint32 = useLockConstraint(link32, link33, {
        distance: 1
    });
    const constraint33 = useLockConstraint(link33, link34, {
        distance: 1
    });
    const constraint34 = useLockConstraint(link34, link35, {
        distance: 1
    });
    const constraint35 = useLockConstraint(link35, link36, {
        distance: 1
    });
    const constraint36 = useLockConstraint(link36, link37, {
        distance: 1
    });
    const constraint37 = useLockConstraint(link37, link38, {
        distance: 1
    });
    const constraint38 = useLockConstraint(link38, link39, {
        distance: 1
    });
    const constraint39 = useLockConstraint(link39, link40, {
        distance: 1
    });
    const constraint40 = useLockConstraint(link40, link41, {
        distance: 1
    });
    const constraint41 = useLockConstraint(link41, link42, {
        distance: 1
    });
    const constraint42 = useLockConstraint(link42, link43, {
        distance: 1
    });
    const constraint43 = useLockConstraint(link43, link44, {
        distance: 1
    });
    const constraint44 = useLockConstraint(link44, link45, {
        distance: 1
    });
    const constraint45 = useLockConstraint(link45, link46, {
        distance: 1
    });
    const constraint46 = useLockConstraint(link46, link47, {
        distance: 1
    });
    const constraint47 = useLockConstraint(link47, link48, {
        distance: 1
    });
    const constraint48 = useLockConstraint(link48, link49, {
        distance: 1
    });
    const constraint49 = useLockConstraint(link49, link50, {
        distance: 1
    });
    const trackpos = useRef([0,0,0])
    function handleForce(e) {
        if (e.keyCode === 32) {
            api2.applyImpulse([-300, 3000, 600], [0, 0, 0]);
            api3.applyImpulse([90, 300, 60], [0, 0, 0]);
            api4.applyImpulse([60, 0, 30], [0, 0, 0]);
            api40.applyImpulse([2000, 2000, 500], [0, 0, 0]);
            api45.applyImpulse([2000, 2000, 500], [0, 0, 0]);
            api50.applyImpulse([150, 350, 150], [0, 0, 0]);
            


            api50.position.subscribe(v => trackpos.current = v)
            console.log(trackpos)
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleForce, false)
    })
    return (
        <group>
            <mesh ref = {link1}>
            </mesh>
            <mesh ref = {link2}>
            </mesh>
            <mesh ref = {link3}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link4}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link5}
            >
                <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link6}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link7}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link8}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link9}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link10}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link11}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link12}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link13}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link14}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link15}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link16}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link17}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link18}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link19}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link20}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link21}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link22}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link23}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link24}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link25}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link26}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link27}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link28}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link29}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link30}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link31}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link32}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link33}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link34}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link35}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link36}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link37}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link38}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link39}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link40}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link41}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link42}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link43}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link44}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link45}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link46}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link47}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link48}>
                <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link49}>
                <cylinderGeometry args={[0.2, 0.2, 1, 8]}/>
                <meshLambertMaterial color="white" />
            </mesh>
            <mesh ref = {link50} onClick={handleForce}>
                {props.FishComponent}
            </mesh>        
            

        </group>
           
    )

})