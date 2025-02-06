import axios from "axios";
import { useEffect, useState } from "react";
import SingleProject from "../components/SingleProject";

const AllProject = () => {
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
    <div className="min-h-screen py-12">
      <div className="flex flex-col w-11/12 mx-auto gap-4">
        {projects.map((oneProject, index) => (
          <SingleProject key={index} oneProject={oneProject}></SingleProject>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
