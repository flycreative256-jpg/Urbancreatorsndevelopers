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

// --- Room Data ---
const ROOMS = [
  { id: 'living', name: 'Living Room', size: '450 Sq.Ft', position: [-2, 0, 1.5], scale: [5, 0.1, 5], info: 'Double-height ceiling with panoramic views and premium sofa.' },
  { id: 'kitchen', name: 'Gourmet Kitchen', size: '280 Sq.Ft', position: [-2, 0, -2.5], scale: [5, 0.1, 3], info: 'Italian marble countertops & smart appliances.' },
  { id: 'bedroom', name: 'Master Suite', size: '350 Sq.Ft', position: [3, 0, -1.5], scale: [4, 0.1, 5], info: 'Walk-in closet, premium wood floors & smart lighting.' },
  { id: 'bathroom', name: 'Luxury Bath', size: '150 Sq.Ft', position: [3, 0, 2.5], scale: [4, 0.1, 3], info: 'Freestanding tub and imported dark marble.' },
];

function LuxurySpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-secondary tracking-widest text-[10px] mt-4 uppercase font-bold">Loading Floor Plan</p>
      </div>
    </Html>
  );
}

function SolidFloor({ args, position, color, roughness = 0.8 }) {
  return (
    <mesh position={position} receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} roughness={roughness} />
    </mesh>
  );
}

// --- Architectural Elements ---
function Wall({ args, position, rotation = [0, 0, 0] }) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color="#f8f9fa" roughness={0.9} />
    </mesh>
  );
}

function GlassWall({ args, position, rotation = [0, 0, 0] }) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <boxGeometry args={args} />
      <MeshTransmissionMaterial 
        thickness={0.1} roughness={0.05} transmission={0.95} ior={1.5} color="#e0f7fa" 
      />
    </mesh>
  );
}

// --- Furniture Elements ---
function FurnitureSofa({ position, rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.4, 1]} />
        <meshStandardMaterial color="#dcdde1" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.6, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.5, 0.2]} />
        <meshStandardMaterial color="#dcdde1" roughness={0.9} />
      </mesh>
      <mesh position={[-0.8, 0.2, 0.8]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.4, 1.6]} />
        <meshStandardMaterial color="#dcdde1" roughness={0.9} />
      </mesh>
      <mesh position={[0.5, 0.25, 1]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
        <meshStandardMaterial color="#2f3640" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0.3, 3]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.6, 0.4]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.2, 3]} castShadow>
        <boxGeometry args={[2.4, 1.2, 0.05]} />
        <meshStandardMaterial color="#111" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
}

function FurnitureKitchen({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 1, 1]} />
        <meshStandardMaterial color="#f5f6fa" roughness={0.1} metalness={0.1} />
      </mesh>
      <mesh position={[0, 1.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.1, 1.1]} />
        <meshStandardMaterial color="#ffffff" roughness={0} metalness={0.2} />
      </mesh>
      <mesh position={[-0.8, 0.4, 0.8]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
        <meshStandardMaterial color="#e1b12c" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0.8, 0.4, 0.8]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
        <meshStandardMaterial color="#e1b12c" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0, 1, -1.8]} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 0.6]} />
        <meshStandardMaterial color="#2f3640" roughness={0.8} />
      </mesh>
    </group>
  );
}

