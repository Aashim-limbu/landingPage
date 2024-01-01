import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./App.css"
import Companies from "./components/Companies";
import Courses from "./components/Courses";
function App() {
	return (
        <div>
            <NavBar/>
            <Hero/>
            <Companies/>
            <Courses/>
        </div>
	);
}

export default App;
