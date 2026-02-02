import Reset from "./Reset";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100);

  let text;

  if (percentage >= 80) text = "Great job!";
  else if (percentage >= 60) text = "Nice work!";
  else if (percentage >= 40) text = "You passed!";
  else text = "Better luck next time!";

  return (
    <div className="finish-screen">
      <p className="result">{text}</p>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} points (
        {percentage}%).
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <Reset dispatch={dispatch} />
    </div>
  );
}

export default FinishScreen;
