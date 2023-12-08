import './App.css'
import Navbar from './components/Navbar/NavBar'
import Footer from './components/footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Header from './components/header/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Header/>
      <BrowserRouter>
       
        
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>


      </BrowserRouter>
      
        <Footer numero="9314"/>
    </>
  )
}

export default App
