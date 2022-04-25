import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navibar from "./Navibar";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About";
import More from "./Pages/More"


function App() {

  return (
    <BrowserRouter>


      <Navibar />
      <div className="vh-100 bg-light">
        <Routes>
          <Route path='/' element={<Gallery />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/:id' element={<More />}></Route>
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App;
