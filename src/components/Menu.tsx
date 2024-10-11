import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
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
			</div>
		</nav>
	);
};

export default Menu;
