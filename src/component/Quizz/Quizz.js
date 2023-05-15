import React, { useEffect, useState } from 'react';
import style from "./Quizz.module.css"

export default function Quizz() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=9')
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  function handleQuestion() {
    if (current === 9) {
      setCurrent(9);
    } else {
      setCurrent(current + 1);
    }
    if (current === 9) {
      setToggle(true);
    }
  }
  function handleSubmit() {
    setShowResult(true);
  }
  function handleRestart() {
    setShowResult(false);
    setCurrent(0);
    setToggle(false);
    setScore(0);
  }

  function handleIncorrect() {
    if (current === 9) {
      setCurrent(9);
    } else {
      setCurrent(current + 1);
    }
  }
  function handleCorrect() {
    if (score === 10) {
      setScore(10);
    } else {
      setScore(score + 1);
    }

    if (current === 9) {
      setCurrent(9);
    } else {
      setCurrent(current + 1);
    }
  }
  return (
    <div className={style.main}>
      <h1>Quizz App</h1>
      <div className={style.container}>
        {showResult ? (
          <>
            <h1>You Scored {score} out of 10</h1>
            <button onClick={handleRestart}>Restart</button>
          </>
        ) : (
          <>
            <h3>Question {current + 1}</h3>
            <h2> {data[current]?.question}</h2>
            <ol>
              <div onClick={handleIncorrect}>
                <li>{data[current]?.incorrect_answers[0]}</li>
                <li>{data[current]?.incorrect_answers[1]}</li>
                <li>{data[current]?.incorrect_answers[2]}</li>
              </div>
              <li onClick={handleCorrect}>{data[current]?.correct_answer}</li>
            </ol>
            {toggle ? (
              <button onClick={handleSubmit}>Submit</button>
            ) : (
              <button onClick={handleQuestion}>Next</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
