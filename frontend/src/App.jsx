import { Navbar,} from './components/index';
import {Home, About, Community, Chrcts} from './pages/index';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


function App() {
  
  return (
    <>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/> }/>  
           <Route path='/characters' element={<Chrcts/>}/>  
          <Route path='/community' element={<Community/>}/>            
          <Route path='/about' element={<About/>} />
          <Route/>  
        </Routes>
      </Router> 
    </>
  )
}

export default App
