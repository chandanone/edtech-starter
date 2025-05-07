import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from './pages/SignUp'
import Landing from './pages/Landing'
import AppBar from './components/AppBar'
import Home from './pages/Home'
import Courses from './pages/Courses'
function App() {
 
  return (
    <div>        
        <BrowserRouter>
        <AppBar />
          <Routes>
             <Route path="/" element={<Landing />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/home" element={<Home />} />
             <Route path='/courses' element={<Courses />} />   
          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App
