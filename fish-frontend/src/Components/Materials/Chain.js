import React, { Suspense, useRef, forwardRef     } from "react";
import { useGLTF } from "@react-three/drei";
import { useSphere, useDistanceConstraint } from "@react-three/cannon"
export const FishChain = forwardRef((props, ref) => {
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
    const [link5, api5] = useSphere(() => ({
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
    useDistanceConstraint(link4, link5, {
        distance: 2
    });

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
                api2.applyImpulse([3, 3, 3], [0, 0, 0]);
              }}>
                <mesh>
                    <sphereGeometry />
                    <meshLambertMaterial color="hotpink" />
                </mesh>
            </group>
            <group ref = {link3}
            onClick={() => {
                api3.applyImpulse([3, 3, 3], [0, 0, 0]);
              }}>
                <mesh>
                    <sphereGeometry />
                    <meshLambertMaterial color="hotpink" />
                </mesh>
            </group>
            <group ref = {link4}
            onClick={() => {
                api4.applyImpulse([3, 3, 3], [0, 0, 0]);
              }}>
                <mesh>
                    <sphereGeometry />
                    <meshLambertMaterial color="hotpink" />
                </mesh>
            </group>
            <group ref = {ref}>
                <group ref = {link5}
                onClick={() => {
                    api5.applyImpulse([3, 100, 3], [0, 0, 0]);
                }}>
                    <mesh>
                        <sphereGeometry />
                        <meshLambertMaterial color="hotpink" />
                    </mesh>
                </group>            
            </group>
            

        </group>
           
    )

});