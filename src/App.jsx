import React, { useRef, useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'
import Project from './Components/Project';


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
  <Routes>
<Route path='/'  element={<Home/>}/>
<Route path='/Csharp' element={<Project/>}/>
  </Routes>
  );
}

export default App;