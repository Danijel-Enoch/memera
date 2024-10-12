import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Tools from "./Pages/Tools";
import Menu from "./components/Menu";
import Beginners from "./Pages/Beginners";
import BeginnerExam from "./Pages/BeginnerExam";
import Intermediate from "./Pages/Intermediate";
import IntermediateExam from "./Pages/IntermediateExam";
import Pro from "./Pages/Pro";
import ProExam from "./Pages/ProExam";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { LanguageProvider } from "./contexts/LanguageContext";
import GetCertificatePage from "./Pages/getCertificatePage";

const config = getDefaultConfig({
	appName: "My RainbowKit App",
	projectId: "YOUR_PROJECT_ID",
	chains: [base],
	ssr: true // If your dApp uses server side rendering (SSR)
});

function App() {
	const location = useLocation();
	const queryClient = new QueryClient();

	return (
		<>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<RainbowKitProvider>
						<LanguageProvider>
							{location.pathname !== "/" && <Menu />}
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/courses" element={<Courses />} />
								<Route path="/tools" element={<Tools />} />
								<Route
									path="/beginners"
									element={<Beginners />}
								/>
								<Route
									path="/intermediate"
									element={<Intermediate />}
								/>
								<Route path="/pro" element={<Pro />} />
								<Route
									path="/beginner-exam"
									element={<BeginnerExam />}
								/>
								<Route
									path="/intermediate-exam"
									element={<IntermediateExam />}
								/>
								<Route path="/pro-exam" element={<ProExam />} />
								<Route
									path="/get-certified"
									element={<GetCertificatePage />}
								/>
								{/* Add other routes here */}
							</Routes>
						</LanguageProvider>
					</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</>
	);
}

export default App;
