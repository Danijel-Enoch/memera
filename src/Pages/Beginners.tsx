import { Link } from "react-router-dom";
import LearningSection from "../components/LearningSection";

interface Section {
	title: string;
	content: { title: string; description: string }[];
}

const beginnerContent: Section[] = [
	{
		title: "Introduction to Blockchain Technology",
		content: [
			{
				title: "What is blockchain?",
				description:
					"Blockchain is a decentralized digital ledger technology that records transactions across multiple computers. Unlike traditional centralized databases, blockchain ensures that the data cannot be altered retroactively without the alteration of all subsequent blocks, ensuring data integrity and security.\n"
			},
			{
				title: "How does it work?",
				description:
					"A blockchain consists of a series of blocks, each containing a list of transactions. These blocks are linked together using cryptographic hashes. When a new transaction occurs, it's verified by a network of nodes (computers) and added to a new block. This block is then added to the chain, making the transaction permanent and transparent."
			},
			{
				title: "Key Features: decentralization, transparency, immutability",
				description:
					"Decentralization: Eliminates the need for intermediaries, reducing costs and increasing efficiency.\n" +
					"Transparency: All participants can see all transactions, promoting trust and accountability.\n" +
					"Immutability: Once a transaction is recorded, it cannot be altered retroactively, ensuring data integrity and preventing tampering."
			}
		]
	},
	{
		title: "Understanding Cryptocurrencies",
		content: [
			{
				title: "What are cryptocurrencies?",
				description:
					"Cryptocurrencies are digital or virtual currencies that use cryptography for security. They operate on blockchain technology, enabling peer-to-peer transactions without the need for intermediaries like banks"
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

export default function Beginners() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Beginners</h1>

			{beginnerContent.map((section, index) => (
				<LearningSection
					key={index}
					title={{
						en: section.title,
						sw: section.title,
						es: section.title,
						hi: section.title
					}}
					content={section.content.map((item) => ({
						...item,
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
					courseName="beginners"
					sectionIndex={index}
				/>
			))}

			<div className="mt-12 text-center">
				<Link
					to="/beginner-exam"
					className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
				>
					Go to Exam
				</Link>
			</div>
		</div>
	);
}
