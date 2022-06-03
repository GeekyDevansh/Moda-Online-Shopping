import React from 'react';
import {Toaster} from 'react-hot-toast'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {StateContext} from '../context/StateContext'




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return <>
  <StateContext>
    
<Navbar/> 
<Toaster/>
<Component {...pageProps} />
<Footer/>
  </StateContext>

  </>
}

export default MyApp
