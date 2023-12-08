import './App.css'

// Components
import Navbar from './components/Navbar/NavBar'
import Footer from './components/footer/Footer'
import Avatar from './components/avatar/Avatar'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Avatar />
      <div className=''>
        <h1>Titulo</h1>
        <p>asdas dasdsa dasdsad sadsa dasd asdasdas asd asdas dsa dasdsad</p>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
