import React, { useEffect, useState } from "react";
import Question_and_Answers from "./Question_and_Answers";

export default function Quiz() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState({}); // Object to track selected answers for each question
    const [score, setScore] = useState(0);
    const [isChecked, setIsChecked] = useState(false); // Track if the answers have been checked

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.results);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    function handleAnswerSelect(questionIndex, answer) {
      
        setSelectedAnswers(prev => ({
            ...prev,
            [questionIndex]: answer // Store the selected answer for each question
        }));
        setIsChecked(false)
        
    }

    function checkAnswers() {
        let newScore = 0;
        data.forEach((question, index) => {
            if (selectedAnswers[index] === question.correct_answer) {
                newScore += 1; // Add 1 point for correct answers
            }
        });
        setScore(newScore);
        setIsChecked(true); // Mark that the answers are now checked
        

    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="Quiz">
            <img className="cloud yellow small" src="/homeScreenColor1.png" alt="yellow cloud" />
            {data.map((question, index) => (
                <Question_and_Answers
                    key={index}
                    questionData={question}
                    questionIndex={index}
                    onAnswerSelect={handleAnswerSelect} // Pass the callback to child
                    isChecked={isChecked}
                />
            ))}
            <button className="check_answers" onClick={checkAnswers}>Check Answers</button>
            {isChecked && <p className="score">You scored {score}/5 correct answers</p>}
            <img className="cloud blue small" src="/homeScreenColor2.png" alt="blue cloud" />
        </div>
    );
}
