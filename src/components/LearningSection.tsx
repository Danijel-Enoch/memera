import React from "react";

interface ContentItem {
	title: string;
	description: string;
}

interface LearningSectionProps {
	title: string;
	content: ContentItem[];
}

const LearningSection: React.FC<LearningSectionProps> = ({
	title,
	content
}) => {
	return (
		<section className="mb-8">
			<h2 className="text-2xl font-semibold mb-4">{title}</h2>
			{content.map((item, index) => (
				<div
					key={index}
					className="bg-white shadow-md rounded-lg p-6 mb-6 last:mb-0"
				>
					<h3 className="text-xl font-semibold mb-3">{item.title}</h3>
					<p className="text-gray-700">{item.description}</p>
				</div>
			))}
		</section>
	);
};

export default LearningSection;
