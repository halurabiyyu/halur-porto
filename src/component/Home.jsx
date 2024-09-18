/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/img/logo-man.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import PhotoProfile from "../assets/img/photo-profile.png";
import Projects from "./Projects";
import Profile from "./Profile";
import Contact from "./Contact";

const navigation = [
  { name: "--Profile--", href: "/" },
  { name: "--Project--", href: "/project" },
  { name: "--Contact--", href: "/contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Router>
        <div className="font-mono h-svh bg-slate-200 flex justify-center items-center content-center">
          <div className="bg-white drop-shadow flex gap-1 m-auto rounded h-[70%] w-[70%]">
            <div className="container flex gap-1 flex-col-reverse w-[30%] h-full">
              <div className="container h-[30%] w-full rounded p-2 flex flex-col outline-double outline-amber-800">
                <h1 className="text-sm">&copy; 2024 Halur Abiyyu, Inc. All rights reserved.</h1>
                <small className="text-sm text-slate-500">created with reactjs & tailwind</small>
              </div>
              <div className="container w-full h-full rounded items-center gap-3 p-2 flex flex-col outline-double outline-amber-800">
                <img src={PhotoProfile} className="w-40 h-40 mt-5" alt="" />
                <h1 className="font-bold text-lg font-mono">
                  Halur Muhammad Abiyyu
                </h1>
                <div className="flex flex-col gap-2">
                  <nav>
                    <ul>
                      {navigation.map((item) => (
                        <li key={item.name} className="hover:font-bol">
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? "bg-amber-800 outline-double outline-amber-800 text-white"
                                : "outline-double outline-amber-800 hover:bg-amber-800 hover:text-white"
                            }
                            to={item.href}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="container items-center h-full p-2 flex rounded flex-col outline-double outline-amber-800">
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
