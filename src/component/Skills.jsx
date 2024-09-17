import React from "react";
import JavaLogo from "../assets/img/java.png";
import JavascriptLogo from "../assets/img/javascript.png";
import PhpLogo from "../assets/img/PHP.png";
import LaravelLogo from "../assets/img/Laravel.png";
import MysqlLogo from "../assets/img/mysql.png";
import ReactjsLogo from "../assets/img/reactjs.png";
import NodejsLogo from "../assets/img/nodejs.png";
import TailwindLogo from "../assets/img/tailwind.png";
import BootstrapLogo from "../assets/img/bootstrap.png";

export default function Skills() {
  const skillsLogo = [
    { name: "javascript", href: JavaLogo },
    { name: "java", href: JavascriptLogo },
    { name: "php", href: PhpLogo },
    { name: "laravel", href: LaravelLogo },
    { name: "mysql", href: MysqlLogo },
    { name: "reactjs", href: ReactjsLogo },
    { name: "nodejs", href: NodejsLogo },
    { name: "tailwindcss", href: TailwindLogo },
    { name: "bootstrap", href: BootstrapLogo },
  ];

  return (
    <>
      {skillsLogo.map((item) => (
        <img
          src={item.href}
          className="w-12 h-12 object-contain"
          alt={item.name}
          key={item.name}
        />
      ))}
    </>
  );
}
