
import './App.css';
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from '@react-three/drei';

function Box() {
  return (
    <mesh position = {[0,2,0]}>
      <boxBufferGeometry attach = 'geometry'/>
      <meshLambertMaterial attach = 'material' color = 'hotpink' />
    </mesh>
  )
}
function Plane() {
  return (
    <mesh position = {[0,0,0]} rotation  = {[-Math.PI /2, 0, 0]}>
      <planeBufferGeometry attach = 'geometry' args = {[100 , 100]}/>
      <meshLambertMaterial attach = 'material' color = 'lightblue' />
    </mesh>
  )
}

export default function App() {
  return (
    <div id = 'screen'>
  <Canvas id = 'canvas'>
    <OrbitControls/>
    <Stars/>  
    <ambientLight intensity = {0.5}/>
    <spotLight position = {[0, 5, 0]} angle = {0.3} />
    <Box/>
    <Plane/>
  </Canvas>
  </div>
  )
}
