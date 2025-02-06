import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const fetchAllProjects = () => {
    axios
      .get("/project.json")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <div className="w-11/12 mx-auto bg-base-300 py-10 mb-16">
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-500 mb-10">
          My Project
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
