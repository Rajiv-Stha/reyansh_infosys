import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import AboutUs from './pages/aboutUs/AboutUs'
import { Toaster } from 'sonner';


function App() {


  return (
    <>
    <Toaster position='top-right' richColors  />
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about_us' element={<AboutUs/>}/>
    </Routes>
    </>
  )
}

export default App
