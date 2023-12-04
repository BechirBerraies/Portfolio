import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import Home from './Components/Home';
import Model from './Components/3dModels/Model';
import Csharp from './Components/3dModels/Csharp';
import ModelsPage from './Components/ModelsPage';
import Computer from './Components/3dModels/Computer';



function App() {
  const [model, setModel] = useState(null);
  const gltfRef = useRef();

  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/img/logo.glb', (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  return (
  <>
<Home/>
<ModelsPage/>

  </>

  );
}

export default App;