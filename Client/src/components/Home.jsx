import React from 'react'
import pic from "../../public/neha.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped} from "react-typed";

function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                <span className="text-x1">Welcome </span>
                <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1>Hello, I'm a </h1>
                    {/* <span className="text-red-700 font-bold">Developer</span> */}
                    <ReactTyped
                        className="text-red-700 font-bold"
                        strings={["Developer","Programmer","Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <br/>
                <p className="text-sm md:text-md text-justify">
                I am Neha Rajesh Bhavsar. I am a student at R. C. Patel Institute of Technology, Shirpur. I am currently pursuing my Bachelor of Technology in Computer Engineering. I am very excited to learn new things related to technology. I am good at programming in C, Java, and constantly learning new ones. Passionate about coding, problem-solving, and staying updated on the latest tech trends.
                     
                </p>
                <br/>

                {/* social media */}
                
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                <div className="  space-y-2">
                    <h1 className="font-bold text-center ">Available on</h1>
                    <ul className="flex space-x-5">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                        <FaSquareFacebook className="text-2xl cursor-pointer" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/nehabhavsar117/" target="_blank">
                        <FaLinkedin className="text-2xl cursor-pointer" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank">
                        <IoLogoYoutube className="text-2xl cursor-pointer" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/" target="_blank">
                        <FaTelegram className="text-2xl cursor-pointer" />
                        </a>
                    </li>
                    </ul>
              </div>
                <div className=" space-y-2">
                    <h1 className="font-bold text-center">Currently working on</h1>
                    <div className="flex space-x-5">
                        <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                        <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                        <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                        <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    </div>
                </div>
            </div>
            </div>
            <div className="md:w-1/2 md:ml-48 md:ml-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
            </div>
        </div>
    </div>
  )
}

export default Home
