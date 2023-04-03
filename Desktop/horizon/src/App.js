import Footer from "./components/Footer";
import Header from "./components/Header";
import Places from "./components/Places";
import Symbols from "./components/Symbols";
import Visit from "./components/Visit";


function App() {
  return (
    <div className="App">
      
        <Header />
        <div className="p-20">
        <Symbols />
        <Visit/>
        <Places />
        <Footer />

        </div>
     
      
    </div>
  );
}

export default App;
