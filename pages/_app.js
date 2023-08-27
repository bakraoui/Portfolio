import '../styles/globals.css'
import Navbar from '../components/Navbar.jsx'
import { useEffect } from 'react';
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.title = 'Bakraoui Ayoub'
  }, []);
  
  return (

    <>
      <Navbar />
      <div className='main-content' >
        <Component {...pageProps} />
         <Footer />
      </div>
      
    </>
        
   

  )
}

export default MyApp
