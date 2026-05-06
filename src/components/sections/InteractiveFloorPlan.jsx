import React, { Suspense, useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  PresentationControls, 
  ContactShadows, 
  Html,
  Float,
  useCursor,
  Text,
  MeshTransmissionMaterial
} from '@react-three/drei';
import * as THREE from 'three';
import { motion as framerMotion, AnimatePresence } from 'framer-motion';

// --- Room Data & Abstract Architecture ---
// We simulate a high-end luxury floor plan using sleek geometric forms.
const ROOMS = [
  { id: 'living', name: 'Living Room', size: '450 Sq.Ft', color: '#f5f5f0', position: [0, 0, 0], scale: [4, 0.2, 4], info: 'Double-height ceiling with panoramic views.' },
  { id: 'kitchen', name: 'Gourmet Kitchen', size: '280 Sq.Ft', color: '#e8e8e4', position: [-3, 0, -2.5], scale: [2, 0.2, 3], info: 'Italian marble countertops & smart appliances.' },
  { id: 'bedroom', name: 'Master Suite', size: '350 Sq.Ft', color: '#ecece8', position: [3, 0, -2.5], scale: [2, 0.2, 3], info: 'Walk-in closet & luxury ensuite bathroom.' },
  { id: 'deck', name: 'Pool Deck', size: '600 Sq.Ft', color: '#dcdccf', position: [0, -0.1, 4], scale: [6, 0.1, 3], info: 'Infinity edge pool with sun loungers.' },
];

function LuxurySpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-secondary tracking-widest text-[10px] mt-4 uppercase font-bold">Loading Model</p>
      </div>
    </Html>
  );
}

function Room({ data, isSelected, onClick, onPointerOver, onPointerOut }) {
  const meshRef = useRef();
  
  // Smoothly animate the Y position and scale when selected
  useFrame((state, delta) => {
    const targetY = isSelected ? 0.5 : data.position[1];
    const targetScaleY = isSelected ? data.scale[1] * 2 : data.scale[1];
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, delta * 5);
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScaleY, delta * 5);
  });

  return (
    <group position={[data.position[0], 0, data.position[2]]}>
      <mesh
        ref={meshRef}
        onClick={(e) => { e.stopPropagation(); onClick(data); }}
        onPointerOver={(e) => { e.stopPropagation(); onPointerOver(data.id); }}
        onPointerOut={(e) => { e.stopPropagation(); onPointerOut(); }}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[data.scale[0], 1, data.scale[2]]} />
        <meshStandardMaterial 
          color={isSelected ? '#C29545' : data.color} 
          roughness={0.2}
          metalness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Decorative glass walls to make it look like a luxury floor plan */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[data.scale[0] - 0.2, 1, data.scale[2] - 0.2]} />
        <MeshTransmissionMaterial 
          thickness={0.5}
          roughness={0}
          transmission={0.9}
          ior={1.5}
          color={isSelected ? '#FDE68A' : '#ffffff'}
        />
      </mesh>
      
      {/* 3D Label */}
      {isSelected && (
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="#111"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
        >
          {data.name}
        </Text>
      )}
    </group>
  );
}

function FloorPlanModel({ selectedRoom, setSelectedRoom }) {
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const groupRef = useRef();
  
  // Gyroscope tracking state
  const targetRotation = useRef({ x: 0, y: 0 });

  useCursor(hoveredRoom !== null);

  useEffect(() => {
    const handleOrientation = (e) => {
      if (!e.beta || !e.gamma) return;
      // Beta (front-back tilt) -> mapped to X rotation
      // Gamma (left-right tilt) -> mapped to Y rotation
      targetRotation.current.x = THREE.MathUtils.clamp((e.beta - 45) * 0.01, -0.3, 0.3);
      targetRotation.current.y = THREE.MathUtils.clamp(e.gamma * 0.01, -0.3, 0.3);
    };
    
    // Only register if device supports orientation
    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  // Subtle Parallax & Device Gyroscope Effect
  useFrame((state, delta) => {
    // Basic mouse parallax (desktop)
    if (state.pointer) {
       targetRotation.current.x = -(state.pointer.y * Math.PI) / 12;
       targetRotation.current.y = (state.pointer.x * Math.PI) / 12;
    }
    
    // Smooth interpolation for rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation.current.y, delta * 2);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation.current.x, delta * 2);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef} position={[0, -1, 0]}>
        {ROOMS.map((room) => (
          <Room 
            key={room.id}
            data={room}
            isSelected={selectedRoom?.id === room.id}
            onClick={setSelectedRoom}
            onPointerOver={setHoveredRoom}
            onPointerOut={() => setHoveredRoom(null)}
          />
        ))}
        
        {/* Base Foundation */}
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <boxGeometry args={[12, 0.4, 12]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

export default function InteractiveFloorPlan() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section className="relative w-full h-[700px] md:h-[900px] bg-[#030407] overflow-hidden flex flex-col">
      {/* UI Overlay */}
      <div className="absolute top-10 left-0 w-full z-10 pointer-events-none px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div>
            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-2 block">Interactive Experience</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Explore The <span className="text-secondary italic">Villa.</span>
            </h2>
            <p className="text-white/40 mt-2 text-sm font-medium">Interact with the model to view room details.</p>
          </div>
          
          <AnimatePresence mode="wait">
            {selectedRoom && (
              <framerMotion.div 
                key={selectedRoom.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-64 md:w-80 pointer-events-auto shadow-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-1">{selectedRoom.name}</h3>
                <p className="text-secondary text-xs font-black uppercase tracking-widest mb-4">{selectedRoom.size}</p>
                <p className="text-white/60 text-sm leading-relaxed">{selectedRoom.info}</p>
                <button 
                  onClick={() => setSelectedRoom(null)}
                  className="mt-6 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  Close Details ✕
                </button>
              </framerMotion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex-1 w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 8, 12], fov: 45 }}>
          <Suspense fallback={<LuxurySpinner />}>
            <color attach="background" args={['#030407']} />
            
            {/* Elegant Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight 
              castShadow 
              position={[5, 10, 5]} 
              intensity={1.5} 
              shadow-mapSize={[1024, 1024]}
            />
            <Environment preset="city" />

            {/* Smooth Parallax Interaction */}
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <FloorPlanModel selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
            </PresentationControls>

            {/* Soft ground shadow for realism */}
            <ContactShadows 
              position={[0, -1.4, 0]} 
              opacity={0.4} 
              scale={20} 
              blur={2} 
              far={4} 
            />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Bottom Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">
        Drag to rotate • Click to inspect
      </div>
    </section>
  );
}
