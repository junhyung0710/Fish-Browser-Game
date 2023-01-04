
import React, { useRef, useEffect, forwardRef, useImperativeHandle, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export const Anglerfish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Anglerfish.glb");
  const { actions } = useAnimations(animations, group);
  useImperativeHandle(ref, () => ({
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
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
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Betta.glb");
  const { actions } = useAnimations(animations, group);
  useImperativeHandle(ref, () => ({
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
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
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/BlackLionFish.glb");
  const { actions } = useAnimations(animations, group);
  useImperativeHandle(ref, () => ({
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
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
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Blobfish.glb");
  const { actions } = useAnimations(animations, group);
  useImperativeHandle(ref, () => ({
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
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
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/BlueGoldfish.glb");
  const { actions } = useAnimations(animations, group);
  useImperativeHandle(ref, () => ({
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref= {group} {...props} dispose={null}>
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

export const BlueTang = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/BlueTang.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="BlueTang">
            <skinnedMesh
              name="Cube041"
              geometry={nodes.Cube041.geometry}
              material={materials.BlueTang_Fins}
              skeleton={nodes.Cube041.skeleton}
            />
            <skinnedMesh
              name="Cube041_1"
              geometry={nodes.Cube041_1.geometry}
              material={materials.BlueTang_Dark}
              skeleton={nodes.Cube041_1.skeleton}
            />
            <skinnedMesh
              name="Cube041_2"
              geometry={nodes.Cube041_2.geometry}
              material={materials.BlueTang_Main}
              skeleton={nodes.Cube041_2.skeleton}
            />
            <skinnedMesh
              name="Cube041_3"
              geometry={nodes.Cube041_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube041_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const ButterflyFish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/ButterflyFish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Butterflyfish">
            <skinnedMesh
              name="Cube059"
              geometry={nodes.Cube059.geometry}
              material={materials.Butterfly_Main}
              skeleton={nodes.Cube059.skeleton}
            />
            <skinnedMesh
              name="Cube059_1"
              geometry={nodes.Cube059_1.geometry}
              material={materials.Butterfly_Light}
              skeleton={nodes.Cube059_1.skeleton}
            />
            <skinnedMesh
              name="Cube059_2"
              geometry={nodes.Cube059_2.geometry}
              material={materials.Butterfly_Dark}
              skeleton={nodes.Cube059_2.skeleton}
            />
            <skinnedMesh
              name="Cube059_3"
              geometry={nodes.Cube059_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube059_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const CardinalFish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/CardinalFish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="CardinalFish">
            <skinnedMesh
              name="Cube105"
              geometry={nodes.Cube105.geometry}
              material={materials.CardinalFish_Main}
              skeleton={nodes.Cube105.skeleton}
            />
            <skinnedMesh
              name="Cube105_1"
              geometry={nodes.Cube105_1.geometry}
              material={materials.CardinalFish_Light}
              skeleton={nodes.Cube105_1.skeleton}
            />
            <skinnedMesh
              name="Cube105_2"
              geometry={nodes.Cube105_2.geometry}
              material={materials.CardinalFish_Fins}
              skeleton={nodes.Cube105_2.skeleton}
            />
            <skinnedMesh
              name="Cube105_3"
              geometry={nodes.Cube105_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube105_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Clownfish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Clownfish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Clownfish">
            <skinnedMesh
              name="Cube029"
              geometry={nodes.Cube029.geometry}
              material={materials.Clownfish_Dark}
              skeleton={nodes.Cube029.skeleton}
            />
            <skinnedMesh
              name="Cube029_1"
              geometry={nodes.Cube029_1.geometry}
              material={materials.Clownfish_Main}
              skeleton={nodes.Cube029_1.skeleton}
            />
            <skinnedMesh
              name="Cube029_2"
              geometry={nodes.Cube029_2.geometry}
              material={materials.Clownfish_Light}
              skeleton={nodes.Cube029_2.skeleton}
            />
            <skinnedMesh
              name="Cube029_3"
              geometry={nodes.Cube029_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube029_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const CoralGrouper = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/CoralGrouper.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="CoralGrouper">
            <skinnedMesh
              name="Icosphere017"
              geometry={nodes.Icosphere017.geometry}
              material={materials.CoralGrouper_Main}
              skeleton={nodes.Icosphere017.skeleton}
            />
            <skinnedMesh
              name="Icosphere017_1"
              geometry={nodes.Icosphere017_1.geometry}
              material={materials.CoralGrouper_Fins}
              skeleton={nodes.Icosphere017_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere017_2"
              geometry={nodes.Icosphere017_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere017_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Cowfish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Cowfish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Cowfish">
            <skinnedMesh
              name="Icosphere014"
              geometry={nodes.Icosphere014.geometry}
              material={materials.Cowfish_Dark}
              skeleton={nodes.Icosphere014.skeleton}
            />
            <skinnedMesh
              name="Icosphere014_1"
              geometry={nodes.Icosphere014_1.geometry}
              material={materials.Cowfish_Main}
              skeleton={nodes.Icosphere014_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere014_2"
              geometry={nodes.Icosphere014_2.geometry}
              material={materials.Cowfish_Light}
              skeleton={nodes.Icosphere014_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere014_3"
              geometry={nodes.Icosphere014_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere014_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Flatfish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Flatfish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Flatfish">
            <skinnedMesh
              name="Cube119"
              geometry={nodes.Cube119.geometry}
              material={materials.Flatfish_Main}
              skeleton={nodes.Cube119.skeleton}
            />
            <skinnedMesh
              name="Cube119_1"
              geometry={nodes.Cube119_1.geometry}
              material={materials.Flatfish_Teeth}
              skeleton={nodes.Cube119_1.skeleton}
            />
            <skinnedMesh
              name="Cube119_2"
              geometry={nodes.Cube119_2.geometry}
              material={materials.Flatfish_Light}
              skeleton={nodes.Cube119_2.skeleton}
            />
            <skinnedMesh
              name="Cube119_3"
              geometry={nodes.Cube119_3.geometry}
              material={materials.Flatfish_Fins}
              skeleton={nodes.Cube119_3.skeleton}
            />
            <skinnedMesh
              name="Cube119_4"
              geometry={nodes.Cube119_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube119_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const FlowerHorn = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/FlowerHorn.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="FlowerHorn">
            <skinnedMesh
              name="Icosphere021"
              geometry={nodes.Icosphere021.geometry}
              material={materials.FlowerHorn_Main}
              skeleton={nodes.Icosphere021.skeleton}
            />
            <skinnedMesh
              name="Icosphere021_1"
              geometry={nodes.Icosphere021_1.geometry}
              material={materials.FlowerHorn_Fins}
              skeleton={nodes.Icosphere021_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere021_2"
              geometry={nodes.Icosphere021_2.geometry}
              material={materials.FlowerHorn_Dark}
              skeleton={nodes.Icosphere021_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere021_3"
              geometry={nodes.Icosphere021_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere021_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const GoblinShark = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/GoblinShark.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="GoblinShark">
            <skinnedMesh
              name="Icosphere022"
              geometry={nodes.Icosphere022.geometry}
              material={materials.GoblinShark_Dark}
              skeleton={nodes.Icosphere022.skeleton}
            />
            <skinnedMesh
              name="Icosphere022_1"
              geometry={nodes.Icosphere022_1.geometry}
              material={materials.GoblinShark_Main}
              skeleton={nodes.Icosphere022_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere022_2"
              geometry={nodes.Icosphere022_2.geometry}
              material={materials.GoblinShark_Light}
              skeleton={nodes.Icosphere022_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere022_3"
              geometry={nodes.Icosphere022_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere022_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
)

export const Goldfish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Goldfish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
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
              material={materials.Goldfish_Main}
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

export const Humphead = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Humphead.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Humphead">
            <skinnedMesh
              name="Icosphere040"
              geometry={nodes.Icosphere040.geometry}
              material={materials.Humphead_Dark}
              skeleton={nodes.Icosphere040.skeleton}
            />
            <skinnedMesh
              name="Icosphere040_1"
              geometry={nodes.Icosphere040_1.geometry}
              material={materials.Humphead_Fins}
              skeleton={nodes.Icosphere040_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere040_2"
              geometry={nodes.Icosphere040_2.geometry}
              material={materials.Humphead_Main}
              skeleton={nodes.Icosphere040_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere040_3"
              geometry={nodes.Icosphere040_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere040_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Koi = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Koi.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
      <group ref={group} {...props} dispose={null}>
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

export const Lionfish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Lionfish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Lionfish">
            <skinnedMesh
              name="Cube011"
              geometry={nodes.Cube011.geometry}
              material={materials.Lionfish_Fins}
              skeleton={nodes.Cube011.skeleton}
            />
            <skinnedMesh
              name="Cube011_1"
              geometry={nodes.Cube011_1.geometry}
              material={materials.Lionfish_Main}
              skeleton={nodes.Cube011_1.skeleton}
            />
            <skinnedMesh
              name="Cube011_2"
              geometry={nodes.Cube011_2.geometry}
              material={materials.Lionfish_Light}
              skeleton={nodes.Cube011_2.skeleton}
            />
            <skinnedMesh
              name="Cube011_3"
              geometry={nodes.Cube011_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube011_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})


export const MandarinFish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/MandarinFish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="MandarinFish">
            <skinnedMesh
              name="Cube108"
              geometry={nodes.Cube108.geometry}
              material={materials.MandarinFish_Main}
              skeleton={nodes.Cube108.skeleton}
            />
            <skinnedMesh
              name="Cube108_1"
              geometry={nodes.Cube108_1.geometry}
              material={materials.MandarinFish_Light}
              skeleton={nodes.Cube108_1.skeleton}
            />
            <skinnedMesh
              name="Cube108_2"
              geometry={nodes.Cube108_2.geometry}
              material={materials.MandarinFish_Dark}
              skeleton={nodes.Cube108_2.skeleton}
            />
            <skinnedMesh
              name="Cube108_3"
              geometry={nodes.Cube108_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube108_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const MoorishIdol = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/MoorishIdol.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="MoorishIdol">
            <skinnedMesh
              name="Cube052"
              geometry={nodes.Cube052.geometry}
              material={materials.MoorishIdol_Main}
              skeleton={nodes.Cube052.skeleton}
            />
            <skinnedMesh
              name="Cube052_1"
              geometry={nodes.Cube052_1.geometry}
              material={materials.MoorishIdol_Dark}
              skeleton={nodes.Cube052_1.skeleton}
            />
            <skinnedMesh
              name="Cube052_2"
              geometry={nodes.Cube052_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube052_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
)

export const ParrotFish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/ParrotFish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="ParrotFish">
            <skinnedMesh
              name="Icosphere029"
              geometry={nodes.Icosphere029.geometry}
              material={materials.ParrotFish_Main}
              skeleton={nodes.Icosphere029.skeleton}
            />
            <skinnedMesh
              name="Icosphere029_1"
              geometry={nodes.Icosphere029_1.geometry}
              material={materials.ParrotFish_Fins}
              skeleton={nodes.Icosphere029_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere029_2"
              geometry={nodes.Icosphere029_2.geometry}
              material={materials.ParrotFish_Teeth}
              skeleton={nodes.Icosphere029_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere029_3"
              geometry={nodes.Icosphere029_3.geometry}
              material={materials.ParrotFish_Light}
              skeleton={nodes.Icosphere029_3.skeleton}
            />
            <skinnedMesh
              name="Icosphere029_4"
              geometry={nodes.Icosphere029_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere029_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Piranha = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Piranha.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Piranha">
            <skinnedMesh
              name="Cube040"
              geometry={nodes.Cube040.geometry}
              material={materials.Piranha_Main}
              skeleton={nodes.Cube040.skeleton}
            />
            <skinnedMesh
              name="Cube040_1"
              geometry={nodes.Cube040_1.geometry}
              material={materials.Piranha_Teeth}
              skeleton={nodes.Cube040_1.skeleton}
            />
            <skinnedMesh
              name="Cube040_2"
              geometry={nodes.Cube040_2.geometry}
              material={materials.Piranha_Light}
              skeleton={nodes.Cube040_2.skeleton}
            />
            <skinnedMesh
              name="Cube040_3"
              geometry={nodes.Cube040_3.geometry}
              material={materials.Piranha_Fins}
              skeleton={nodes.Cube040_3.skeleton}
            />
            <skinnedMesh
              name="Cube040_4"
              geometry={nodes.Cube040_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube040_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Puffer = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Puffer.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Pufferfish001" />
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Pufferfish">
            <skinnedMesh
              name="Cube002"
              geometry={nodes.Cube002.geometry}
              material={materials.Pufferfish_Main}
              skeleton={nodes.Cube002.skeleton}
            />
            <skinnedMesh
              name="Cube002_1"
              geometry={nodes.Cube002_1.geometry}
              material={materials.Pufferfish_Light}
              skeleton={nodes.Cube002_1.skeleton}
            />
            <skinnedMesh
              name="Cube002_2"
              geometry={nodes.Cube002_2.geometry}
              material={materials.Puffefish_Black}
              skeleton={nodes.Cube002_2.skeleton}
            />
            <skinnedMesh
              name="Cube002_3"
              geometry={nodes.Cube002_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube002_3.skeleton}
            />
          </group>
          <group name="Pufferfish002">
            <skinnedMesh
              name="Cube001"
              geometry={nodes.Cube001.geometry}
              material={materials.Pufferfish_Main}
              skeleton={nodes.Cube001.skeleton}
            />
            <skinnedMesh
              name="Cube001_1"
              geometry={nodes.Cube001_1.geometry}
              material={materials.Pufferfish_Light}
              skeleton={nodes.Cube001_1.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const RedSnapper = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/RedSnapper.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Fish_Armature">
            <primitive object={nodes.Main1} />
            <group name="RedSnapper">
              <skinnedMesh
                name="Cube101"
                geometry={nodes.Cube101.geometry}
                material={materials.RedSnapper_Fins}
                skeleton={nodes.Cube101.skeleton}
              />
              <skinnedMesh
                name="Cube101_1"
                geometry={nodes.Cube101_1.geometry}
                material={materials.RedSnapper_Main}
                skeleton={nodes.Cube101_1.skeleton}
              />
              <skinnedMesh
                name="Cube101_2"
                geometry={nodes.Cube101_2.geometry}
                material={materials.RedSnapper_Light}
                skeleton={nodes.Cube101_2.skeleton}
              />
              <skinnedMesh
                name="Cube101_3"
                geometry={nodes.Cube101_3.geometry}
                material={materials.Eyes}
                skeleton={nodes.Cube101_3.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    );
  })

export const RoyalGramma = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/RoyalGramma.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="RoyalGramma">
            <skinnedMesh
              name="Cube123"
              geometry={nodes.Cube123.geometry}
              material={materials.RoyalGramma_Main}
              skeleton={nodes.Cube123.skeleton}
            />
            <skinnedMesh
              name="Cube123_1"
              geometry={nodes.Cube123_1.geometry}
              material={materials.RoyalGramma_Light}
              skeleton={nodes.Cube123_1.skeleton}
            />
            <skinnedMesh
              name="Cube123_2"
              geometry={nodes.Cube123_2.geometry}
              material={materials.RoyalGramma_Fins}
              skeleton={nodes.Cube123_2.skeleton}
            />
            <skinnedMesh
              name="Cube123_3"
              geometry={nodes.Cube123_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube123_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Shark = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Shark.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Shark">
            <skinnedMesh
              name="Icosphere010"
              geometry={nodes.Icosphere010.geometry}
              material={materials.Shark_Dark}
              skeleton={nodes.Icosphere010.skeleton}
            />
            <skinnedMesh
              name="Icosphere010_1"
              geometry={nodes.Icosphere010_1.geometry}
              material={materials.Shark_Main}
              skeleton={nodes.Icosphere010_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere010_2"
              geometry={nodes.Icosphere010_2.geometry}
              material={materials.Shark_Light}
              skeleton={nodes.Icosphere010_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere010_3"
              geometry={nodes.Icosphere010_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere010_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Sunfish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Sunfish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Sunfish">
            <skinnedMesh
              name="Icosphere024"
              geometry={nodes.Icosphere024.geometry}
              material={materials.SunFish_Main}
              skeleton={nodes.Icosphere024.skeleton}
            />
            <skinnedMesh
              name="Icosphere024_1"
              geometry={nodes.Icosphere024_1.geometry}
              material={materials.SunFish_Dark}
              skeleton={nodes.Icosphere024_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere024_2"
              geometry={nodes.Icosphere024_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere024_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
)

export const Swordfish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Swordfish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Swordfish">
            <skinnedMesh
              name="Cube044"
              geometry={nodes.Cube044.geometry}
              material={materials.Swordfish_Main}
              skeleton={nodes.Cube044.skeleton}
            />
            <skinnedMesh
              name="Cube044_1"
              geometry={nodes.Cube044_1.geometry}
              material={materials.Swordfish_Light}
              skeleton={nodes.Cube044_1.skeleton}
            />
            <skinnedMesh
              name="Cube044_2"
              geometry={nodes.Cube044_2.geometry}
              material={materials.Swordfish_Dark}
              skeleton={nodes.Cube044_2.skeleton}
            />
            <skinnedMesh
              name="Cube044_3"
              geometry={nodes.Cube044_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube044_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Tang = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Tang.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Tang">
            <skinnedMesh
              name="Cube131"
              geometry={nodes.Cube131.geometry}
              material={materials.Tang_Main}
              skeleton={nodes.Cube131.skeleton}
            />
            <skinnedMesh
              name="Cube131_1"
              geometry={nodes.Cube131_1.geometry}
              material={materials.Tang_Light}
              skeleton={nodes.Cube131_1.skeleton}
            />
            <skinnedMesh
              name="Cube131_2"
              geometry={nodes.Cube131_2.geometry}
              material={materials.Tang_Light2}
              skeleton={nodes.Cube131_2.skeleton}
            />
            <skinnedMesh
              name="Cube131_3"
              geometry={nodes.Cube131_3.geometry}
              material={materials.Tang_Dark}
              skeleton={nodes.Cube131_3.skeleton}
            />
            <skinnedMesh
              name="Cube131_4"
              geometry={nodes.Cube131_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube131_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
)

export const Tetra = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Tetra.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Tetra">
            <skinnedMesh
              name="Cube126"
              geometry={nodes.Cube126.geometry}
              material={materials.Tetra_Fins}
              skeleton={nodes.Cube126.skeleton}
            />
            <skinnedMesh
              name="Cube126_1"
              geometry={nodes.Cube126_1.geometry}
              material={materials.Tetra_Main}
              skeleton={nodes.Cube126_1.skeleton}
            />
            <skinnedMesh
              name="Cube126_2"
              geometry={nodes.Cube126_2.geometry}
              material={materials.Tetra_Light}
              skeleton={nodes.Cube126_2.skeleton}
            />
            <skinnedMesh
              name="Cube126_3"
              geometry={nodes.Cube126_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube126_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Tuna = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Tuna.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Tuna">
            <skinnedMesh
              name="Icosphere031"
              geometry={nodes.Icosphere031.geometry}
              material={materials.Tuna_Main}
              skeleton={nodes.Icosphere031.skeleton}
            />
            <skinnedMesh
              name="Icosphere031_1"
              geometry={nodes.Icosphere031_1.geometry}
              material={materials.Tuna_Top}
              skeleton={nodes.Icosphere031_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere031_2"
              geometry={nodes.Icosphere031_2.geometry}
              material={materials.Tuna_Fins}
              skeleton={nodes.Icosphere031_2.skeleton}
            />
            <skinnedMesh
              name="Icosphere031_3"
              geometry={nodes.Icosphere031_3.geometry}
              material={materials.Tuna_Dark}
              skeleton={nodes.Icosphere031_3.skeleton}
            />
            <skinnedMesh
              name="Icosphere031_4"
              geometry={nodes.Icosphere031_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere031_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const Turbot = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Turbot.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="Turbot001">
            <skinnedMesh
              name="Cube000"
              geometry={nodes.Cube000.geometry}
              material={materials.Turbot_Fins}
              skeleton={nodes.Cube000.skeleton}
            />
            <skinnedMesh
              name="Cube000_1"
              geometry={nodes.Cube000_1.geometry}
              material={materials.Turbot_Main}
              skeleton={nodes.Cube000_1.skeleton}
            />
            <skinnedMesh
              name="Cube000_2"
              geometry={nodes.Cube000_2.geometry}
              material={materials.Turbot_Teeth}
              skeleton={nodes.Cube000_2.skeleton}
            />
            <skinnedMesh
              name="Cube000_3"
              geometry={nodes.Cube000_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube000_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
)

export const Worm = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/Worm.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group {...props} dispose={null}>
      <group position={[1.8, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={6.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials.Worm}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials.Black}
        />
      </group>
    </group>
  );
}
)

export const YellowTang = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/YellowTang.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="YellowTang">
            <skinnedMesh
              name="Icosphere025"
              geometry={nodes.Icosphere025.geometry}
              material={materials.YellowTang_Main}
              skeleton={nodes.Icosphere025.skeleton}
            />
            <skinnedMesh
              name="Icosphere025_1"
              geometry={nodes.Icosphere025_1.geometry}
              material={materials.YellowTang_Fins}
              skeleton={nodes.Icosphere025_1.skeleton}
            />
            <skinnedMesh
              name="Icosphere025_2"
              geometry={nodes.Icosphere025_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.Icosphere025_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

export const ZebraClownFish = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/models/GLB/ZebraClownFish.glb");
  const { actions } = useAnimations(animations, group);
  const [pausedState, setPausedState] = useState(false)
  // useFrame(() => (group.current.position.x += 0.01));
  useImperativeHandle(ref, () => ({
    
    toggleAnimation(on) {
      actions.Swimming_Fast.play()
      if (on) {
        actions.Swimming_Fast.paused = false
      } else {
        actions.Swimming_Fast.paused = true
      }
    }
  }))

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fish_Armature">
          <primitive object={nodes.Main1} />
          <group name="ZebraClownfish">
            <skinnedMesh
              name="Cube136"
              geometry={nodes.Cube136.geometry}
              material={materials.ZebraClownFish_Light}
              skeleton={nodes.Cube136.skeleton}
            />
            <skinnedMesh
              name="Cube136_1"
              geometry={nodes.Cube136_1.geometry}
              material={materials.ZebraClownFish_Main}
              skeleton={nodes.Cube136_1.skeleton}
            />
            <skinnedMesh
              name="Cube136_2"
              geometry={nodes.Cube136_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube136_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
})

















