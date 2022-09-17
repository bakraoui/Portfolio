import '../styles/globals.css'
import Navbar from '../components/Navbar.jsx'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.title = 'Bakraoui Ayoub'
  }, []);
  
  return (

    <>
      <Navbar />
      <div className='main-content' >
        <Component {...pageProps} />
      </div>
      
    </>
        
   

  )
}

export default MyApp
