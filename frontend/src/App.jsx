import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import AboutUs from './pages/aboutUs/AboutUs'
import { Toaster } from 'sonner';
import Service from './pages/ourService/Service';
import ContactPage from './pages/contactUs/ContactPage';


function App() {


  return (
    <>
    <Toaster position='top-right' richColors  />
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about_us' element={<AboutUs/>}/>
      <Route path='/ourservice' element={<Service/>}/>
      <Route path='/contactUs' element={<ContactPage/>}/>
    </Routes>
    </>
  )
}

export default App
