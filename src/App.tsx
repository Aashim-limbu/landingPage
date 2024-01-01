import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./App.css"
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Acheivement from "./components/Acheivement";
import Categories from "./components/Categories";
import FeedBack from "./components/FeedBack";
import Qta from "./components/Qta";
function App() {
	return (
        <div>
            <NavBar/>
            <Hero/>
            <Companies/>
            <Courses/>
            <Acheivement/>
            <Categories/>
            <FeedBack/>
            <Qta/>
        </div>
	);
}

export default App;
