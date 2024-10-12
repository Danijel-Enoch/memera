import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { useLanguage } from "../contexts/LanguageContext";

const Menu: React.FC = () => {
	const { address } = useAccount();
	const { language, setLanguage } = useLanguage();

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

	return (
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
	);
};

export default Menu;
