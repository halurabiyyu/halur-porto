/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../assets/projects.jsx";
import "../assets/style.css";
import LoadingImg from "../assets/img/Dual-Ring.gif"

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const data = projects();

  return (
    <>
      <div className="container bg-white w-full h-full lg:w-full lg:h-full" id="project">
        <div className="items-center h-[90%] lg:h-full">
          <h1 className="m-8 text-lg font-bold text-center">My Projects</h1>
          <div className="grid grid-flow-row lg:grid-cols-3 gap-1 mx-2 h-[75%] rounded overflow-y-scroll scrollbar-hide">
            {data.map((item) => (
              <div
                key={item.name}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <ProjectItem img={item.img} name={item.name} desc={item.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectItem({ img, name, desc }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center h-48">
          <img src={LoadingImg} className="w-20" alt="" />
        </div>
      )}
      <a href="#">
        <img
          className={`rounded-t-lg ${loading ? "hidden" : "block"}`}
          src={img}
          alt={name}
          onLoad={handleImageLoad}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
