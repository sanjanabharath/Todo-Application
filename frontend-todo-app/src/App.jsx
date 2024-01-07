import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetTodos from './components/GetTodos'
import SIgnUp from './components/SIgnUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Appbar from "./components/Appbar";
import './App.css'

function App() {
  return (
    <div style={{backgroundColor:"#E2E2E2", height: "100vh" }}>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SIgnUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/todos' element={<GetTodos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
