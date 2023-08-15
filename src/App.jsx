import Header from "./components/header/Header"
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/companies";
import './App.css'
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        {/* <Hero /> */}
      </div>
      {/* <Companies />
      <Residencies/>
      <Value />
      <Contact />
      <GetStarted />
      <Footer /> */}
    </div>
  )
}

export default App;
