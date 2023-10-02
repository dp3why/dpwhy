import { motion } from "framer-motion";
import { animationStart, reveal } from "../../utils/animation";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col font-bold mb-30px pt-100px"
      >
        <span className="mt-9 mb-0 text-4xl text-orange-600 text-center items-center gap-10px">
          Revolutionize Business
        </span>
        <span className="text-lg uppercase   text-gray-500 ">
          with AI-Powered Digital Transformation
        </span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-8 px-8 max-w-md text-sm text-justify   "
      >
        Embrace the Latest Technology for a Revolutionary Digital Transformation
        Experience, Redefining the Business Landscape with AI-Powered
        Innovation.
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
