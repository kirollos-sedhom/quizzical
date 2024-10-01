import React, { useState, useEffect } from 'react';
import Choice from './Choice';

export default function Question_and_Answers(props) {
    let { questionData, questionIndex, onAnswerSelect, isChecked } = props;
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);


    useEffect(() => {
        const answers = [...questionData.incorrect_answers, questionData.correct_answer];
        setShuffledAnswers(shuffleArray(answers));
    }, [questionData]);

    function shuffleArray(array) {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    function decodeHtmlEntities(text) {
      const textArea = document.createElement('textarea');
      textArea.innerHTML = text;
      return textArea.value;
  }
    function handleAnswerSelect(answer) {
        setSelectedAnswer(answer); // Update the local state
        onAnswerSelect(questionIndex, answer); // Notify the parent of the selected answer
        
        
    }

    return (
        <div className="QA">
            <p className="question">{decodeHtmlEntities(questionData.question)}</p>
            <ul className="answers">
                {shuffledAnswers.map((answer) => (
                    <Choice
                        key={answer}
                        value={decodeHtmlEntities(answer)}
                        correct={questionData.correct_answer === answer}
                        selected={selectedAnswer === answer}
                        onSelect={() => handleAnswerSelect(answer)}
                        isChecked={isChecked}
                    />
                ))}
            </ul>
            <hr />
        </div>
    );
}
