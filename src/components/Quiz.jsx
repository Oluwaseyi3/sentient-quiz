import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import sentientQuestions from '../data/questions'
import './Quiz.css'

// Available Sentient images
const sentientImages = [
  '/G2Qmz45XQAAsT3Q.webp',
  '/G2QNst5akAA7hLO.webp',
  '/G2SqF7naQAAVKm2.webp',
  '/G2TdNvkbMAE7ZQc.webp',
  '/G2TyLrubMAYi3AM.webp',
  '/G2UZ3OBWQAAd65H.webp',
  '/G2UZf5MXEAA_dMC.webp',
  '/photo_2025-10-02_16-56-28.webp',
  '/sonbahar_dobby.webp'
]

function Quiz({ onComplete }) {
  const [questions, setQuestions] = useState([])
  const [questionImages, setQuestionImages] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  // Select 5 random questions on mount and assign images
  useEffect(() => {
    const shuffled = [...sentientQuestions].sort(() => Math.random() - 0.5)
    const selectedQuestions = shuffled.slice(0, 5)
    setQuestions(selectedQuestions)
    
    // Assign 4 random images to each question (one per option)
    const imagesForQuestions = selectedQuestions.map(() => {
      const shuffledImages = [...sentientImages].sort(() => Math.random() - 0.5)
      return shuffledImages.slice(0, 4)
    })
    setQuestionImages(imagesForQuestions)
  }, [])

  if (questions.length === 0) return null

  const question = questions[currentQuestion]
  const totalQuestions = 5

  const handleAnswer = (option) => {
    if (showFeedback) return // Prevent multiple clicks

    setSelectedAnswer(option)
    setShowFeedback(true)

    const isCorrect = option === question.answer
    const answerRecord = {
      questionIndex: currentQuestion,
      question: question.question,
      selectedAnswer: option,
      correctAnswer: question.answer,
      isCorrect
    }

    setUserAnswers([...userAnswers, answerRecord])

    if (isCorrect) {
      setScore(score + 1)
    }

    // Move to next question after 1.5 seconds
    setTimeout(() => {
      if (currentQuestion + 1 < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowFeedback(false)
      } else {
        // Quiz completed
        onComplete(isCorrect ? score + 1 : score, [...userAnswers, answerRecord])
      }
    }, 1500)
  }

  return (
    <motion.div
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="quiz-header">
        <div className="question-progress">
          {[...Array(totalQuestions)].map((_, index) => (
            <motion.div
              key={index}
              className={`progress-dot ${index < currentQuestion ? 'completed' : index === currentQuestion ? 'active' : 'upcoming'}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {index < currentQuestion && (
                <motion.div
                  className="check-mark"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="score-badge">
          <span className="score-label">Score</span>
          <span className="score-value">{score}/{totalQuestions}</span>
        </div>
      </div>

      <motion.div
        className="question-card"
        key={currentQuestion}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="question-number">Question {currentQuestion + 1}</div>
        <h3 className="question-text">{question.question}</h3>

        <div className="options-container">
          {question.options.map((option, index) => {
            const optionLetter = option.charAt(0)
            const isSelected = selectedAnswer === optionLetter
            const isCorrect = optionLetter === question.answer
            
            let className = 'option-card'
            if (isSelected && !showFeedback) className += ' selected'
            if (showFeedback && isCorrect) className += ' correct'
            if (showFeedback && isSelected && !isCorrect) className += ' wrong'

            return (
              <motion.div
                key={index}
                className={className}
                onClick={() => !showFeedback && handleAnswer(optionLetter)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={!showFeedback ? { scale: 1.02, x: 5 } : {}}
                whileTap={!showFeedback ? { scale: 0.98 } : {}}
              >
                <div className="option-content">
                  <div className="option-image-container">
                    <img 
                      src={questionImages[currentQuestion]?.[index]} 
                      alt={`Option ${optionLetter}`}
                      className="option-image"
                    />
                  </div>
                  <div className="option-info">
                    <div className="option-letter">{optionLetter}</div>
                    <div className="option-text">{option.substring(3)}</div>
                  </div>
                </div>
                {showFeedback && isCorrect && (
                  <motion.div
                    className="check-icon"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    ✓
                  </motion.div>
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <motion.div
                    className="cross-icon"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    ✕
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Quiz

