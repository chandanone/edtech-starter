import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Appbar from './components/Appbar'
import SignUp from './pages/SignUp'
import AddCourse from './pages/AddCourse'
import SignIn from './pages/SignIn'

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> 
    </div>

  )
}

export default App
