import { motion } from "framer-motion";
import { PenSvg, ReactSvg, ThumbSvg, VueSvg } from "../assets/icons";

const UpcomingActive = () => {
  return (
    <>
      <div className="group">
        {/* Button section with arrow bounce animation */}
        <div className="flex justify-end">
          <button className="mt-16 text-sm mb-6 mr-12 h-[22px] w-[161px] flex items-center">
            View all Courses{" "}
            <motion.span
              className="ml-2 text-2xl"
              animate={{
                x: [0, 10, -10, 0], // Animate left-right
              }}
              transition={{
                duration: 2, // Slower bounce time
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              →
            </motion.span>
          </button>
        </div>

        {/* Icons section with equal gap distribution */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="sm:h-[75px] sm:w-[75px] h-[40px] w-[40px]">
            <ReactSvg />
          </div>
          <ThumbSvg />
          <VueSvg />
          <PenSvg />
        </div>

        {/* Content section with adjusted space */}
        <div className="flex items-center justify-center w-[400px] ml-24 mb-8">
          <h2 className="text-[150px] tracking-tighter font-bold relative">
            05
            <span className="text-[54px] font-extrabold absolute top-[16px] left-[158px]">
              +
            </span>
          </h2>
          <div className="flex flex-col ml-12 mb-10">
            <p className="mt-2 text-lg font-semibold">Upcoming Courses</p>
            <div className="text-sm mt-1 flex-wrap">
              Exciting new courses waiting to boost your skills.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingActive;