function FurnitureBed({ position, rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.5, 2.2]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.3, 2]} />
        <meshStandardMaterial color="#f5f6fa" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.8, -1.05]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 1.2, 0.1]} />
        <meshStandardMaterial color="#2f3640" roughness={0.9} />
      </mesh>
      <mesh position={[-1.3, 0.3, -0.8]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.6} />
      </mesh>
      <mesh position={[1.3, 0.3, -0.8]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.6} />
      </mesh>
      <mesh position={[-1.3, 0.8, -0.8]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#fbc531" emissive="#fbc531" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[1.3, 0.8, -0.8]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#fbc531" emissive="#fbc531" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

// --- Interaction Zone ---
function InteractiveZone({ data, isSelected, onClick, onPointerOver, onPointerOut }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    const targetY = isSelected ? 0.05 : 0;
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, delta * 5);
  });

  return (
    <group position={[data.position[0], 0.01, data.position[2]]}>
      <mesh
        ref={meshRef}
        onClick={(e) => { e.stopPropagation(); onClick(data); }}
        onPointerOver={(e) => { e.stopPropagation(); onPointerOver(data.id); }}
        onPointerOut={(e) => { e.stopPropagation(); onPointerOut(); }}
      >
        <boxGeometry args={[data.scale[0], 0.1, data.scale[2]]} />
        <meshBasicMaterial 
          color={isSelected ? '#e1b12c' : '#ffffff'} 
          transparent 
          opacity={isSelected ? 0.15 : 0} 
        />
      </mesh>
      {isSelected && (
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.4}
          color="#e1b12c"
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

// --- Main Layout ---
function FloorPlanModel({ selectedRoom, setSelectedRoom }) {
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const groupRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  useCursor(hoveredRoom !== null);

  useEffect(() => {
    const handleOrientation = (e) => {
      if (!e.beta || !e.gamma) return;
      targetRotation.current.x = THREE.MathUtils.clamp((e.beta - 45) * 0.01, -0.2, 0.2);
      targetRotation.current.y = THREE.MathUtils.clamp(e.gamma * 0.01, -0.2, 0.2);
    };
    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  useFrame((state, delta) => {
    if (state.pointer) {
       targetRotation.current.x = -(state.pointer.y * Math.PI) / 16;
       targetRotation.current.y = (state.pointer.x * Math.PI) / 16;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation.current.y, delta * 3);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation.current.x, delta * 3);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
      <group ref={groupRef} position={[0, -0.5, 0]}>
        
        {/* Exterior Foundation */}
        <SolidFloor args={[10.4, 0.2, 8.4]} position={[0.5, -0.1, 0]} color="#1a1c20" />
        
        {/* Living & Kitchen Floor (Marble-like solid) */}
        <SolidFloor 
          args={[6, 0.1, 8]} position={[-2, 0.05, 0]} 
          color="#f1f2f6" roughness={0.1}
        />
        {/* Bedroom Floor (Wood-like solid) */}
        <SolidFloor 
          args={[4, 0.1, 5]} position={[3, 0.05, -1.5]} 
          color="#a4b0be" roughness={0.4} 
        />
        {/* Bathroom Floor (Dark Stone) */}
        <SolidFloor args={[4, 0.1, 3]} position={[3, 0.05, 2.5]} color="#111" roughness={0.1} />

        {/* Outer Walls */}
        <Wall args={[10, 2.5, 0.2]} position={[0.5, 1.25, -4.05]} />
        <Wall args={[10, 2.5, 0.2]} position={[0.5, 1.25, 4.05]} />
        <Wall args={[0.2, 2.5, 8]} position={[-5.05, 1.25, 0]} />
        <Wall args={[0.2, 2.5, 8]} position={[5.05, 1.25, 0]} />

        {/* Inner Partitions */}
        <Wall args={[0.2, 2.5, 6]} position={[0.9, 1.25, -1]} />
        <Wall args={[4, 2.5, 0.2]} position={[3, 1.25, 0.9]} />

        {/* Windows / Glass Fronts (Overriding parts of outer walls visually) */}
        <GlassWall args={[4, 2.2, 0.1]} position={[-2.5, 1.25, 4.06]} />
        <GlassWall args={[3, 2.2, 0.1]} position={[3, 1.25, 4.06]} />

        {/* Furniture Groups */}
        <FurnitureSofa position={[-2, 0.1, 0]} />
        <FurnitureKitchen position={[-2, 0.1, -2.5]} />
        <FurnitureBed position={[3, 0.1, -2]} />
        
        {/* Bathroom Tub */}
        <mesh position={[3, 0.4, 2.5]} castShadow>
          <boxGeometry args={[1.5, 0.6, 0.8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
        </mesh>

        {/* Interactive Zones over each room */}
        {ROOMS.map((room) => (
          <InteractiveZone 
            key={room.id}
            data={room}
            isSelected={selectedRoom?.id === room.id}
            onClick={setSelectedRoom}
            onPointerOver={setHoveredRoom}
            onPointerOut={() => setHoveredRoom(null)}
          />
        ))}
      </group>
    </Float>
  );
}

// --- Main Export ---
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

      {/* 3D Canvas */}
      <div className="flex-1 w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 10, 14], fov: 40 }}>
          <Suspense fallback={<LuxurySpinner />}>
            <color attach="background" args={['#030407']} />
            
            {/* Elegant Cinematic Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight 
              castShadow 
              position={[8, 15, 8]} 
              intensity={2} 
              shadow-mapSize={[2048, 2048]}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <Environment preset="apartment" />

            {/* Smooth Parallax Interaction */}
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.4, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 1.5, Math.PI / 2]}
            >
              <FloorPlanModel selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
            </PresentationControls>

            {/* Soft ground shadow for realism */}
            <ContactShadows 
              position={[0, -1.4, 0]} 
              opacity={0.6} 
              scale={25} 
              blur={2.5} 
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
