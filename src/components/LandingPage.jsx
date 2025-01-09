import { motion } from "framer-motion";
import { useState } from "react";
import AllCourseActive from "./AllCourseActive";
import AllCourse from "./AllCourse";
import UpcomingActive from "./UpcomingActive";
import UpcomingCard from "./UpcomingCard";
import OngoingActive from "./OngoingActive";
import OngoingCard from "./OngoingCard";

const LandingSection = () => {
  const [activeCard, setActiveCard] = useState("all");

  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white py-16 px-6 space-y-12">
      <div className="text-start ml-[20px]">
        <h2 className="text-lg font-medium text-gray-600">
          Explore our classes and master trending skills!
        </h2>
        <h1 className="text-4xl font-extrabold mt-2">
          Dive Into
          <span className="text-green-600">What&apos;s Hot Right Now!</span> 🔥
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center pl-5 gap-4">
        <motion.div
          className={`rounded-3xl p-8 h-[461px] ${
            activeCard === "all"
              ? "bg-[#c33241] text-white md:w-[592px] w-[300px] opacity-100"
              : "opacity-50"
          } flex items-center relative cursor-pointer transition-opacity duration-300`}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          onClick={() => handleCardClick("all")}
        >
          <div className="flex justify-between flex-col w-full gap-4">
            {activeCard === "all" ? (
              <AllCourseActive />
            ) : (
              <AllCourse cardVariants={cardVariants} />
            )}
          </div>
        </motion.div>

        <motion.div
          className={`rounded-3xl p-8 h-[461px] ${
            activeCard === "upcoming"
              ? "bg-[#c33241] text-white md:w-[592px] w-[300px] opacity-100"
              : "opacity-50"
          } flex items-center relative cursor-pointer transition-opacity duration-300`}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          onClick={() => handleCardClick("upcoming")}
        >
          <div className="flex justify-between flex-col w-full gap-4">
            {activeCard === "upcoming" ? (
              <UpcomingActive />
            ) : (
              <UpcomingCard cardVariants={cardVariants} />
            )}
          </div>
        </motion.div>

        <motion.div
          className={`rounded-3xl p-8 h-[461px] ${
            activeCard === "ongoing"
              ? "bg-[#c33241] text-white md:w-[592px] w-[300px] opacity-100"
              : "opacity-50"
          } flex items-center relative cursor-pointer transition-opacity duration-300`}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          onClick={() => handleCardClick("ongoing")}
        >
          <div className="flex justify-between flex-col w-full">
            {activeCard === "ongoing" ? (
              <OngoingActive />
            ) : (
              <OngoingCard cardVariants={cardVariants} />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingSection;
