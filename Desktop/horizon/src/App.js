import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import TypesPizza from "./components/TypesPizza";

function App() {
  return (
    <div className="">
     <Navbar />
     <Carousel/>
     <About/>
     <TypesPizza/>
     <Footer/>
      
    </div>
  );
}

export default App;
