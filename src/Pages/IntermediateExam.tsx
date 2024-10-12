import Exam from "../components/Exam";

const intermediateQuestions = [
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
	// Define intermediate-level questions here
];

export default function IntermediateExam() {
	return (
		<Exam
			title="Intermediate Blockchain Quiz"
			questions={intermediateQuestions}
		/>
	);
}
