import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";
import Clients from "./Sections/Clients"
import WorkExperience from './Sections/Experience.jsx';
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
    </main>
  );
}
export default App;
