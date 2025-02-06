/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const SingleProject = ({ oneProject }) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 items-center shadow-lg border border-gray-300 p-4">
      {/* Left Side: Slider */}
      <div className="w-full md:w-1/2">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {oneProject.moreImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                className="h-64 w-full object-cover border border-gray-400"
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Side: Project Description */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold">{oneProject.title}</h2>
        <p className="mt-4">{oneProject.description}</p>

        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
          {oneProject.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-md font-semibold shadow-sm transition-all duration-300 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-5">
          <Link
            to={oneProject.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            View Repo
          </Link>
          <Link
            to={oneProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-700"
          >
            Live Project
          </Link>
          <Link
            to={`/viewDetails/${oneProject.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
