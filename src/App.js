
import "./App.css";
import "./index.css";
import Hero from "./Components/Hero";
import Resume from "./Components/Resume";
import Education from "./Components/Education";
import Conributions from "./Components/Conributions";
import Awards from "./Components/Awards";


function App() {
  return (
    <div className="App m-0 w-full flex flex-col items-center">
      <Hero />
      <Resume />
      <Education />
      <Conributions />
      <Awards />
    </div>
  );
}

export default App;
