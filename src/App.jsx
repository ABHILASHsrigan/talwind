import { useState } from 'react';
import reactLogo from './assets/react.svg';

import Navbar from './componets/navbar.jsx';
import Hero from './componets/hero.jsx';
import Part1 from './componets/part1.jsx';
import Portfolio from './componets/portfolio.jsx';
import Blog from './componets/blog.jsx';
import Service from './componets/service.jsx';
import Clients from './componets/clients.jsx';
import Testimonials from './componets/Testimonials.jsx';
import ContactForm from './componets/form.jsx';
import Footer from './componets/footer.jsx';



function App() {
  

  return (
    <>

     <Navbar/>
     <Hero/>
     <Part1/>
     <Portfolio/>
     <Blog/>
     <Service/>
     <Clients/>
     <Testimonials/>
     <ContactForm/>
     <Footer/>
     
    </>
  )
}

export default App
