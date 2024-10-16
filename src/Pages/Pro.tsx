import { Link } from "react-router-dom";
import LearningSection from "../components/LearningSection";

interface Section {
	title: string;
	content: { title: string; description: string }[];
}

const proContent: Section[] = [
	{
		title: "Introduction to Blockchain Technology",
		content: [
			{
				title: "What is blockchain?",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			},
			{
				title: "How does it work?",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			},
			{
				title: "Key Features: decentralization, transparency, immutability",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			}
		]
	},
	{
		title: "Understanding Cryptocurrencies",
		content: [
			{
				title: "What are cryptocurrencies?",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			},
			{
				title: "How are cryptocurrencies created?",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			},
			{
				title: "Bitcoin: The first cryptocurrency",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			},
			{
				title: "Different types of cryptocurrencies (major coins vs altcoins)",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			}
		]
	},
	{
		title: "Basics of Crypto Wallets and Exchanges",
		content: [
			{
				title: "Types of crypto wallets",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			},
			{
				title: "How to set up a wallet",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			},
			{
				title: "Introduction to cryptocurrency exchanges",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sollicitudin sem vel sed ipsum."
			}
		]
	}
];

export default function Pro() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Intermediate</h1>

			{proContent.map((section, index) => (
				<LearningSection
					key={index}
					title={{
						en: section.title,
						sw: section.title,
						es: section.title,
						hi: section.title
					}}
					content={section.content.map((item) => ({
						title: {
							en: item.title,
							sw: item.title,
							es: item.title,
							hi: item.title
						},
						description: {
							en: item.description,
							sw: item.description,
							es: item.description,
							hi: item.description
						}
					}))}
					courseName={"pro"}
					sectionIndex={index}
				/>
			))}

			<div className="mt-12 text-center">
				<Link
					to="/pro-exam"
					className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
				>
					Go to Exam
				</Link>
			</div>
		</div>
	);
}
