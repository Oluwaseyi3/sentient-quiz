import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Quiz from './components/Quiz'
import Results from './components/Results'

function App() {
  const [quizState, setQuizState] = useState('start') // start, quiz, results
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const startQuiz = () => {
    setQuizState('quiz')
    setScore(0)
    setAnswers([])
  }

  const handleQuizComplete = (finalScore, userAnswers) => {
    setScore(finalScore)
    setAnswers(userAnswers)
    setQuizState('results')
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {quizState === 'start' && (
          <motion.div
            key="start"
            className="screen start-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="logo-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <img src="/logo.jpg" alt="Sentient Labs" className="logo" />
            </motion.div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Sentient Quiz
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="subtitle"
            >
              Test your knowledge about the Sentient ecosystem with 5 random questions
            </motion.p>
            <motion.button
              className="start-button"
              onClick={startQuiz}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Quiz
            </motion.button>
          </motion.div>
        )}

        {quizState === 'quiz' && (
          <Quiz
            key="quiz"
            onComplete={handleQuizComplete}
          />
        )}

        {quizState === 'results' && (
          <Results
            key="results"
            score={score}
            answers={answers}
            onRetake={startQuiz}
          />
        )}
      </AnimatePresence>
      
      <div className="footer">
        <p>Made with love by <a href="https://x.com/seyi_dev" target="_blank" rel="noopener noreferrer">@seyi_dev</a></p>
      </div>
    </div>
  )
}

export default App

