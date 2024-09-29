import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'

function App() {
  const [isHome, setIsHome] = useState(true)
  function startQuiz() {
    setIsHome(false)
  }
  return (
    <div>
      {isHome && <Home startQuiz={startQuiz} />}
      
      {!isHome && <Quiz />}
    </div>
  )
}

export default App
