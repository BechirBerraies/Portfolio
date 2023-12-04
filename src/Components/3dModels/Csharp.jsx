import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';


function Csharp() {
  const [model, setModel] = useState(null);
  const gltfRef = useRef();



  
  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/img/Csharp.glb', (gltf) => {
      gltf.scene.scale.set(2.5, 2.5, 2.5); // Adjust the scale as needed
      setModel(gltf.scene);
    });
  }, []);

  return (




    <Canvas >
            <mesh visible>
        <ambientLight intensity={1} />
        {/* <directionalLight color="yellow" position={[2, 0, 5]} /> */}
        <directionalLight color="yellow" position={[0, 0, 5]} />
        <meshStandardMaterial color="hotpink" transparent />
        {model && <primitive object={model} ref={gltfRef} />}
        <OrbitControls />
                </mesh>
      </Canvas>

  );
}

export default Csharp;