import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./App.css"
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Acheivement from "./components/Acheivement";
function App() {
	return (
        <div>
            <NavBar/>
            <Hero/>
            <Companies/>
            <Courses/>
            <Acheivement/>
        </div>
	);
}

export default App;
