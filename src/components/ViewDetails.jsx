import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const singleData = useLoaderData();
  const {
    title,
    image,
    description,
    liveLink,
    repository,
    techStack,
    overview,
    feature,
  } = singleData;

  return (
    <div className="min-h-screen flex items-center bg-transparent text-gray-700">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="text-center">
            <h1 className="text-3xl font-semibold my-4 text-gray-800">
              {title}
            </h1>
            <p className="text-lg mb-4">{description}</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-5 justify-center text-center">
            <Link
              to={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              View Repository
            </Link>
            <Link
              to={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-700"
            >
              Live Project
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2   bg-base-200 p-5">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p>{overview}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="list-disc pl-5">
              {feature &&
                feature.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
