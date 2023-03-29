import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screen/home/'
import RegisterScreen from './screen/auth/register'
import LoginScreen from './screen/auth/login'
import NotesScreen from './screen/notes'
import UserScreen from './screen/users'

export default function BrowseRouter() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/notes" element={<NotesScreen/>} />
        <Route path="/user" element={<UserScreen/>} />
      </Routes>
    </Router>
  )
}