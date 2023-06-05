import Navbar from "./components/Navbar"
import NavbarTwo from "./components/NavbarTwo"
import React,{useEffect,useState} from "react"
import Newscard from "./components/Newscard"
import CardThread from "./components/CardThread"
import Footer from "./components/Footer"

function App() {
  const [news,setNews] = useState([])

  useEffect(()=>{
fetch('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=482e83f7824c9fc829b25a67a0237797')
.then(res=>res.json())
.then(data=>setNews(data.articles))
  },[])

  return (
    <div className="px-8">
    <Navbar/>
    <NavbarTwo/>
    <Newscard data={news}/>
    <CardThread data={news}/>
    <Footer />
   </div>
  )
}

export default App
