import React from "react";
import { Link } from "react-router-dom";

export default function Beginners() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Beginners</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					Introduction to Blockchain Technology
				</h2>

				<div className="bg-white shadow-md rounded-lg p-6 mb-6">
					<h3 className="text-xl font-semibold mb-3">
						What is blockchain?
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>

				<div className="bg-white shadow-md rounded-lg p-6 mb-6">
					<h3 className="text-xl font-semibold mb-3">
						How does it work?
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>

				<div className="bg-white shadow-md rounded-lg p-6">
					<h3 className="text-xl font-semibold mb-3">
						Key Features: decentralization, transparency,
						immutability
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					Understanding Cryptocurrencies
				</h2>

				<div className="bg-white shadow-md rounded-lg p-6 mb-6">
					<h3 className="text-xl font-semibold mb-3">
						What are cryptocurrencies?
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>

				<div className="bg-white shadow-md rounded-lg p-6 mb-6">
					<h3 className="text-xl font-semibold mb-3">
						How are cryptocurrencies created?
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>

				<div className="bg-white shadow-md rounded-lg p-6 mb-6">
					<h3 className="text-xl font-semibold mb-3">
						Bitcoin: The first cryptocurrency
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>

				<div className="bg-white shadow-md rounded-lg p-6">
					<h3 className="text-xl font-semibold mb-3">
						Different types of cryptocurrencies (major coins vs
						altcoins)
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">
					Basics of Crypto Wallets and Exchanges
				</h2>

				<div className="bg-white shadow-md rounded-lg p-6 mb-6">
					<h3 className="text-xl font-semibold mb-3">
						Types of crypto wallets
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>

				<div className="bg-white shadow-md rounded-lg p-6 mb-6">
					<h3 className="text-xl font-semibold mb-3">
						How to set up a wallet
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>

				<div className="bg-white shadow-md rounded-lg p-6">
					<h3 className="text-xl font-semibold mb-3">
						Introduction to cryptocurrency exchanges
					</h3>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce vitae sollicitudin sem vel sed ipsum.
					</p>
				</div>
			</section>

			{/* New "Go to Exam" button */}
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
