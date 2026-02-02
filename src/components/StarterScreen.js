function StarterScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the Quiz App!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StarterScreen;
