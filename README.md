# CopilotQuiz: A Dynamic Quiz Application
 ## CopilotQuiz is a meticulously designed quiz application built with CopilotKit, a cutting-edge development toolkit. This project aims to provide users with an immersive and interactive quiz-taking experience while leveraging the power of CopilotKit's advanced features.

## Features
- Dynamic Quizzes: Create and take quizzes on a wide range of topics, from general knowledge to specific subjects.
- Adaptive Difficulty: CopilotQuiz intelligently adjusts question difficulty based on user performance, ensuring an optimal learning experience.
- Real-time Feedback: Receive instant feedback on quiz answers, with detailed explanations for each question.
- Multi-platform Support: Enjoy seamless quiz-taking across various devices, including desktops, tablets, and mobile phones.

## Add your OpenAI API key

Add your environment variables to `.env.local` in the root of the project.

```
OPENAI_API_KEY=your-api-key
```

## Install dependencies

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

## Open the demo

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The Copilot-Specific parts of the code:

1. Notice `<CopilotKit />` and `<CopilotPopup />` in `page.tsx`

2. Notice `useCopilotReadable` in `page.tsx`

3. Notice the 2 `useCopilotAction` in `page.tsx`
