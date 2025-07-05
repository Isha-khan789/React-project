import "./App.css";
import About from "./Componenets/About";
import Contact from "./Componenets/Contact";
import Hero from "./Componenets/Hero";
import Navbar from "./Componenets/Navbar";
import Pricing from "./Componenets/Pricing";
import Services from "./Componenets/Services";
import Testimonials from "./Componenets/Testimonials";
import Workind_step from "./Componenets/Working_step";

function App() {
  return (
    <>
      <div className="font-primary overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <About />
         <Workind_step />
        <Pricing />
        <Testimonials />
        <Contact/>
       
      </div>
    </>
  );
}

export default App;
