function NextButton({ dispatch, answer, index, questions }) {
  if (answer === null) return null;

  if (index < questions.length - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion", payload: 1 })}
      >
        Next
      </button>
    );
  }

  if (index === questions.length - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
  }
}
export default NextButton;
