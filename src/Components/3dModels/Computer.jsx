import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';


function Computer() {
  const [model, setModel] = useState(null);
  const gltfRef = useRef();



  
  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/img/Computer.glb', (gltf) => {
      gltf.scene.scale.set(2, 2, 2); // Adjust the scale as needed
      setModel(gltf.scene);
    });
  }, []);
  const canvasStyle = {
    outline: 'none', // Remove the default outline
    border: 'none', // Remove any border
  };
  return (
    <div className="w-96 h-64 outline-none border-none"> {/* Adjust width and height using Tailwind classes */}
   
    <Canvas  className="outline-none border-none">
            <mesh visible>
        <ambientLight intensity={1} />
        {/* <directionalLight color="yellow" position={[2, 0, 5]} /> */}
        <directionalLight color="yellow" position={[0, 0, 5]} />
        <meshStandardMaterial color="hotpink" transparent />
        {model && <primitive object={model} ref={gltfRef} />}
        <OrbitControls />
                </mesh>
      </Canvas>
      </div>

  );
}

export default Computer;