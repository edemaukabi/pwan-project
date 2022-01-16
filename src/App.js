
import React from 'react';
import { useEffect } from "react";
import ContactForm from "./Components/ContactForm";
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.body.appendChild(stylesheet);
    }
  }, []);

  return (
    
     <React.Fragment>
       <Header />
       <Content />
      <ContactForm />
       <Footer />
    </React.Fragment>
  );
}

export default App;
