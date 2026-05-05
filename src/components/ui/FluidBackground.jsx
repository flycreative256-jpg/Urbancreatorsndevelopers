import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform sampler2D uFluidMap;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec2 vUv;

  void main() {
    // Liquid Distortion Logic
    vec2 fluid = texture2D(uFluidMap, vUv).rg;
    
    // Distort UVs based on fluid velocity trails
    vec2 distortedUv = vUv + fluid * 0.08;

    // Elegant Soft Gradient with subtle motion
    float wave = sin(vUv.x * 2.0 + uTime * 0.2) * cos(vUv.y * 2.0 + uTime * 0.15);
    vec3 gradient = mix(uColor1, uColor2, distortedUv.y + wave * 0.05);
    gradient = mix(gradient, uColor3, distortedUv.x - wave * 0.05);

    // Subtle Noise for Premium Finish
    float noise = (fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.015;
    
    gl_FragColor = vec4(gradient + noise, 1.0);
  }
`;

const FluidMesh = () => {
  const { size, viewport } = useThree();
  
  // Simulation targets
  const targets = useMemo(() => {
    const targetA = new THREE.WebGLRenderTarget(size.width, size.height, {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
    });
    const targetB = targetA.clone();
    return { current: targetA, next: targetB };
  }, [size]);

  // Shader for updating the fluid simulation
  const fluidMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uVelocity: { value: new THREE.Vector2(0, 0) },
      uPrevFluid: { value: null },
    },
    vertexShader,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uVelocity;
      uniform sampler2D uPrevFluid;
      varying vec2 vUv;

      void main() {
        vec2 prevFluid = texture2D(uPrevFluid, vUv).rg;
        
        // Liquid interaction behavior: distance check
        float dist = distance(vUv, uMouse);
        float radius = 0.05;
        float force = smoothstep(radius, 0.0, dist);
        
        // Apply velocity with smooth easing
        vec2 currentVelocity = uVelocity * force * 1.5;
        
        // Fluid displacement with viscosity (decay)
        vec2 newFluid = (prevFluid + currentVelocity) * 0.96;
        
        gl_FragColor = vec4(newFluid, 0.0, 1.0);
      }
    `
  }), []);

  // Final render material
  const mainMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uFluidMap: { value: null },
      uColor1: { value: new THREE.Color("#080a0f") }, // Deep Luxury Navy
      uColor2: { value: new THREE.Color("#131a2b") }, // Muted Steel Blue
      uColor3: { value: new THREE.Color("#020305") }  // Near Black
    },
    vertexShader,
    fragmentShader
  }), []);

  const mouse = useRef(new THREE.Vector2(0, 0));
  const prevMouse = useRef(new THREE.Vector2(0, 0));
  const velocity = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
      velocity.current.subVectors(mouse.current, prevMouse.current);
      prevMouse.current.copy(mouse.current);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fluidScene = useMemo(() => new THREE.Scene(), []);
  const fluidCamera = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), []);
  const fluidQuad = useMemo(() => new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fluidMaterial), [fluidMaterial]);
  
  useEffect(() => {
    fluidScene.add(fluidQuad);
  }, [fluidScene, fluidQuad]);

  useFrame((state) => {
    const { gl } = state;
    
    // Update Fluid Simulation
    fluidMaterial.uniforms.uTime.value = state.clock.getElapsedTime();
    fluidMaterial.uniforms.uMouse.value.copy(mouse.current);
    fluidMaterial.uniforms.uVelocity.value.copy(velocity.current);
    fluidMaterial.uniforms.uPrevFluid.value = targets.current.texture;
    
    // Decay velocity for smooth stop
    velocity.current.multiplyScalar(0.9);
    
    // Render to next target
    gl.setRenderTarget(targets.next);
    gl.render(fluidScene, fluidCamera);
    
    // Swap Targets
    const temp = targets.current;
    targets.current = targets.next;
    targets.next = temp;
    
    // Final Render Pass
    mainMaterial.uniforms.uTime.value = state.clock.getElapsedTime();
    mainMaterial.uniforms.uFluidMap.value = targets.current.texture;
    
    gl.setRenderTarget(null);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={mainMaterial} attach="material" />
    </mesh>
  );
};

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#080a0f]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{ 
          antialias: false, 
          stencil: false, 
          depth: false,
          powerPreference: "high-performance"
        }}
      >
        <FluidMesh />
      </Canvas>
    </div>
  );
};

export default FluidBackground;
