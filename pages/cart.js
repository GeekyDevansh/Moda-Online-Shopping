import Link from 'next/link';
import React, { useRef } from 'react';
import {useStateContext} from '../context/StateContext'
import { urlFor } from '../lib/client';
import Styles from '../styles/Cart.module.css'
import arrow from '../public/black-arrow.png'
import getStripe from '../lib/getStripe';
import {toast} from 'react-hot-toast';
import Image from 'next/image'


const Cart = () => {

  const cartRef = useRef();
const {cartItems,totalQuantities,totalPrice,toggleCartItemQuanitity} = useStateContext();

const handleCheckout = async () => {
  const stripe = await getStripe();

  const response = await fetch('/api/stripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItems),
  });

  if(response.statusCode === 500) return;
  
  const data = await response.json();

  toast.loading('Redirecting...');

  stripe.redirectToCheckout({ sessionId: data.id });
}



  return (
    <>
    
    <div  ref={cartRef} >
     <p className={Styles.text} > Your Cart (<span className={Styles.qty} > {totalQuantities} item(s) </span> )</p>

     {cartItems.length <1 && (
       <div className={Styles.text2} >
         Your Shopping Bag is Empty
       </div>
       
     )}
     
     {cartItems.length >=1 && (

       <div className={Styles.cart} >

       {cartItems.map((item)=>(
         <div key={item._id} >
 <div className={Styles.cartitem} >
           <img src={urlFor(item.image)} alt="img"  width={123.2} height={182.8} />

           <div>
             <h3> {item.name} </h3>
             <h5> ${item.price}.00 </h5>

           </div>
           <div className={Styles.text1} >
            Quantity :  <button className={Styles.btn} onClick={() => toggleCartItemQuanitity(item._id, 'dec') } >-</button> {item.quantity} <button className={Styles.btn} onClick={() => toggleCartItemQuanitity(item._id, 'inc') } >+</button>
           </div>
           
          </div>
           </div>
         
         )) }
        <div className={Styles.subtotal} >

          <div>
            Subtotal :
          </div>
          <div>
            $ {totalPrice}.00
          </div>
          
        </div>
         </div>
         )}
         {cartItems.length >=1 && (
           <div className={Styles.btnc} >

           <button className={Styles.btn1} onClick={handleCheckout} >
           Checkout with Stripe
           </button>
         </div>
         )}
        
        <br />
       
    </div>
    <Link href='/products' >
      <p className={Styles.text3} >
         Continue Shopping <Image src={arrow} alt="arrow" width={20} height={20} />
       </p>
    </Link>
    
    </>
  )
}

export default Cart