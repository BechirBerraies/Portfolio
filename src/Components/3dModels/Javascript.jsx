import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';


function Javascript() {
  const [model, setModel] = useState(null);
  const gltfRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (gltfRef.current) {
        gltfRef.current.rotation.y -= 0.001; // Adjust the rotation speed as needed
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [model]);

  
  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/img/js.glb', (gltf) => {
      gltf.scene.scale.set(1.7,1.7,1.7); // Adjust the scale as needed
      setModel(gltf.scene);
    });
  }, []);

  return (
    
    <Canvas >
            <mesh visible>
        <ambientLight intensity={1} />
        {/* <directionalLight color="yellow" position={[2, 0, 5]} /> */}
        <directionalLight  />
        <meshStandardMaterial color="hotpink" transparent />
        {model && <primitive object={model} ref={gltfRef} />}
        <OrbitControls    enableZoom={false}/>
                </mesh>
      </Canvas>

  );
}

export default Javascript;