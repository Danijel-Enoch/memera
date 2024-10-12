export default function Tools() {
	const tradingTools = [
		"Call channels",
		"Degen trading bot",
		"Degen trading Website",
		"Adult Security bots",
		"Private call channels",
		"ASK AI"
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Tools</h1>
			<div className="max-w-md mx-auto">
				<div className="border border-gray-300 rounded-lg p-4">
					<div className="bg-gray-100 rounded-lg p-3 mb-4">
						<button className="w-full text-left text-blue-600">
							Check out Our Trading Tools
						</button>
					</div>
					<div className="bg-white border border-gray-300 rounded-lg p-3">
						<h3 className="font-semibold mb-2">Trading Tools</h3>
						<ul className="space-y-2">
							{tradingTools.map((tool, index) => (
								<li key={index}>{tool}</li>
							))}
						</ul>
						<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
							Free
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
