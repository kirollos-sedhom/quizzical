import React, { useEffect, useState } from "react"
import Question_and_Answers from "./Question_and_Answers";


export default function Quiz()
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            // console.log("data is ", data)
            setData(data);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }, []);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
    return (
      // returned component is a quiz containing questions
        <div className="Quiz"> 
          <img className="cloud yellow small" src="/homeScreenColor1.png" alt="yellow cloud" />
          
            {
            // first i get the data (question and answers)
            data.results.map(
              Question_and_answers_pair=>{
                    return (
                      <Question_and_Answers questionData={Question_and_answers_pair} />
                    )
                }
            )}
            <button className="check_answers">check answers</button>
            <img className="cloud blue small" src="/homeScreenColor2.png" alt="blue cloud" />
        </div>
    )
}