import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Space from "./components/Space";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portofolio from "./pages/Portofolio";
import Education from "./pages/Education";
import Footer from "./pages/Footer";

function App() {
  return (
    <div
      className={
        "bg-[#000000] flex flex-col items-start justify-start relative overflow-hidden "
      }
    >
      <Navbar />
      <Home />
      <Space />
      <About />
      <Space />
      <Skills />
      <Space />
      <Portofolio />
      <Space />
      <Education />
      <Space />
      <Footer />
    </div>
  );
}

export default App;
