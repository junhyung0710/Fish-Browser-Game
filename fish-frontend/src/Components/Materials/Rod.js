import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
export function Rod(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/FishingRod_Lvl1.glb");
    const [cylinderRef] = useCylinder(() => ({mass: 0}))
    return (
        <group ref = {cylinderRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FishingRod_Lvl1.geometry}
                material={materials.Wood}
            />
        </group>
    );
}