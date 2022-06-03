import React from 'react'
import Styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import image from '../icons/icons8-shopping-bag-50.png'
import {useStateContext} from '../context/StateContext'
import Link from 'next/link'



const Navbar = () => {

  const {totalQuantities} = useStateContext();

  return (
    <>

        <div className={Styles.container}>

    <div className={Styles.moda}> 
    <Link  href="/" >
    <a> MODA. </a> 
    </Link>
    </div>
    <div className={Styles.link} >


    <ul className={Styles.ul} >
        <li className={Styles.links}> 
        <Link href='/products' > 
        <a> SHOP </a> 
        </Link>
        </li>
        <li className={Styles.links}> 
        <Link href='/about' > 
        <a > ABOUT US </a> 
        </Link>
        </li>
        <li className={Styles.links}> 
        <Link href='/locate' >
           <a> LOCATE A STORE </a>
            </Link>
        </li>
    </ul>
    </div>

    <div className={Styles.cart}>
        <Link href="/cart">
<a >

        <Image src={image} alt='shopping bag' width={20} height={20} />
        {totalQuantities}
</a>
        </Link>

   
        
    </div>
    

        </div>

    
    </>
  )
}

export default Navbar