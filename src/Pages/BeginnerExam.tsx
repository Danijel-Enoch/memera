import React, { useState } from "react";

interface Question {
	id: number;
	text: string;
	options: string[];
	correctAnswer: number;
}

const questions: Question[] = [
	{
		id: 1,
		text: "What is blockchain?",
		options: [
			"A type of cryptocurrency",
			"A decentralized digital ledger",
			"A centralized database",
			"A type of computer hardware"
		],
		correctAnswer: 1
	},
	{
		id: 2,
		text: "Which of the following is NOT a key feature of blockchain?",
		options: [
			"Decentralization",
			"Transparency",
			"Immutability",
			"Centralization"
		],
		correctAnswer: 3
	},
	{
		id: 3,
		text: "What was the first cryptocurrency?",
		options: ["Ethereum", "Litecoin", "Bitcoin", "Dogecoin"],
		correctAnswer: 2
	}
	// Add 17 more questions here following the same structure
	// ...
];

export default function BeginnerExam() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState<number[]>([]);
	const [showScore, setShowScore] = useState(false);

	const handleAnswerClick = (selectedAnswer: number) => {
		const newAnswers = [...userAnswers, selectedAnswer];
		setUserAnswers(newAnswers);

		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowScore(true);
		}
	};

	const calculateScore = () => {
		return userAnswers.reduce((score, answer, index) => {
			return questions[index].correctAnswer === answer
				? score + 1
				: score;
		}, 0);
	};

	const restartQuiz = () => {
		setCurrentQuestion(0);
		setUserAnswers([]);
		setShowScore(false);
	};

	if (showScore) {
		const score = calculateScore();
		return (
			<div className="container mx-auto px-4 py-8 text-center">
				<h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
				<p className="text-xl mb-4">
					Your score: {score} out of {questions.length}
				</p>
				<button
					onClick={restartQuiz}
					className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
				>
					Restart Quiz
				</button>
			</div>
		);
	}

	const question = questions[currentQuestion];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">
				Beginner's Blockchain Quiz
			</h1>
			<div className="bg-white shadow-md rounded-lg p-6">
				<h2 className="text-xl font-semibold mb-4">
					Question {currentQuestion + 1} of {questions.length}
				</h2>
				<p className="text-lg mb-4">{question.text}</p>
				<div className="space-y-2">
					{question.options.map((option, index) => (
						<button
							key={index}
							onClick={() => handleAnswerClick(index)}
							className="w-full text-left p-2 rounded bg-gray-100 hover:bg-gray-200"
						>
							{option}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
