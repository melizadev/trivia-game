import { motion } from "framer-motion";
import ImageWithPlaceholder from "../../components/ui/ImageWithPlaceHolder";
import home from "../../assets/home.avif";
import low from "../../assets/low.avif";
const HomeHeader = () => {
  return (
    <>
      <h1 className="font-indie font-bold text-white text-3xl mb-6">
        My Little Pony Trivia
      </h1>
      {/*floating animation using framer motion*/}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-72 h-72 sm:w-80 sm:h-80 mb-8"
      >
        <ImageWithPlaceholder lowSrc={low} src={home} alt="Home" />
      </motion.div>
    </>
  );
};

export default HomeHeader;
