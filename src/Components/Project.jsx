import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



const Project = () => {
  return (
    <Canvas>
      <mesh>
     
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      </mesh>
    </Canvas>
  );
};

function Model() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    
    gltfLoader.load('/img/python.glb', (gltf) => {
      setModel(gltf.scene);
    });
  }, []); // Load the model only once when the component mounts

  return model ? <primitive object={model} /> : null;
}

export default Project;