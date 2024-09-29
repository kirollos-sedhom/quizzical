export default function Home(props) {
    return (
        <div className="homeScreen">
            <img className="cloud yellow" src="/homeScreenColor1.png" alt="yellow cloud" />
            <h1>Quizzical</h1>
            <p>The Ultimate Trivia Test</p>
            <button onClick={props.startQuiz}>Start Quiz</button>
            <img className="cloud blue" src="/homeScreenColor2.png" alt="blue cloud" />
        </div>
        
    )
}