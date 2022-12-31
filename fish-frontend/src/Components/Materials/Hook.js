import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
export function Hook(props) {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Lure_2.glb");
    return (
      <group {...props} dispose={null}>
        <group position={[0, 0, 0.78]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials.Lure_Red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials.Lure_Grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials.Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={materials.Metal}
          />
        </group>
      </group>
    );
  }