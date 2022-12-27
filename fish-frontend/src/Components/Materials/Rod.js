import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
export function Rod(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/FishingRod_Lvl1.glb");
    console.log(nodes)
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FishingRod_Lvl1.geometry}
                material={materials.Wood}
            />
        </group>
    );
}