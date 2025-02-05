import { ReactTyped } from "react-typed";
import ParticlesComponent from "../ParticlesComponent";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

const Banner = () => {
  const codeString = `constprofile={
name:'Istiaq Ahsan Romi',
title:'Junior MERN Stack Developer',
skills:['React', 'Node', 'Express', 'MongoDB', 'Next', 'JavaScript', 'Git', 'Firebase',],
hardWorker:true,
quickLearner:true,
problemSolver:true,
hireable:function() {
return(
this.hardWorker&&
this.problemSolver&&
this.skills.length>=5
);
};
};`;

  const [copy, setCopy] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeString); // Copy the code to the clipboard
    setCopy(true); // Set the copy state to true
    setTimeout(() => {
      setCopy(false); // Reset copy state after 3 seconds
    }, 2000);
  };

  return (
    <div className="relative w-11/12 mx-auto py-10">
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent id="banner-particles" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="relative z-10 text-gray-800 md:text-left text-center md:w-[60%] space-y-4">
          <h3 className="text-lg lg:text-2xl md:text-xl">Hi, I am</h3>
          <h1 className="text-3xl md:text-5xl font-bold">ISTIAQ AHSAN ROMI</h1>
          <div className="text-lg md:text-xl font-medium">
            <ReactTyped
              strings={[
                "Front-End Developer",
                "Junior MERN Stack Developer",
                "Junior Web Developer",
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </div>
          <p className="text-base">
            A passionate MERN stack developer with expertise in building
            dynamic, full-stack web applications using MongoDB, Express, React,
            and Node.js.
          </p>
          <div className="text-4xl flex gap-4 text-gray-900 mt-5 justify-center md:justify-start">
            <Link to="https://github.com/istiaq-ahsan">
              <FaSquareGithub />
            </Link>
            <Link to="https://www.linkedin.com/in/istiaq-ahsan">
              <FaLinkedin />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100095084532947">
              <FaFacebookSquare />
            </Link>
            <Link to="https://wa.me/01575306824">
              <FaWhatsappSquare />
            </Link>
          </div>
          <div className="mt-10">
            <button className="btn btn-wide bg-gray-500 hover:bg-gray-400 text-white">
              Get Resume
            </button>
          </div>
        </div>

        {/* Right Side  */}
        <div className="w-full md:w-[30rem] bg-gray-200 rounded-md shadow-lg overflow-hidden">
          <div className="flex justify-between px-4 py-2 bg-gray-300 border-b">
            <p className="text-sm font-semibold text-gray-900">Example Code</p>
            {copy ? (
              <button className="btn btn-xs">Copied</button>
            ) : (
              <button onClick={handleCopyClick} className="btn btn-xs">
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            customStyle={{
              padding: "20px",
              backgroundColor: "transparent !important",
            }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Banner;
