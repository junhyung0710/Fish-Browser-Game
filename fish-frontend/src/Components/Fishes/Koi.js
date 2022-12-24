
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Koi(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Koi.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} onClick = {(e) => actions.Swimming_Fast.play()}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Koi">
            <skinnedMesh
              name="Icosphere008"
              geometry={nodes.Icosphere008.geometry}
              material={materials.Koi_Main}
              skeleton={nodes.Icosphere008.skeleton}
            />
            <skinnedMesh
              name="Icosphere008_1"
              geometry={nodes.Icosphere008_1.geometry}
              material={materials.Koi_Fins}
              skeleton={nodes.Icosphere008_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere008_2"
              geometry={nodes.Icosphere008_2.geometry}
              material={materials.Koi_Light}
              skeleton={nodes.Icosphere008_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere008_3"
              geometry={nodes.Icosphere008_3.geometry}
              material={materials.Koi_Dark}
              skeleton={nodes.Icosphere008_3.skeleton}
            />
            <skinnedMesh
              name="Icosphere008_4"
              geometry={nodes.Icosphere008_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere008_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
useGLTF.preload(process.env.PUBLIC_URL + "/models/GLB/Koi.glb");


