import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
