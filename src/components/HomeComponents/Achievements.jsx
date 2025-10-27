import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch("/achievements.json")
      .then((res) => res.json())
      .then((data) => setAchievements(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto bg-base-300 py-10 mt-16 mb-10">
  <div>
    <h1 className="text-4xl font-bold text-gray-600 text-center mb-10">
      My Achievements
    </h1>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    {achievements.map((item) => (
      <div
        key={item.id}
        className="bg-base-200 shadow-xl p-6 rounded-lg cursor-pointer transform hover:-translate-y-2 hover:bg-[#00838d] transition-all duration-300 relative overflow-hidden group"
      >
        {/* Icon */}
        <div className="text-3xl mb-4">{item.icon}</div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
          {item.title}
        </h3>

        {/* Program / Course Name */}
        <p className="text-gray-600 font-medium mt-1 group-hover:text-white transition-colors duration-300">
          {item.program_name}
        </p>

        {/* Organization */}
        <p className="text-gray-500 mt-1 group-hover:text-white transition-colors duration-300">
          {item.organization}
        </p>

        {/* Year */}
        <p className="text-gray-400 mt-1 group-hover:text-white transition-colors duration-300">
          {item.year}
        </p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Achievements;
