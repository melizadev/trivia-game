import Button from "../../components/ui/Button";

const HomeActions = ({ onPlay, onInstructions }) => {
  return (
    <>
      <div className="flex gap-4">
        <Button onClick={onInstructions}>instructions</Button>
        <Button onClick={onPlay}>Play</Button>
      </div>
    </>
  );
};

export default HomeActions;
