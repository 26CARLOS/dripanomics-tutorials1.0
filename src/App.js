import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/conatct";
import About from "./pages/about";
import Tutors from "./pages/tutors";
import Footer from "./components/footer";
import{Route, Routes} from "react-router-dom";
import Modules from "./pages/modules";
import Faqs from "./pages/faqs";
import GetTutor from "./pages/getTutor";



function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/tutors" element={<Tutors/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/modules' element={<Modules/>} />
          <Route path='/faqs' element={<Faqs/>} />
          <Route path='/gettutor' element={<GetTutor/>} />        
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
