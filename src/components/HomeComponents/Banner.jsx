import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div>
        <div>
          <h3 className="text-xl">Hi, I am</h3>
          <h1 className="text-4xl font-bold">ISTIAQ AHSAN ROMI</h1>

          <div className="text-xl">
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
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
