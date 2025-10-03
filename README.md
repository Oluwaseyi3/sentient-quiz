# Sentient Quiz App

A modern quiz application featuring dynamic question selection, animated feedback, and comprehensive performance tracking. Built with React and Framer Motion to test knowledge about the Sentient ecosystem.

## Overview

The Sentient Quiz App randomly selects 5 questions from a curated pool of 65 questions covering all aspects of the Sentient ecosystem. The application provides immediate visual feedback with sophisticated animations and delivers detailed performance analytics upon completion.

## Features

### Quiz Mechanics
- Random selection of 5 questions per session from 65-question database
- Immediate animated feedback for each answer
- Animated progress indicator with dot-based completion tracking
- Real-time score tracking with glassmorphism badge
- Card-based answer interface with letter-labeled options (A, B, C, D)
- Session-based randomization ensures varied gameplay

### Answer Feedback Animations
- **Selection State**: Slide-in effect and color highlight on selection
- **Correct Answers**: Rotating check icon (✓) with spring animation
- **Wrong Answers**: Shake animation with rotating cross icon (✕)
- **Card Entrance**: Staggered fade-in animations for all options
- **Progress Dots**: Scale and color transitions on question completion

### Results Analytics
- Circular SVG progress indicator with animated stroke
- Performance grading system:
  - Perfect (100%)
  - Excellent (80-99%)
  - Good (60-79%)
  - Fair (40-59%)
  - Keep Learning (0-39%)
- Statistics grid displaying:
  - Correct answers count
  - Wrong answers count
  - Total questions
- Detailed answer review section with:
  - Color-coded status indicators
  - Question text display
  - Selected vs correct answer comparison (for incorrect responses)
- Sequential entrance animations for all result elements

### Question Coverage
- **Sentient Fundamentals**: Core purpose, mission, and contrast with traditional AI
- **Infrastructure**: The GRID - global network architecture
- **Data Layer**: Artifacts - on-chain AI model records
- **System Design**: Decentralized modular architecture
- **Economics**: SENT token roles, staking mechanisms, and incentive structures
- **Governance**: Reps - community representatives
- **Ecosystem Roles**: Builders, Stakers, and Users
- **Philosophy**: Openness, transparency, and collaborative AI development

## Technologies Used

### Frontend Framework
- **React 18** - Component-based UI architecture
- **JSX** - Declarative component syntax
- **React Hooks** - useState, useEffect for state management

### Animation & UX
- **Framer Motion** - Production-ready animation library
  - AnimatePresence for screen transitions
  - Motion components for micro-interactions
  - Spring physics for natural movement
  - SVG path animations for progress indicators
- **CSS3** - Advanced styling features
  - Glassmorphism with backdrop-filter
  - CSS Grid and Flexbox layouts
  - Keyframe animations for shake effects
  - CSS transforms and transitions

### Build Tools
- **Vite** - Fast development server with HMR (Hot Module Replacement)
- **npm** - Package management and dependency resolution

### Design Patterns
- Component composition for reusable UI elements
- Controlled components for form state
- Conditional rendering for dynamic UI states
- Props-based communication between components

## Installation

```bash
# Navigate to the project directory
cd sentient-quiz

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

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
│   │   ├── Quiz.jsx           # Main quiz component
│   │   ├── Quiz.css           # Quiz styling
│   │   ├── Results.jsx        # Results screen component
│   │   └── Results.css        # Results styling
│   ├── data/
│   │   └── questions.js       # 65 Sentient questions
│   ├── App.jsx                # Main application component
│   ├── App.css                # Global application styles
│   ├── main.jsx               # Application entry point
│   └── index.css              # Base styles and resets
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── .gitignore                 # Git ignore rules
```

## Development

### State Management
The application uses React's built-in hooks for state management:
- **Quiz.jsx**: Manages current question index, selected answers, score, and feedback state
- **App.jsx**: Orchestrates quiz state (start, quiz, results) and score persistence
- **Results.jsx**: Receives and displays final score and answer history

### Component Architecture
- **App Component**: Top-level state management and screen routing
- **Quiz Component**: Question display, answer handling, and progress tracking
- **Results Component**: Performance analytics and answer review

### Animation Strategy
Framer Motion animations are applied at multiple layers:
1. Screen-level transitions using AnimatePresence
2. Component entrance animations with staggered delays
3. Interactive micro-animations on user actions
4. SVG path animations for visual feedback

### Randomization
Questions are randomized using array shuffling with Fisher-Yates algorithm:
```javascript
const shuffled = [...sentientQuestions].sort(() => Math.random() - 0.5)
const selected = shuffled.slice(0, 5)
```

## Browser Compatibility

Modern browsers with support for:
- ES6+ JavaScript (arrow functions, destructuring, spread operator)
- CSS Grid and Flexbox
- CSS backdrop-filter (for glassmorphism effects)
- SVG animations
- CSS transforms and transitions

## Customization

### Modifying Question Pool
Edit `src/data/questions.js` to add, remove, or modify questions.

### Adjusting Question Count
Change the slice parameter in `Quiz.jsx`:
```javascript
setQuestions(shuffled.slice(0, 5)) // Change 5 to desired count
```

### Updating Grade Thresholds
Modify the grading logic in `Results.jsx`:
```javascript
if (percentage >= 80) { grade = 'Excellent' }
```

### Customizing Colors
Update the pink gradient theme in `index.css` and component CSS files.

## License

MIT

## Credits

Made with love by [@seyi_dev](https://x.com/seyi_dev)