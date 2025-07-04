
import './App.css'
import About from './Componenets/About'
import Hero from './Componenets/Hero'
import Navbar from './Componenets/Navbar'
import Pricing from './Componenets/Pricing'
import Services from './Componenets/Services'
import Testimonials from './Componenets/Testimonials'

function App() {
  
  return (
    <>
<div className='font-primary overflow-x-hidden'>
  <Navbar/>
  
  <Hero/>
  <Services/>
  <About/>
  <Pricing/>
  <Testimonials/>
 
  </div>  

  </>
  
      
  ) 
}

export default App
