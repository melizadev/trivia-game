import HomeActions from "./HomeActions";
import HomeHeader from "./HomeHeader";
import useHome from "./hooks/useHome";
import Instructions from "./Instructions";
const Home = () => {
  const { onPlay, onInstructions, instructions } = useHome();

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 relative">
      <div className="w-full max-w-[800px] flex flex-col items-center text-center">
        <HomeHeader />
        <HomeActions
          onPlay={onPlay}
          onInstructions={onInstructions}
          instructions={instructions}
        />
        {instructions && <Instructions onInstructions={onInstructions} />}
      </div>
    </main>
  );
};

export default Home;
