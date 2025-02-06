import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <div className="group [perspective:1000px] w-full h-[350px] bg-base-200 p-2 shadow-xl rounded-lg">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute bottom-5 left-5  bg-opacity-60 px-4 py-2 rounded-md">
            <h2 className="text-white text-lg font-bold">{project.title}</h2>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center p-6 text-center">
          <h2 className="text-gray-700 mb-2 font-bold text-xl">
            {project.title}
          </h2>
          <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

          {/* Tech Stack Section */}
          <div className="flex gap-2 flex-wrap justify-center">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-gray-400 text-xs text-black border border-gray-500 px-3 py-1 rounded-md font-semibold shadow-md transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-5">
            <Link
              to={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              View Repo
            </Link>
            <Link
              to={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-700"
            >
              Live Project
            </Link>
          </div>
          <div className="mt-5">
            <Link
              to={`/viewDetails/${project.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-900 to-gray-300 text-white px-6 py-2 rounded-md text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-l"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
