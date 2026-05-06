import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// A procedural stylized 3D Floor Plan
function BuildingModel() {
  const group = useRef();

  // Rotate slightly continuously
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 8;
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* Base Platform */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 0.2, 8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Primary Walls */}
      <mesh position={[-2.8, 1, 0]} castShadow>
        <boxGeometry args={[0.2, 2, 8]} />
        <meshStandardMaterial color="#C29545" metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh position={[2.8, 1, -1]} castShadow>
        <boxGeometry args={[0.2, 2, 6]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} />
      </mesh>
      <mesh position={[0, 1, -3.8]} castShadow>
        <boxGeometry args={[6, 2, 0.2]} />
        <meshStandardMaterial color="#C29545" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Glass Internal Partitions */}
      <mesh position={[-1, 1, 0]}>
        <boxGeometry args={[0.1, 2, 4]} />
        <MeshTransmissionMaterial 
          backside 
          thickness={0.5} 
          roughness={0} 
          transmission={1} 
          ior={1.5} 
          chromaticAberration={0.04} 
          color="#ffffff" 
        />
      </mesh>
      <mesh position={[1, 1, 1.5]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <MeshTransmissionMaterial 
          backside 
          thickness={0.5} 
          roughness={0} 
          transmission={1} 
          ior={1.5} 
          chromaticAberration={0.04} 
          color="#ffffff" 
        />
      </mesh>

      {/* Floating Roof/Accent */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <boxGeometry args={[6.5, 0.1, 8.5]} />
        <MeshTransmissionMaterial 
          thickness={1} 
          roughness={0.2} 
          transmission={0.9} 
          ior={1.2} 
          color="#C29545" 
        />
      </mesh>

      {/* Small decorative pillars/columns */}
      <mesh position={[2.8, 1, 3.8]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color="#C29545" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.5, 1, 3.8]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color="#C29545" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Decorative Pool / Water Feature */}
      <mesh position={[0, 0.15, 2.5]}>
        <boxGeometry args={[3, 0.1, 2]} />
        <meshStandardMaterial color="#0055ff" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function InteractiveFloorPlan() {
  return (
    <SectionWrapper id="interactive-model" bg="bg-[#05070a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Side */}
        <div className="order-2 lg:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Interactive Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
              Experience the <br /><span className="text-secondary italic">Blueprint.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
              Interact with our virtual architectural models. Rotate, zoom, and tilt to explore the spatial intelligence and engineering excellence behind our luxury projects. 
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0">
                  <span className="text-secondary text-xs font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Drag to Rotate</h4>
                  <p className="text-sm text-gray-500">Touch or click and drag to view from any angle.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30 shrink-0">
                  <span className="text-secondary text-xs font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Pinch to Zoom</h4>
                  <p className="text-sm text-gray-500">Get a closer look at the premium detailing.</p>
                </div>
              </div>
            </div>

            <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 btn-liquid-gold text-primary font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
              >
                View Full Portfolio
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Canvas Side */}
        <div className="order-1 lg:order-2 h-[500px] lg:h-[700px] w-full relative rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl glass-dark-liquid">
          {/* Subtle grid background behind canvas */}
          <div className="absolute inset-0 z-0 opacity-10" 
            style={{ backgroundImage: 'radial-gradient(circle, #C29545 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
          />
          
          <div className="absolute inset-0 z-10">
            <Canvas camera={{ position: [-5, 5, 8], fov: 45 }}>
              <color attach="background" args={['transparent']} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              
              <Environment preset="city" />
              
              <PresentationControls 
                global 
                config={{ mass: 2, tension: 500 }} 
                snap={{ mass: 4, tension: 1500 }} 
                rotation={[0, 0.3, 0]} 
                polar={[-Math.PI / 3, Math.PI / 3]} 
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
                  <BuildingModel />
                </Float>
              </PresentationControls>

              <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
            </Canvas>
          </div>
          
          {/* Overlay hints */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div className="glass-liquid px-6 py-2 rounded-full border border-white/20 shadow-xl backdrop-blur-xl">
              <span className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                Interactive 3D Preview
              </span>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
