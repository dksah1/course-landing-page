import { motion } from "framer-motion";
import { PenSvg, ReactSvg, ThumbSvg, VueSvg } from "../assets/icons";

const OngoingActive = () => {
  return (
    <>
      <div className="group ">
        <div className="flex justify-end ">
          <button className="mt-16 text-sm mb-6 mr-12 h-[22px] w-[161px] flex items-center">
            View all Courses{" "}
            <motion.span
              className="ml-2 text-2xl"
              animate={{
                x: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              →
            </motion.span>
          </button>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <div className="sm:h-[75px] sm:w-[75px] h-[40px] w-[40px]">
            <ReactSvg />
          </div>
          <ThumbSvg />
          <VueSvg />
          <PenSvg />
        </div>

        <div className="flex items-center w-[400px] ml-24 mb-8">
          {" "}
          <h2 className="text-[150px] tracking-tighter font-bold relative">
            10
            <span className="text-[54px]  font-extrabold absolute top-[20px] left-[150px] ">
              +
            </span>
          </h2>
          <div className="flex flex-col ml-12 mb-10">
            <p className="mt-2 text-lg font-semibold">Ongoing Courses</p>
            <div className="text-sm mt-1 flex-wrap">
              Currently happening-dont <br /> miss out on the action.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OngoingActive;
