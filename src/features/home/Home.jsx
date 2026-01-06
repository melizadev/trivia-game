import home from "../../assets/home.avif";
import low from "../../assets/low.avif";
import Button from "../../components/ui/Button";
import useHome from "./useHome";
import ImageWithPlaceholder from "../../components/ui/ImageWithPlaceHolder";
import Instructions from "./Instructions";
import { motion } from "framer-motion";

const Home = () => {
  const { onPlay, setInstructions, instructions } = useHome();

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 relative">
      <div className="">
        <div className="w-full max-w-[800px] flex flex-col items-center text-center">
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
          {/*buttons with gap*/}
          <div className="flex gap-4">
            <Button onClick={() => setInstructions(!instructions)}>
              instructions
            </Button>
            <Button onClick={onPlay}>Play</Button>
          </div>
          {instructions && <Instructions setInstructions={setInstructions} />}
        </div>
      </div>
    </main>
  );
};

export default Home;
