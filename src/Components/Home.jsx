import React from 'react';
import Model from './3dModels/Java';
import Computer from './3dModels/Computer';
import Nav from './Nav';
import Csharp from './3dModels/Csharp';
import Java from './3dModels/Java';
import Javascript from './3dModels/Javascript';
import Python from './3dModels/Python';

4
const Home = () => {

  const Project_Section = () =>{
    const element = document.querySelector(".project-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().top,
        left:0,
        behavior:'smooth'
    })
}




    return (
        

        <>
      <section className="flex ">
        <div className=" lg:w-3/5 bg-yellow-300 min-h-full z-10 w-14 " >

          <section className="flex items-center h-full ">
            <div className="text-right p-10">
              <h1 className="text-7xl font-bold leading-none  mb-10 ">
                About me
                
              </h1>
              <p className="pl-80 mb-10 text-2xl ">
I am a Junior Full Stack web develloper thrilled about learning each day. I made this portfolio to share my current and future Projects
              </p>
              <a  className="border-b border-gray-900 pb-2" onClick={Project_Section}>My Projects </a>
              <div className="flex mt-28  h-56   ">
              <Java/>

              <Csharp/>

              <Javascript/>

         
              </div>
            </div>
          
          </section>


        </div>

        <div className=" lg:w-2/5 ">

            <img
              className="  max-h-full w-full"
              src="/public/img/bechir2.jpg"
              alt=""
            />

        </div>  

          
      </section>

        </>
    )

}       








export default Home 