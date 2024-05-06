import React from 'react'
import Quiz from  "react-quiz-component"

const QuizScreen = ({quiz}) => {
  return (
    <div>
        <Quiz quiz={quiz} shuffle={true} showDefaultResult={false} continueText="Next Question" />
    </div>
  )
}

export default [id]