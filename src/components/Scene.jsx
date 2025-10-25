import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

// ============ BRIGHT MODE ANIMATIONS ============

// Bright mode: Floating geometric crystals
function FloatingCrystals({ scrollProgress }) {
    const groupRef = useRef();
    
    const crystals = useMemo(() => {
        return new Array(8).fill(0).map((_, i) => ({
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 4,
            z: (Math.random() - 0.5) * 6,
            scale: 0.3 + Math.random() * 0.4,
            rotSpeed: 0.3 + Math.random() * 0.5,
            floatSpeed: 0.5 + Math.random() * 0.5,
            color: ['#007AFF', '#005FCC', '#0051A8', '#38bdf8', '#0ea5e9'][Math.floor(Math.random() * 5)]
        }));
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;
        
        groupRef.current.children.forEach((child, i) => {
            const crystal = crystals[i];
            child.rotation.x += 0.01 * crystal.rotSpeed;
            child.rotation.y += 0.015 * crystal.rotSpeed;
            child.position.y = crystal.y + Math.sin(state.clock.elapsedTime * crystal.floatSpeed + i) * 0.5;
            child.position.x = crystal.x + Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.3;
        });
        
        groupRef.current.rotation.y += scrollProgress * 0.001;
    });

    return (
        <group ref={groupRef}>
            {crystals.map((crystal, i) => (
                <mesh key={i} position={[crystal.x, crystal.y, crystal.z]} scale={crystal.scale}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial 
                        color={crystal.color}
                        metalness={0.8}
                        roughness={0.2}
                        emissive={crystal.color}
                        emissiveIntensity={0.3}
                    />
                </mesh>
            ))}
        </group>
    );
}

// Bright mode: Orbiting rings
function OrbitRings({ scrollProgress }) {
    const groupRef = useRef();
    
    const rings = useMemo(() => [
        { radius: 2.5, width: 0.05, tilt: 0.3, speed: 0.3, color: '#007AFF' },
        { radius: 3.2, width: 0.04, tilt: -0.5, speed: -0.2, color: '#005FCC' },
        { radius: 4.0, width: 0.06, tilt: 0.7, speed: 0.25, color: '#38bdf8' }
    ], []);

    useFrame((state) => {
        if (!groupRef.current) return;
        
        groupRef.current.children.forEach((ring, i) => {
            const ringData = rings[i];
            ring.rotation.y = state.clock.elapsedTime * ringData.speed + scrollProgress * 0.005 * (i + 1);
        });
    });

    return (
        <group ref={groupRef}>
            {rings.map((ring, i) => (
                <mesh key={i} rotation={[ring.tilt, 0, 0]}>
                    <torusGeometry args={[ring.radius, ring.width, 16, 100]} />
                    <meshStandardMaterial 
                        color={ring.color}
                        metalness={0.6}
                        roughness={0.3}
                        emissive={ring.color}
                        emissiveIntensity={0.2}
                    />
                </mesh>
            ))}
        </group>
    );
}

function TorusKnot({ scrollProgress }) {
    const meshRef = useRef();
    const glowRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + scrollProgress * 0.01;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + scrollProgress * 0.01;
        }
        
        if (glowRef.current) {
            glowRef.current.rotation.x = -state.clock.elapsedTime * 0.15;
            glowRef.current.rotation.y = state.clock.elapsedTime * 0.25;
        }
    });

    return (
        <>
            <mesh ref={glowRef}>
                <torusKnotGeometry args={[2.5, 0.8, 128, 16]} />
                <meshBasicMaterial color="#8b5cf6" transparent opacity={0.1} />
            </mesh>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[2, 0.6, 128, 16]} />
                <meshStandardMaterial 
                    color="#6366f1"
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#8b5cf6"
                    emissiveIntensity={0.5}
                />
            </mesh>
        </>
    );
}

// Particle field background for dark mode
function ParticleField({ scrollProgress }) {
    const pointsRef = useRef();
    
    const particles = useMemo(() => {
        const positions = [];
        const colors = [];
        const count = 1000;
        
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            positions.push(x, y, z);
            
            const color = Math.random() > 0.5 ? [0.38, 0.4, 0.95] : [0.54, 0.36, 0.97];
            colors.push(...color);
        }
        
        return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y += scrollProgress * 0.0005;
        pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} vertexColors sizeAttenuation transparent opacity={0.8} />
        </points>
    );
}


export function BrightScene({ scrollProgress }) {
    return (
        <>
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#38bdf8" />
            <FloatingCrystals scrollProgress={scrollProgress} />
            <OrbitRings scrollProgress={scrollProgress} />
        </>
    );
}

export function DarkScene({ scrollProgress }) {
    return (
        <>
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            <TorusKnot scrollProgress={scrollProgress} />
            
            <ParticleField scrollProgress={scrollProgress} />
        </>
    );
}

export default function HeroScene({ scrollProgress, isBright }) {
    if (isBright) {
        return <BrightScene scrollProgress={scrollProgress} />;
    }
    return <DarkScene scrollProgress={scrollProgress} />;
}