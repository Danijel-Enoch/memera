import {
	useChainId,
	usePublicClient,
	useAccount,
	useWriteContract,
	useClient
} from "wagmi";
import { createCollectorClient } from "@zoralabs/protocol-sdk";
import { useEffect } from "react";
function GetCertificatePage() {
	const { address } = useAccount();
	const client = useClient();
	const chainId = useChainId();
	const publicClient = usePublicClient();
	const collectorClient = createCollectorClient({
		chainId,
		publicClient: publicClient as any
	});
	const { writeContract, isSuccess, isError } = useWriteContract();

	const mintCertificate = async (
		certificateType: "beginner" | "intermediate" | "pro"
	) => {
		try {
			if (!address) {
				throw new Error("No wallet connected");
			} else {
				const { parameters } = await collectorClient.mint({
					// collection address to mint
					tokenContract: "0x1e1d46e01899e541a329d1ff391922767ab01801",
					// quantity of tokens to mint
					quantityToMint: 1,
					minterAccount: address,
					tokenId:
						certificateType === "beginner"
							? 1
							: certificateType === "intermediate"
							? 2
							: 3,
					// can be set to 1155, 721, or premint
					mintType: "1155"
				});

				writeContract(parameters);
			}
		} catch (error) {
			console.error("Failed to mint certificate:", error);
			alert("Minting failed!");
		}
	};
	useEffect(() => {
		if (isSuccess) {
			alert("Certificate minted successfully!");
		}
		if (isError) {
			alert("Minting failed!");
		}
	}, [isSuccess, isError]);

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
						src="https://res.cloudinary.com/dwdxlzwcs/image/upload/v1728750483/Memera_Academy_1_fcwnmm.jpg"
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
