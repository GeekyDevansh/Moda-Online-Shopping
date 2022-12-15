import React from 'react'
import Styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import image from '../icons/icons8-shopping-bag-50.png'
import {useStateContext} from '../context/StateContext'
import Link from 'next/link'
import {useRouter} from 'next/router';



const Navbar = () => {

    const router = useRouter();
    console.log(router);

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
        <a style={{fontWeight: router.pathname=='/products' ? '900' : '100'}} > SHOP </a> 
        </Link>
        </li>
        <li className={Styles.links}> 
        <Link href='/about' > 
        <a style={{fontWeight: router.pathname=='/about' ? '900' : '100'}} > ABOUT US </a> 
        </Link>
        </li>
        <li className={Styles.links}> 
        <Link href='/locate' >
           <a style={{fontWeight: router.pathname=='/locate' ? '900' : '100'}} > LOCATE A STORE </a>
            </Link>
        </li>
    </ul>
    </div>

    <div className={Styles.cart}>
        <Link href="/cart">
<div className={Styles.bag} >

        <Image src={image} alt='shopping bag' width={20} height={20} />
        <div className={Styles.count} >

        {totalQuantities}
        </div>
</div>
        </Link>

   
        
    </div>
    

        </div>

    
    </>
  )
}

export default Navbar