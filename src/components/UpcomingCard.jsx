import { motion } from "framer-motion";
import { ArrowSvg } from "../assets/icons";
const UpcomingCard = ({ cardVariants }) => {
  return (
    <motion.div
      className=" group bg-pink-100 text-[#c33241] rounded-3xl p-8 w-[280px] h-[461px] flex flex-col items-center relative"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className=" arrow opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-[-20px] transition-all duration-500 ease-in-out">
        <p>Click me!</p>
        <ArrowSvg />
      </div>
      <div className="flex justify-center items-center ">
        <h2 className="text-4xl font-bold ghumaune tracking-tight ml-7 absolute left-[35px] top-[102px] ">
          Upcoming <br /> Courses
        </h2>
        <div className="text-sm  text-center flex pl-14 ml-8">
          <p className="text-lg font-bold ghumaune text-start ">
            Exciting new courses <br /> waiting to boost your skills.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-[200px] h-[138px] pt-8">
        <h2 className="text-[150px] tracking-tighter font-bold relative">
          05
          <span className="text-[54px] font-extrabold absolute top-[16px] left-[154px] transform transition-transform duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:translate-y-[10px]">
            +
          </span>
        </h2>
      </div>
    </motion.div>
  );
};

export default UpcomingCard;
