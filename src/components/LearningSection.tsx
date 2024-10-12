import React, { useEffect } from "react";
import { saveProgress, getProgress } from "../utils/localStorage";
import { useLanguage } from "../contexts/LanguageContext";

interface ContentItem {
	title: {
		en: string;
		sw: string;
		es: string;
		hi: string;
	};
	description: {
		en: string;
		sw: string;
		es: string;
		hi: string;
	};
}

interface LearningSectionProps {
	title: {
		en: string;
		sw: string;
		es: string;
		hi: string;
	};
	content: ContentItem[];
	courseName: string;
	sectionIndex: number;
}

const LearningSection: React.FC<LearningSectionProps> = ({
	title,
	content,
	courseName,
	sectionIndex
}) => {
	const { language } = useLanguage();

	useEffect(() => {
		const progress = getProgress();
		if (progress[courseName] < sectionIndex) {
			saveProgress(courseName, sectionIndex);
		}
	}, [courseName, sectionIndex]);

	return (
		<section className="mb-8">
			<h2 className="text-2xl font-semibold mb-4">{title[language]}</h2>
			{content.map((item, index) => (
				<div
					key={index}
					className="bg-white shadow-md rounded-lg p-6 mb-6 last:mb-0"
				>
					<h3 className="text-xl font-semibold mb-3">
						{item.title[language]}
					</h3>
					<p className="text-gray-700">
						{item.description[language]}
					</p>
				</div>
			))}
		</section>
	);
};

export default LearningSection;
