import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateBand } from "./site";

function Structure() {
  const ref = useRef<Group>(null);
  useFrame((state, delta) => { if (!ref.current) return; ref.current.rotation.y += delta * .08; ref.current.rotation.x = state.pointer.y * .08; });
  return <group ref={ref}>
    <Float speed={1.2} rotationIntensity={.25} floatIntensity={.45}><mesh><icosahedronGeometry args={[2.1, 2]}/><MeshTransmissionMaterial color="#245DFF" thickness={.45} roughness={.15} transmission={.9}/></mesh></Float>
    {[0,1,2].map(i => <mesh key={i} rotation={[Math.PI/2, i*.65, i*.3]}><torusGeometry args={[3.2 + i*.65, .018, 12, 160]}/><meshBasicMaterial color={i === 1 ? "#F2F6FA" : "#245DFF"} transparent opacity={.6}/></mesh>)}
  </group>;
}

export function ThreePage() { return <><section className="three-hero"><div className="three-canvas"><Canvas camera={{ position: [0,0,8], fov: 42 }} dpr={[1,1.5]}><color attach="background" args={["#030507"]}/><ambientLight intensity={.5}/><directionalLight position={[4,5,4]} intensity={3} color="#8db5ff"/><Structure/><Stars radius={50} depth={40} count={700} factor={2} saturation={0} fade speed={.25}/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.25}/></Canvas></div><div className="three-overlay"><p className="eyebrow">PROVIDENCE / IMMERSIVE</p><h1>THE WEB,<br/>IN ANOTHER DIMENSION.</h1><p>Providence creates immersive 3D websites, interactive environments, WebGL experiences, digital twins and next-generation digital interfaces.</p><Button asChild variant="premium" size="xl"><Link to="/services">Build in 3D <ArrowRight/></Link></Button></div><div className="three-instruction">DRAG TO ORBIT / SCROLL TO EXPLORE</div></section><section className="three-capabilities light-section"><div><span>01</span><h2>INTERACTIVE<br/>ENVIRONMENTS</h2><p>Spatial digital experiences that respond naturally to people.</p></div><div><span>02</span><h2>DIGITAL<br/>TWINS</h2><p>Complex real-world systems made visible and explorable.</p></div><div><span>03</span><h2>3D PRODUCT<br/>EXPERIENCES</h2><p>Products presented with detail, depth and purposeful interaction.</p></div></section><DonateBand/></>; }
