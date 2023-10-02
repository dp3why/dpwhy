import ArrowRight from "./ArrowRight";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../../utils/animation";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
      >
        <motion.div variants={reveal}>
          <div className="flex flex-row font-semibold text-gray-800">
            <img src="/media/g.png" width={90} />
            DPWhy
          </div>
        </motion.div>
        <div className="flex gap-20px items-center <md:hidden">
          <motion.span variants={reveal} className="cursor-pointer">
            About
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            Courses
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            Resources
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            Contact
          </motion.span>
        </div>
        <motion.div
          variants={reveal}
          className="flex gap-5px items-center cursor-pointer"
        >
          <button className="mx-2 flex justify-end items-center">
            <p className="mb-3px">Sign Up</p>
            <ArrowRight />{" "}
          </button>
          <button className="mx-2  flex justify-end items-center">
            <p className="mb-3px">Sign In</p>
            <ArrowRight />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
