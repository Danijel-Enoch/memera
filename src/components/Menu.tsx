import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { useLanguage } from "../contexts/LanguageContext";

const Menu: React.FC = () => {
	const { address } = useAccount();
	const { language, setLanguage } = useLanguage();
	const [showDisclaimer, setShowDisclaimer] = useState(true);

	useEffect(() => {
		if (address) {
			localStorage.setItem("userWalletAddress", address);
		} else {
			localStorage.removeItem("userWalletAddress");
		}
	}, [address]);

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value as "en" | "sw" | "es" | "hi");
	};

	const disclaimerText = {
		en: "Disclaimer: The content provided is for educational purposes only and not financial advice.",
		sw: "Kanusho: Maudhui yanayotolewa ni kwa madhumuni ya kielimu pekee na sio ushauri wa kifedha.",
		es: "Descargo de responsabilidad: El contenido proporcionado es solo con fines educativos y no constituye asesoramiento financiero.",
		hi: "अस्वीकरण: प्रदान की गई सामग्री केवल शैक्षिक उद्देश्यों के लिए है और वित्तीय सलाह नहीं है।"
	};

	return (
		<>
			{showDisclaimer && (
				<div className="bg-yellow-100 border-b border-yellow-200 px-4 py-2">
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
			<nav className="bg-gray-800 p-4">
				<div className="container mx-auto flex justify-between items-center">
					<Link to="/" className="text-white text-xl font-bold">
						memera
					</Link>
					<div className="space-x-4">
						<Link
							to="/courses"
							className="text-white hover:text-gray-300"
						>
							Courses
						</Link>
						<Link
							to="/tools"
							className="text-white hover:text-gray-300"
						>
							Tools
						</Link>
						<Link
							to="/get-certified"
							className="text-white hover:text-gray-300"
						>
							Get Certified
						</Link>
						<Link
							to="/materials"
							className="text-white hover:text-gray-300"
						>
							Materials
						</Link>
						<Link
							to="/community"
							className="text-white hover:text-gray-300"
						>
							Community
						</Link>
					</div>
					<div className="flex items-center space-x-4">
						<select
							value={language}
							onChange={handleLanguageChange}
							className="bg-gray-700 text-white px-2 py-1 rounded"
						>
							<option value="en">English</option>
							<option value="sw">Swahili</option>
							<option value="es">Spanish</option>
							<option value="hi">Hindi</option>
						</select>
						<ConnectButton />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Menu;
