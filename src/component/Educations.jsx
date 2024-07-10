import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import edu_timeline from "../assets/edu-timeline"; // Ensure this imports correctly

export default function Educations() {
  const Educ = edu_timeline();
  
  return (
    <>
      <h1 className="m-8 text-4xl font-bold text-center" id="education">Educations</h1>
      <VerticalTimeline className="">
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div></div>
        {Educ.map((item) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={item.year}
            iconStyle={{
              background: "#4f46e5",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={item.name}
          >
            <h3
              className="text-md font-bold vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {item.name}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {item.learn}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}
