import React from 'react'
import Styles from '../styles/Footer.module.css'
import Image from 'next/image'
import fb from '../icons/fb.png'
import insta from '../icons/insta.png'
import twitter from '../icons/twitter.png'
import heart from '../icons/heart.png'

const Footer = () => {
  return (
    <>
    <div className={Styles.container}>

    <div >
        <ul className={Styles.ul}>

    <li className={Styles.link1}> <a href="/"> <Image src={fb} width={13} height={26} /></a></li>
    <li className={Styles.link}><a href="/"><Image src={insta} width={25} height={25} /></a></li>
    <li className={Styles.link}><a href="/"><Image src={twitter} width={25} height={25} /></a></li>
        </ul>

    <div>
        <ul className={Styles.list} >
        <li className={Styles.item}> <a href="/"> FAQ</a></li>
           
            
            <li className={Styles.item}> <a href="/"> Shipping </a> </li>
            <li className={Styles.item}> <a href="/"> Contact</a></li>
            <li className={Styles.item}> <a href="/"> Returns</a></li>
            <li className={Styles.item}> <a href="/"> Terms of Use</a></li>
            <li className={Styles.item}> <a href="/"> Privacy Policy</a></li>
        </ul>
    </div>
    <div className={Styles.cpright} >
    &#169; 2022 Moda, Inc. All Rights Reserved.
    </div>
    
    <div className={Styles.devansh} >
      Made with <Image src={heart} height={17} width={17} /> by Devansh Khullar
    </div>
    


    </div>
    </div>
    
    </>
  )
}

export default Footer