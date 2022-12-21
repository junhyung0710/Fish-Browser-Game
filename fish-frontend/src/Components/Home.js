import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Home() {
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/waterfall.glb")
    return(
        <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <mesh rotation = {[-Math.PI / 2, 0, 0]} position = {[2,0.001,2]} >
            <circleGeometry args={[0.5, 100, 1]} />
            <meshBasicMaterial attach="material" color="rgb(15, 180, 204)" />
        </mesh>
        <mesh rotation = {[-Math.PI / 2, 0, 0]} position = {[2,0,2]} >
            <circleGeometry args={[0.55, 100, 1]} />
        </mesh>
        <Suspense fallback={null}>
            <primitive object={gltf.scene} position = {[0,0.42,0]} />
        </Suspense>
      </Canvas>
    )
}

export default Home;