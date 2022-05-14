import React, { useState } from "react";
import fullstack from "../assets/fullstack.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll/modules";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={fullstack} alt="fullstack logo" style={{ width: "50px" }} />
      </div>

      {/* menu */}

        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li>
          <Link to="work" smooth={true} duration={500}>Work</Link>
          </li>
          <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>


      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                <a className="flex justify-between items-center w-full text-gray-300 bg-[#0077b5] rounded-lg" href="https://www.linkedin.com/in/8lly-quiz-b0aa88226/" target="_blank" rel="noreferrer noopener">
                    LinkedIn <FaLinkedin size={30} />
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                <a className="flex justify-between items-center w-full text-gray-300 bg-[#1c5af5] rounded-lg" href="https://github.com/Willistic" target="_blank" rel="noreferrer noopener">
                    Github <FaGithub size={30} />
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
              <Link to="contact" className="flex justify-between items-center w-full text-gray-300 bg-[#767676] rounded-lg">
                    Contact <HiOutlineMail size={30} />
              </Link>
            </li>
        </ul>   
      </div>
    </div>
  );
};

export default Navbar;
