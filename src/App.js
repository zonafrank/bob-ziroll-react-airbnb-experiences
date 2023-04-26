import "./App.css";
import CardSection from "./components/CardSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <CardSection cards={data} />
      </div>
    </div>
  );
}

export default App;
