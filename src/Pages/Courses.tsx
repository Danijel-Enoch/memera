import React from "react";
import { Link } from "react-router-dom";

interface CourseLevel {
	title: string;
	topics: string[];
	link: string;
	price: string;
}

const courseLevels: CourseLevel[] = [
	{
		title: "Beginner",
		topics: [
			"Introduction to Blockchain Technology",
			"Understanding Cryptocurrencies",
			"Basics of Crypto Wallets and Exchanges",
			"Fundamental Analysis in Crypto",
			"Introduction to Risk Management"
		],
		link: "/beginners",
		price: "Free"
	},
	{
		title: "Intermediate",
		topics: [
			"Technical Analysis Basics",
			"Advanced Blockchain Concepts",
			"Cryptocurrency Tokenomics",
			"DeFi (Decentralized Finance) Basics",
			"Regulatory Landscape"
		],
		link: "/intermediate",
		price: "Free"
	},
	{
		title: "Pro",
		topics: [
			"Advanced Trading Strategies",
			"On-Chain Analysis",
			"Crypto Project Evaluation",
			"Risk Management Strategies for Traders",
			"Emerging Trends in Blockchain and Crypto"
		],
		link: "/pro",
		price: "Free"
	},
	{
		title: "Super Pro",
		topics: [
			"Advanced Trading Strategies",
			"On-Chain Analysis",
			"Crypto Project Evaluation",
			"Risk Management Strategies for Traders",
			"Emerging Trends in Blockchain and Crypto"
		],
		link: "/super-pro",
		price: "Free"
	}
];

const CourseCard: React.FC<CourseLevel> = ({ title, topics, link, price }) => (
	<div className="bg-white p-6 rounded-lg shadow-md">
		<h3 className="text-xl font-bold mb-4">{title}</h3>
		<ul className="mb-4">
			{topics.map((topic, index) => (
				<li key={index} className="mb-2">
					{topic}
				</li>
			))}
		</ul>
		<Link
			to={link}
			className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 w-full"
		>
			Get Started
		</Link>
		<p className="text-center">{price}</p>
	</div>
);

export default function Courses() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Courses</h1>
			<div className="mb-8">
				<input
					type="text"
					placeholder="Check out our Courses"
					className="w-full p-4 border border-gray-300 rounded-lg"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{courseLevels.map((level, index) => (
					<CourseCard key={index} {...level} />
				))}
			</div>
		</div>
	);
}
