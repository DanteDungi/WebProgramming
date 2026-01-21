import { useState } from 'react'
import './App.css'
import "tailwindcss";

const questions = [
    {
        text: "Which of the following best describes React?",
        answers: [
            "A library for controlling data bases",
            "A library for creating UI",
            "CSS Framework",
        ],
        correctAnswer: 1,
    },
    {
        text: "What is useState in React?",
        answers: [
            "A method for creating class components",
            "Hook for managing functional components",
            "Function for handling side effects",
        ],
        correctAnswer: 1,
    },
    {
        text: "What is the Virtual DOM in React?",
        answers: [
            "An API for manipulation of DOM elements",
            "A lightweight remresentation of the DOM, used for optimization",
            "Function for sever side rendering",
        ],
        correctAnswer: 1,
    },
    {
        text: "What is the difference between class and functional components in React?",
        answers: [
            "Functional components have state and Class comopnents do not",
            "Class components have state and Functional components do not",
            "Class comopnents are faster than Functional components",
        ],
        correctAnswer: 1,
    },
];

function App() {
    const [phase, setPhase] = useState("start");
    const [questionIndex, setQuestionIndex] = useState(0);

    const StartQuiz = () => {
        setPhase("question");
        setQuestionIndex(0);
    }
    
    const SwitchQuestion = () => {
        if (questionIndex < questions.length -1) {
            setQuestionIndex(questionIndex+1);
        } else {
            setPhase("end");
        }
    }

    const RestartQuiz = () => {
        setPhase("question");
        setQuestionIndex(0);
    }
    
    return (
        <>

            { phase === "start" && (
                <div className="flex justify-center items-center h-screen">
                    <button
                        className="w-100 h-30 rounded-lg border-4 border-white bg-indigo-800 text-white text-5xl font-bold"
                        onClick={StartQuiz}
                    >Start exam</button>
                </div>
            )}

            { phase === "question" && (
                <div className="flex flex-col justify-evenly items-center h-screen">
                    <h2 className="text-white text-3xl font-bold">Question {questionIndex + 1}: </h2>
                    <p className="text-white text-5xl font-bold">{`\n ${questions[questionIndex].text}`}</p>
                    <div className="flex justify-evenly w-screen">
                        {questions[questionIndex].answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={SwitchQuestion}
                        className="w-85 h-45 p-3 rounded-xl border-4 border-white bg-indigo-800 text-white text-2xl font-bold"
                    >{answer}</button>))}
                    </div>
                </div>
            )}

            { phase === "end" && (
                <div className="flex flex-col justify-evenly items-center h-screen">
                    <h1 className="text-white text-8xl font-bold">The test is over!</h1>
                    <button
                        className="w-100 h-30 rounded-lg border-4 border-white bg-indigo-800 text-white text-5xl font-bold"
                        onClick={RestartQuiz}
                    >Restart exam</button>
                </div>
            )}

        </>
    )
}

export default App
