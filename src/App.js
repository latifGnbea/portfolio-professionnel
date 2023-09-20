import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
// import Client from './components/Client/Client'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import "./style.css"



const App = () => {
  return (
    <div>
      <Navbar/>
      <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
      <Intro/>
      <Skills/>
      <Portfolio/>
      {/* <Client/> */}
      <Contact/>
      <Footer/>
      

    </div>
  )
}

export default App