import React from 'react'
import Styles from '../styles/Footer.module.css'
import Image from 'next/image'
import fb from '../icons/fb.png'
import insta from '../icons/insta.png'
import twitter from '../icons/twitter.png'
import heart from '../icons/heart.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className={Styles.container}>

    <div >
        <ul className={Styles.ul}>

    <li className={Styles.link1}> 
<Link href='/'>
    <a> <Image  src={fb} alt='fb' width={13} height={26} />
    </a>
</Link>
    </li>
    <li className={Styles.link}>
<Link href='/'>
      <a><Image src={insta} alt='instagram' width={25} height={25} />
    </a>
</Link>
    </li>
    <li className={Styles.link}>
    <Link href='/'>
      <a><Image src={twitter} alt='twitter' width={25} height={25} />
    </a>
    </Link>  
    </li>
        </ul>

    <div>
        <ul className={Styles.list} >
        <li className={Styles.item}> 
<Link href='/'>
        <a> FAQ
        </a>
</Link>
        </li>
           
            
            <li className={Styles.item}>
<Link href='/'>
               <a> Shipping 
            </a> 
</Link>
            </li>
            <li className={Styles.item}>
<Link href='/'>
               <a> Contact
            </a>
</Link>
            </li>
            <li className={Styles.item}>
<Link href='/'>
               <a> Returns
            </a>
</Link>
            </li>
            <li className={Styles.item}>
<Link href='/'>
               <a> Terms of Use
            </a>
</Link>
            </li>
            <li className={Styles.item}>
<Link href='/'>
               <a> Privacy Policy
            </a>
</Link>
            </li>
        </ul>
    </div>
    <div className={Styles.cpright} >
    &#169; 2022 Moda, Inc. All Rights Reserved.
    </div>
    
    <div className={Styles.devansh} >
      Made with <Image src={heart} alt='img' height={17} width={17} /> by Devansh Khullar
    </div>
    


    </div>
    </div>
    
    </>
  )
}

export default Footer