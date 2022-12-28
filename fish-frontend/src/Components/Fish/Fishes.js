
import React, { useRef, useEffect, forwardRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export const Koi = forwardRef((props, ref) => {
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Koi.glb");
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions.Swimming_Fast.play()

  }, [])
  // useFrame(() => (group.current.position.x += 0.01));
  return (
      <group ref={ref} {...props} dispose={null}>
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
})

export const Anglerfish = forwardRef((props, ref) => {
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Anglerfish.glb");
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions.Swimming_Fast.play()

  }, [])
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Anglerfish">
            <skinnedMesh
              name="Cube022"
              geometry={nodes.Cube022.geometry}
              material={materials.Anglerfish_Main}
              skeleton={nodes.Cube022.skeleton}
            />
            <skinnedMesh
              name="Cube022_1"
              geometry={nodes.Cube022_1.geometry}
              material={materials.Anglerfish_Teeth}
              skeleton={nodes.Cube022_1.skeleton}
            />
            <skinnedMesh
              name="Cube022_2"
              geometry={nodes.Cube022_2.geometry}
              material={materials.Anglerfish_Fins}
              skeleton={nodes.Cube022_2.skeleton}
            />
            <skinnedMesh
              name="Cube022_3"
              geometry={nodes.Cube022_3.geometry}
              material={materials.Anglerfish_Light}
              skeleton={nodes.Cube022_3.skeleton}
            />
            <skinnedMesh
              name="Cube022_4"
              geometry={nodes.Cube022_4.geometry}
              material={materials.Light}
              skeleton={nodes.Cube022_4.skeleton}
            />
            <skinnedMesh
              name="Cube022_5"
              geometry={nodes.Cube022_5.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube022_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})
export const Betta = forwardRef((props, ref) => {
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Betta.glb");
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions.Swimming_Fast.play()

  }, [])
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Betta">
            <skinnedMesh
              name="Cube047"
              geometry={nodes.Cube047.geometry}
              material={materials.Betta_Main}
              skeleton={nodes.Cube047.skeleton}
            />
            <skinnedMesh
              name="Cube047_1"
              geometry={nodes.Cube047_1.geometry}
              material={materials.Betta_Fins}
              skeleton={nodes.Cube047_1.skeleton}
            />
            <skinnedMesh
              name="Cube047_2"
              geometry={nodes.Cube047_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube047_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const BlackLionFish = forwardRef((props, ref) => {
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/BlackLionFish.glb");
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions.Swimming_Fast.play()

  }, [])
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="BlackLionFish">
            <skinnedMesh
              name="Icosphere019"
              geometry={nodes.Icosphere019.geometry}
              material={materials.BlackLionFish_Dark}
              skeleton={nodes.Icosphere019.skeleton}
            />
            <skinnedMesh
              name="Icosphere019_1"
              geometry={nodes.Icosphere019_1.geometry}
              material={materials.BlackLionFish_Main}
              skeleton={nodes.Icosphere019_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere019_2"
              geometry={nodes.Icosphere019_2.geometry}
              material={materials.BlackLionFish_Light}
              skeleton={nodes.Icosphere019_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere019_3"
              geometry={nodes.Icosphere019_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere019_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );

})

export const Blobfish = forwardRef((props, ref) => {
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Blobfish.glb");
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions.Swimming_Fast.play()

  }, [])
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Blobfish">
            <skinnedMesh
              name="Cube026"
              geometry={nodes.Cube026.geometry}
              material={materials.Blobfish_Main}
              skeleton={nodes.Cube026.skeleton}
            />
            <skinnedMesh
              name="Cube026_1"
              geometry={nodes.Cube026_1.geometry}
              material={materials.Blobfish_Light}
              skeleton={nodes.Cube026_1.skeleton}
            />
            <skinnedMesh
              name="Cube026_2"
              geometry={nodes.Cube026_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube026_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const BlueGoldfish = forwardRef((props, ref) => {
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/BlueGoldfish.glb");
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions.Swimming_Fast.play()

  }, [])
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Cube000" />
          <group name="Cube001">
            <skinnedMesh
              name="Cube007"
              geometry={nodes.Cube007.geometry}
              material={materials["Material.016"]}
              skeleton={nodes.Cube007.skeleton}
            />
            <skinnedMesh
              name="Cube007_1"
              geometry={nodes.Cube007_1.geometry}
              material={materials.Goldfish_Fins}
              skeleton={nodes.Cube007_1.skeleton}
            />
          </group>
          <group name="Cube025">
            <skinnedMesh
              name="Cube018"
              geometry={nodes.Cube018.geometry}
              material={materials.BlueGoldfish_Main}
              skeleton={nodes.Cube018.skeleton}
            />
            <skinnedMesh
              name="Cube018_1"
              geometry={nodes.Cube018_1.geometry}
              material={materials.Goldfish_Light}
              skeleton={nodes.Cube018_1.skeleton}
            />
            <skinnedMesh
              name="Cube018_2"
              geometry={nodes.Cube018_2.geometry}
              material={materials.Goldfish_Fins}
              skeleton={nodes.Cube018_2.skeleton}
            />
            <skinnedMesh
              name="Cube018_3"
              geometry={nodes.Cube018_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube018_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})