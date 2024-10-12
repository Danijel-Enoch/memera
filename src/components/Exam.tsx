import React, { useState } from "react";
import { saveExamResult } from "../utils/localStorage";
import { useLanguage } from "../contexts/LanguageContext";

interface Question {
	id: number;
	text: {
		en: string;
		sw: string;
		es: string;
		hi: string;
	};
	options: {
		en: string[];
		sw: string[];
		es: string[];
		hi: string[];
	};
	correctAnswer: number;
}

interface ExamProps {
	title: {
		en: string;
		sw: string;
		es: string;
		hi: string;
	};
	questions: Question[];
	examType: string;
}

const Exam: React.FC<ExamProps> = ({ title, questions, examType }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState<number[]>([]);
	const [showScore, setShowScore] = useState(false);
	const { language } = useLanguage();

	const handleAnswerClick = (selectedAnswer: number) => {
		const newAnswers = [...userAnswers, selectedAnswer];
		setUserAnswers(newAnswers);

		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowScore(true);
			const score = calculateScore();
			saveExamResult({
				examType,
				score,
				totalQuestions: questions.length,
				date: new Date().toISOString()
			});
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
			<h1 className="text-3xl font-bold mb-6">{title[language]}</h1>
			<div className="bg-white shadow-md rounded-lg p-6">
				<h2 className="text-xl font-semibold mb-4">
					Question {currentQuestion + 1} of {questions.length}
				</h2>
				<p className="text-lg mb-4">{question.text[language]}</p>
				<div className="space-y-2">
					{question.options[language].map((option, index) => (
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
};

export default Exam;
