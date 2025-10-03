# Sentient Quiz App

A modern, professional quiz application designed to test knowledge about the Sentient ecosystem. Features unique animations, immediate feedback, and a sleek pink gradient theme.

## Overview

The Sentient Quiz App randomly selects 5 questions from a pool of 65 comprehensive questions about the Sentient ecosystem. Users receive immediate visual feedback after each answer with smooth animations and can review their performance with detailed results at the end.

## Features

### Quiz Experience
- 5 randomly selected questions per session from 65 total questions
- Immediate animated feedback after each answer
- Progress indicator with animated dots showing completion
- Real-time score badge tracking
- Professional card-based UI with smooth animations
- Unique animations for:
  - Answer selection with slide effect
  - Correct answers with check icon animation
  - Wrong answers with shake effect and cross icon
  - Card entrance animations

### Results Screen
- Animated circular progress indicator showing percentage score
- Modern performance grading system:
  - Perfect (100%)
  - Excellent (80-99%)
  - Good (60-79%)
  - Fair (40-59%)
  - Keep Learning (0-39%)
- Statistics grid showing correct, wrong, and total answers
- Detailed answer review with:
  - Color-coded correct/wrong indicators
  - Question text
  - Comparison of user's answer vs correct answer (for wrong answers)
- Smooth entrance animations for all elements
- Ability to retake with new random questions

### Topics Covered
- What is Sentient - Core purpose and contrast with traditional AI
- Mission - Democratizing AI development
- The GRID - Global network of compute and resources
- Artifacts - On-chain records of AI models, data, and code
- Architecture - Decentralized modular design
- Token Economy - SENT token roles and incentives
- Reps - Community governance representatives
- Builders - Developers and creators
- Stakers - Security and alignment
- Users - Ecosystem participants
- Openness and Utility - Sentient's collaborative approach

## Technologies Used

### Frontend Framework
- **React 18** - Component-based UI library
- **JSX** - JavaScript XML syntax

### Animation & UX
- **Framer Motion** - Animation library for smooth transitions
  - Screen transitions between start/quiz/results
  - Progress animations
  - Answer reveal animations
  - Circular progress indicator
- **CSS3** - Custom styling with gradients and responsive design

### Build Tools
- **Vite** - Fast development server with hot module replacement
- **npm** - Package management

### UI Components
- Progress bar with real-time updates
- Circular SVG progress indicator
- Scrollable answer review section
- Responsive design for mobile and desktop

## Installation

```bash
# Navigate to the project directory
cd sentient-quiz

# Install dependencies
npm install

# Start the development server
npm run dev
```

The quiz will be available at `http://localhost:5173`

## Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
sentient-quiz/
├── public/
│   └── sentient/
│       └── logo.jpg
├── src/
│   ├── components/
│   │   ├── Quiz.jsx
│   │   ├── Quiz.css
│   │   ├── Results.jsx
│   │   └── Results.css
│   ├── data/
│   │   └── questions.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

### Quiz Flow
1. **Start Screen** - Welcome screen with Sentient logo and start button
2. **Quiz Screen** - Sequential questions with immediate feedback
3. **Results Screen** - Final score with detailed review

### State Management
- React useState hooks for managing:
  - Current question index
  - Selected answers
  - Score calculation
  - User answer history
- Framer Motion AnimatePresence for screen transitions

### Scoring System
- Each correct answer adds 1 point
- Final score displayed as both raw score (e.g., 45/65) and percentage
- Performance grade assigned based on percentage
- Wrong answers highlighted in review with correct answers shown

## Customization

To modify the quiz:
- Edit questions in `src/data/questions.js`
- Adjust grading thresholds in `Results.jsx`
- Modify colors in CSS files
- Change animation timings in component files

## Browser Compatibility

Modern browsers with support for:
- ES6+ JavaScript
- CSS Grid and Flexbox
- SVG animations
- CSS Transforms and Transitions

## License

MIT

## Credits

Made with love by [@seyi_dev](https://x.com/seyi_dev)
