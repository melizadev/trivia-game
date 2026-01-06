const HighScores = ({ highScores }) => {
  return (
    <div className="mt-2">
      <h3 className="font-bold text-lg mb-2 text-neutral-700 text-center">
        High Scores
      </h3>
      <table className="min-w-[200px] text-neutral-700 bg-white rounded">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Date</th>
            <th className="text-center">Points</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((score, index) => (
            <tr key={index}>
              <td className="text-center w-[20%]">{index + 1}</td>
              <td className="text-center w-[60%]">{score.date}</td>
              <td className="text-center w-[20%]">{score.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScores;
