import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ProjectList from './ProjectList'; // Adjust the import path as necessary
import ProjectImg from '../assets/project-test-img.png'
import projects from '../assets/projects'

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = projects();

  return (
    <div className="bg-white my-10 pb-10" id="project">
      <div className="">
        <h1 className="m-8 text-4xl font-bold text-center ">My Projects</h1>
        <div className='grid grid-flow-row lg:grid-cols-4 gap-4 mx-auto my-8 w-[80%]'>
          {data.map((item) => (
            <div key={item.name} data-aos="zoom-in-up" className='bg-white rounded-sm shadow-md p-4 w-auto'>
              <img src={item.img} alt="" className="h-[45%] w-[95%] mx-auto "/>
              <h3 className='text-md font-bold my-8'>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
