
import "./App.css";
import "./index.css";
import Hero from "./Components/Hero";
import Resume from "./Components/Resume";
import Education from "./Components/Education";


function App() {
  return (
    <div className="App container w-full h-full bg-gray-900 flex flex-col items-center">
      <Hero />
      <Resume />
      <Education />
    </div>
  );
}

export default App;
