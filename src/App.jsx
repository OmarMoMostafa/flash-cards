import Card from "./Card";

const questions = [
  {
    question: "how are you",
    answer: "fine thanks",
  },
  {
    question: "how old are you",
    answer: "20",
  },
  {
    question: "what's your name",
    answer: "John Doe",
  },
  {
    question: "can you swim",
    answer: "no I can't",
  },
  {
    question: "are you hhhh",
    answer: "Yes I am",
  },
];

function App() {
  return (
    <div className="container">
      {questions.map((q) => (
        <Card question={q} key={q.question} />
      ))}
    </div>
  );
}

export default App;
