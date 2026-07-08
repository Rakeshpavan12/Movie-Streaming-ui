
import Home from './Pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App