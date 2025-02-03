import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <div className="group [perspective:1000px] w-full h-[300px] bg-base-200 p-5 shadow-xl">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute bottom-5 left-5  bg-opacity-50  rounded-md">
            <h2 className="text-white  text-lg font-bold">{project.title}</h2>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center p-6 text-center">
          <h2 className="text-gray-700 mb-4 font-bold">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex space-x-4">
            <Link
              to={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Repository
            </Link>
            <Link
              to={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral"
            >
              Live Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
