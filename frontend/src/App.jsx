import { Navbar } from './components/index';
import {Home, About, Community} from './pages/index';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/> }/>  
          <Route path='/about' element={<About/>} />
          <Route path='/community' element={<Community/>}/>  
          <Route/>  
        </Routes>
      </Router> 
    </>
  )
}

export default App
