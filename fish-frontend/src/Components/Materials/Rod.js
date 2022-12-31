import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
    
export function RodLvl1(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/FishingRod_Lvl1.glb");
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

export function RodLvl2(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/FishingRod_Lvl2.glb");
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials.Metal}
        />
      </group>
    );
  }

export function RodLvl3(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/FishingRod_Lvl3.glb");
    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials.Metal}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_1.geometry}
            material={materials.Black}
        />
        </group>
    );
}

export function RodLvl4(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/FishingRod_Lvl4.glb");
    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.Gold}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.Black}
        />
        </group>
    );
}
export function RodLvl5(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/FishingRod_Lvl5.glb");
    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials.Red}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_1.geometry}
            material={materials.Black}
        />
        </group>
    );
}
