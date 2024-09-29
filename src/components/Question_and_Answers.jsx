import React from 'react'
import Choice from './Choice';
export default function Question_and_Answers(props){

    function decodeHtmlEntities(text) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }
    function shuffleArray(array) {
        // Create a copy of the array to avoid mutating the original one
        let shuffledArray = array.slice();
      
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          // Generate a random index between 0 and i (inclusive)
          const j = Math.floor(Math.random() * (i + 1));
      
          // Swap the elements at index i and j
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray;
      }

      const questionData = props.questionData
      const questionText = questionData.question
      const answers = questionData.incorrect_answers
      const correct_answer = questionData.correct_answer
      answers.push(correct_answer)
      const shuffledAnswers = shuffleArray(answers)
    return (
    <div className="QA">
        <p className="question">{decodeHtmlEntities(questionText)}</p>
        <ul className="answers">
            {shuffledAnswers.map(answer=>{
                return (
                    // for each answer, i return a <Choice> component, with a prop that tells me if it is the correct answer. the choice should change color if selected
                    <Choice value={decodeHtmlEntities(answer)} correct={correct_answer == answer} selected={false} />
                )
            })}
        </ul>
        <hr />
    </div>
  )
}
