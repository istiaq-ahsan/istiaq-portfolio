import { GoArrowDownLeft } from "react-icons/go";

const Education = () => {
  return (
    <div className="w-11/12 mx-auto bg-base-300 py-10 my-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-500 text-center mb-10">
          My Education
        </h1>
      </div>
      <div className="flex gap-4 px-4">
        <div className="w-full text-center  bg-base-200 shadow-xl px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]">
          <GoArrowDownLeft className="absolute top-2 z-20 right-2 text-[1rem] text-white" />

          {/*  text  */}
          <h3 className="text-xl text-gray-900 font-bold transition-all duration-500 group-hover:text-white ease-out">
            Bachelor of Computer Science And Engineering
          </h3>
          <p className=" text-gray-600 font-semibold transition-all ease-out duration-500 mt-1 group-hover:text-white">
            International Islamic University Chittagong
          </p>
          <p className="text-gray-600 font-medium transition-all ease-out duration-500 mt-1 group-hover:text-white">
            2025 -Present
          </p>
        </div>
        <div className="w-full text-center  bg-base-200 shadow-xl px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]">
          <GoArrowDownLeft className="absolute top-2 z-20 right-2 text-[1rem] text-white" />

          {/*  text  */}
          <h3 className="text-xl text-gray-900 font-bold transition-all duration-500 group-hover:text-white ease-out">
            Higher Secondary Certificate (HSC)
          </h3>
          <p className=" text-gray-600 font-semibold transition-all ease-out duration-500 mt-1 group-hover:text-white">
            Govt Hazi Muhammad Mohsin College
          </p>
          <p className="text-gray-600 font-medium transition-all ease-out duration-500 mt-1 group-hover:text-white">
            2021 -2023
          </p>
        </div>
        <div className="w-full text-center  bg-base-200 shadow-xl px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]">
          <GoArrowDownLeft className="absolute top-2 z-20 right-2 text-[1rem] text-white" />

          {/*  text  */}
          <h3 className="text-xl text-gray-900 font-bold transition-all duration-500 group-hover:text-white ease-out">
            Secondary School Certificate (SSC)
          </h3>
          <p className=" text-gray-600 font-semibold transition-all ease-out duration-500 mt-1 group-hover:text-white">
            Collegiate School, Chattogram
          </p>
          <p className="text-gray-600 font-medium transition-all ease-out duration-500 mt-1 group-hover:text-white">
            2018-2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
