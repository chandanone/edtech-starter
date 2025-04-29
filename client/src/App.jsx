import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Appbar from './components/Appbar'

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> 
    </div>

  )
}

export default App
