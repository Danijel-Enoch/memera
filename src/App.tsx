import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Tools from "./Pages/Tools";
import Menu from "./components/Menu";
import Beginners from "./Pages/Beginners";
import BeginnerExam from "./Pages/BeginnerExam";

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
				<Route path="/beginner-exam" element={<BeginnerExam />} />
				{/* Add other routes here */}
			</Routes>
		</>
	);
}

export default App;
