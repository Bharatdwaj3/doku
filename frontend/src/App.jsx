import { Bourgouise, Monarch, Navbar,User, Clergy} from './components/index';
import {Home, About, Community, Chrcts} from './pages/index';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/> }/>  
           <Route path='/monarchs' element={<Monarch/>}/>  
           <Route path='/clergy' element={<Clergy/>}/>  
           <Route path='/bourgouise' element={<Bourgouise/>}/>  
            <Route path='/char' element={<Chrcts/>}/>  
          <Route path='/community' element={<Community/>}/>            
          <Route path='/about' element={<About/>} />
          <Route path='/user' element={<User/>} />
          <Route/>  
        </Routes>
      </Router> 
    </>
  )
}

export default App
