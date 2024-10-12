import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
	const { language } = useLanguage();
	const [showDisclaimer, setShowDisclaimer] = useState(true);

	const disclaimerText = {
		en: "Disclaimer: The content provided is for educational purposes only and not financial advice.",
		sw: "Kanusho: Maudhui yanayotolewa ni kwa madhumuni ya kielimu pekee na sio ushauri wa kifedha.",
		es: "Descargo de responsabilidad: El contenido proporcionado es solo con fines educativos y no constituye asesoramiento financiero.",
		hi: "अस्वीकरण: प्रदान की गई सामग्री केवल शैक्षिक उद्देश्यों के लिए है और वित्तीय सलाह नहीं है।"
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			{showDisclaimer && (
				<div className="w-full bg-yellow-100 border-b border-yellow-200 px-4 py-2 mb-4">
					<div className="container mx-auto flex justify-between items-center">
						<p className="text-sm text-yellow-800">
							{disclaimerText[language]}
						</p>
						<button
							onClick={() => setShowDisclaimer(false)}
							className="text-yellow-800 hover:text-yellow-900"
						>
							&times;
						</button>
					</div>
				</div>
			)}
			<div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
				<h1 className="text-3xl font-bold text-center mb-6">
					Welcome to memera
				</h1>
				<p className="text-center text-gray-600 mb-8">
					the no 1 degen university on base
				</p>

				<div className="grid grid-cols-2 gap-4 mb-4">
					<Link to="/courses" className="btn">
						courses
					</Link>
					<Link to="/tools" className="btn">
						Tools
					</Link>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<Link to="/get-certified" className="btn">
						Get Certified
					</Link>
					<Link to="/materials" className="btn">
						materials
					</Link>
				</div>

				<Link to="/community" className="btn mt-4 w-full">
					community
				</Link>
			</div>
		</div>
	);
}
