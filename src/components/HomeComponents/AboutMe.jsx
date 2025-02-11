import { useRef, useState } from "react";

const AboutMe = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  return (
    <div className="w-11/12 mx-auto md:py-16">
      <section className="bg-white ">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100  lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl text-center font-bold text-gray-600 capitalize lg:text-4xl ">
              About Me
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center lg:gap-5">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg md:h-96 h-72"
                src="https://i.ibb.co.com/1df3Mj5/IMG20230630192019-BURST000-COVER-01.jpg"
                alt="Customer"
              />

              <div>
                <div
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  ref={cardRef}
                  className="w-full border relative overflow-hidden border-gray-200 rounded-lg p-[25px] cursor-pointer"
                >
                  <h2 className="text-[1.5rem] font-bold text-[#DB06F9]">
                    How I Got Into Programming
                  </h2>
                  <p className="text-gray-600 text-[1rem] mt-2">
                    A passionate Web Developer specializing in frontend
                    development. My journey into web development began last
                    year, but my passion for coding dates back to my HSC days.
                    Even before formally diving into web development, I had
                    foundational knowledge in HTML, C, and basic JavaScript.
                  </p>
                  <h2 className="text-[1.5rem] font-bold text-[#DB06F9]">
                    Goals
                  </h2>
                  <p className="text-gray-600 text-[1rem] mt-2">
                    As I progressed, I discovered my love for creating dynamic,
                    responsive user interfaces and solving complex problems
                    through code. Soon, I plan to start learning Data Structures
                    and Algorithms (DSA) to sharpen my problem-solving skills
                    and aim to become a competitive programmer. With countless
                    dreams and a clear vision for the future, I am committed to
                    continuous growth and building impactful digital solutions.
                  </p>

                  <img
                    src="https://i.ibb.co.com/Gx5pzCs/Programmer-working-remotely-with-cat-by-his-side.png"
                    alt="animated_card"
                    className="w-[140px] mt-3 float-right"
                  />

                  {isHovering && (
                    <div
                      className="absolute inset-0 pointer-events-none blur-[50px]"
                      style={{
                        background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
