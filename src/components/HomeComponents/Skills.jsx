import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto bg-base-300 py-10">
      <div>
        <h1 className="text-4xl text-center text-gray-600 font-bold">
          My Skills
        </h1>
      </div>
      <Marquee pauseOnHover>
        <div className="flex space-x-20 mt-10">
          {/* Skill 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
              alt="html"
              className="w-16 h-16 object-contain"
            />
            <h2 className="mt-2 text-center">HTML</h2>
          </div>
          {/* Skill 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000"
              alt="css"
              className="w-16 h-16 object-contain"
            />
            <h2 className="mt-2 text-center">CSS</h2>
          </div>
          {/* Skill 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
              alt="Tailwind CSS"
              className="w-16 h-16 object-contain"
            />
            <h2 className="mt-2 text-center">Tailwind CSS</h2>
          </div>
          {/* Skill 4 */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
              alt="Javascript"
              className="w-16 h-16 object-contain"
            />
            <h2 className="mt-2 text-center">JavaScript</h2>
          </div>
          {/* Skill 5 */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"
              alt="React"
              className="w-16 h-16 object-contain"
            />
            <h2 className="mt-2 text-center">React</h2>
          </div>
          {/* Skill 6 */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
              alt="Firebase"
              className="w-16 h-16 object-contain"
            />
            <h2 className="mt-2 text-center">Firebase</h2>
          </div>
          {/* Skill 7 */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
              alt="Mongodb"
              className="w-16 h-16 object-contain"
            />
            <h2 className="mt-2 text-center">MongoDB</h2>
          </div>
          {/* Add more skills as needed */}
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
