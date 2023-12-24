import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainRouter from './router/MainRouter'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function App() {

  return (
    <>
   <BrowserRouter> {/*IMPORTANTE AGREGAR basename='/ValorantApp' ANTES DE DESPLEGAR QUE NO SE TE OLVIDE */}

   <Navbar/>

   <MainRouter />

   <Footer/>
   
   </BrowserRouter>
   </>
  )
}

export default App
