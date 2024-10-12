function GetCertificatePage() {
	const mintCertificate = async (
		certificateType: "beginner" | "intermediate" | "pro"
	) => {
		try {
			alert(`${certificateType} certificate minted successfully!`);
		} catch (error) {
			console.error("Failed to mint certificate:", error);
			alert("Minting failed!");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-2xl font-bold mb-8">Mint Your Certificate</h1>
			<div className="flex flex-col md:flex-row items-center gap-8">
				{/* Beginner Certificate */}
				<div className="flex flex-col items-center gap-4">
					<img
						src="https://res.cloudinary.com/dwdxlzwcs/image/upload/v1728750479/Memera_Academy_h9mggj.jpg"
						alt="Beginner Certificate"
						className="w-60 h-auto"
					/>
					<button
						onClick={() => mintCertificate("beginner")}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
					>
						Mint Beginner Certificate
					</button>
				</div>

				{/* Intermediate Certificate */}
				<div className="flex flex-col items-center gap-4">
					<img
						src="https://res.cloudinary.com/dwdxlzwcs/image/upload/v1728750481/Memera_Academy_l0v8yt.png"
						alt="Intermediate Certificate"
						className="w-60 h-auto"
					/>
					<button
						onClick={() => mintCertificate("intermediate")}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
					>
						Mint Intermediate Certificate
					</button>
				</div>

				{/* Pro Certificate */}
				<div className="flex flex-col items-center gap-4">
					<img
						src="https://res.cloudinary.com/dwdxlzwcs/image/upload/v1728750481/Memera_Academy_l0v8yt.png"
						alt="Pro Certificate"
						className="w-60 h-auto"
					/>
					<button
						onClick={() => mintCertificate("pro")}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
					>
						Mint Pro Certificate
					</button>
				</div>
			</div>
		</div>
	);
}

export default GetCertificatePage;
