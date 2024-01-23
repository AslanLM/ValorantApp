import { HashRouter } from 'react-router-dom'
import './App.css'
import MainRouter from './router/MainRouter'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
   <HashRouter> {/*IMPORTANTE AGREGAR basename='/ValorantApp' ANTES DE DESPLEGAR QUE NO SE TE OLVIDE */}

   <Navbar/>

   <MainRouter />
   
   </HashRouter>
   </>
  )
}

export default App
