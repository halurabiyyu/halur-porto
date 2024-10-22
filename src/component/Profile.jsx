/* eslint-disable no-unused-vars */
import React from "react";
import Skills from "./Skills";

export default function Profile() {
  return (
    <>
      <div className="h-full items-start px-2 gap-2 flex flex-col justify-center content-center">
        <div>
          <h1 className="font-bold text-lg">Profile</h1>
          <p className="text-xs lg:text-base text-left">
            I am Halur Muhammad Abiyyu, a D4 Informatics Engineering student at
            Politeknik Negeri Malang. I am an experienced software developer
            with expertise in front-end and full-stack development, proficient
            in React, Laravel, and Git/GitHub. I am dedicated to creating
            high-quality, responsive web applications.
          </p>
        </div>
        <div className="items-start">
          <h1 className="font-bold text-lg">Skills</h1>
          <div className="flex gap-1 flex-wrap">
            <Skills></Skills>
          </div>
        </div>
      </div>
    </>
  );
}
