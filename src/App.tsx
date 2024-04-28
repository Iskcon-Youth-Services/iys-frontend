import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignIn from './Components/Login/SignIn'
import SignUp from './Components/Login/SignUp'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
