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

function App() {
	const location = useLocation();

	return (
		<>
			{location.pathname !== "/" && <Menu />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/tools" element={<Tools />} />
				<Route path="/beginners" element={<Beginners />} />
				<Route path="/intermediate" element={<Intermediate />} />
				<Route path="/pro" element={<Pro />} />
				<Route path="/beginner-exam" element={<BeginnerExam />} />
				<Route
					path="/intermediate-exam"
					element={<IntermediateExam />}
				/>
				<Route path="/pro-exam" element={<ProExam />} />
				{/* Add other routes here */}
			</Routes>
		</>
	);
}

export default App;
