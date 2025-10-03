import { motion } from 'framer-motion'
import './Results.css'

function Results({ score, answers, onRetake }) {
  const totalQuestions = 5
  const percentage = ((score / totalQuestions) * 100).toFixed(0)
  
  let grade = ''
  let message = ''
  
  if (percentage == 100) {
    grade = 'Perfect'
    message = 'Flawless! You have mastered the Sentient ecosystem!'
  } else if (percentage >= 80) {
    grade = 'Excellent'
    message = 'Great job! You have a strong understanding of Sentient.'
  } else if (percentage >= 60) {
    grade = 'Good'
    message = 'Well done! You have a solid grasp of the basics.'
  } else if (percentage >= 40) {
    grade = 'Fair'
    message = 'Not bad! Keep learning about the Sentient ecosystem.'
  } else {
    grade = 'Keep Learning'
    message = 'Keep studying! There is much more to discover about Sentient.'
  }

  return (
    <motion.div
      className="results-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="results-card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Quiz Complete
        </motion.h1>
        
        <div className="results-summary">
          <motion.div
            className="score-display"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
          >
            <div className="score-circle">
              <svg viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="12"
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="white"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={534.07}
                  initial={{ strokeDashoffset: 534.07 }}
                  animate={{ strokeDashoffset: 534.07 - (534.07 * percentage) / 100 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                  transform="rotate(-90 100 100)"
                />
              </svg>
              <div className="score-content">
                <motion.div
                  className="percentage"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                >
                  {percentage}%
                </motion.div>
                <div className="grade-badge">{grade}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="stats-grid"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="stat-item">
              <div className="stat-value">{score}</div>
              <div className="stat-label">Correct</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{totalQuestions - score}</div>
              <div className="stat-label">Wrong</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{totalQuestions}</div>
              <div className="stat-label">Total</div>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="result-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {message}
        </motion.p>

        <motion.button
          className="retake-button"
          onClick={onRetake}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Try Again
        </motion.button>

        <div className="review-section">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Answer Review
          </motion.h2>
          <div className="review-list">
            {answers.map((answer, index) => (
              <motion.div
                key={index}
                className={`review-item ${answer.isCorrect ? 'review-correct' : 'review-wrong'}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <div className="review-header">
                  <span className="review-number">#{index + 1}</span>
                  <span className={`review-status ${answer.isCorrect ? 'status-correct' : 'status-wrong'}`}>
                    {answer.isCorrect ? 'Correct' : 'Wrong'}
                  </span>
                </div>
                <p className="review-question">{answer.question}</p>
                {!answer.isCorrect && (
                  <div className="review-answers">
                    <div className="review-answer wrong-answer">
                      <span className="answer-label">Your Answer:</span>
                      <span className="answer-value">{answer.selectedAnswer}</span>
                    </div>
                    <div className="review-answer correct-answer">
                      <span className="answer-label">Correct Answer:</span>
                      <span className="answer-value">{answer.correctAnswer}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Results