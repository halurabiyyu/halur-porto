/* eslint-disable no-unused-vars */
import React from "react";
import LogoMan from "../assets/img/logo-man.svg";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-row w-full">
          <div className="flex-1 items-center hidden justify-center lg:flex">
            <div>
              <img src={LogoMan} className="w-60" alt="" />
            </div>
          </div>
          <div className="flex-1 p-2 justify-center">
            <h1 className="font-bold my-2 text-lg lg:text-3xl">Let&apos;s Collab</h1>
            <a
              href="mailto:halurabiyyu@gmail.com"
              className="flex hover:font-bold hover:bg-slate-100 hover:rounded pointer"
            >
              <SiGmail size={40} className="p-1" />
              <span className="ms-3 content-center lg:text-lg text-xs">halurabiyyu@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/halur-muhammad-abiyyu/"
              target="_blank"
              className="flex hover:font-bold hover:bg-slate-100 hover:rounded pointer"
            >
              <CiLinkedin size={40} />
              <span className="ms-3 content-center lg:text-lg text-xs">Halur Muhammad Abiyyu</span>
            </a>
            <a
              href="https://github.com/halurabiyyu"
              target="_blank"
              className="flex hover:font-bold hover:bg-slate-100 hover:rounded pointer"
            >
              <FaGithub size={40} className="p-1"/>
              <span className="ms-3 content-center lg:text-lg text-xs">halurabiyyu</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
