import Link from "next/link";
import React, { useRef } from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import Styles from "../styles/Cart.module.css";
import arrow from "../public/black-arrow.png";
import getStripe from "../lib/getStripe";
import { toast } from "react-hot-toast";
import Image from "next/image";

const Cart = () => {
  const cartRef = useRef();
  const { cartItems, totalQuantities, totalPrice, toggleCartItemQuanitity } =
    useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <>
      <div ref={cartRef} style={{backgroundColor:'#caafa8',paddingTop:'5%'}} >
        <p className={Styles.text}>
          {" "}
          Your Cart (
          <span className={Styles.qty}> {totalQuantities} item(s) </span> )
        </p>

        {totalQuantities == 0 && (
          <div className={Styles.text2}>Your Shopping Bag is Empty</div>
        )}

        {totalQuantities >= 1 && (
          <div className={Styles.cart} style={{borderTopStyle:'solid',borderTopWidth:'2px',borderTopColor:'white'}} >
            {cartItems.map(
              (item) =>
                item.quantity > 0 && (
                  <div key={item._id} >
                    <div className={Styles.cartitem}>
                      <div>
                        <img
                          style={{ objectFit: "fill" }}
                          src={urlFor(item.image)}
                          alt="product_img"
                          width={120}
                          height={120}
                        />
                      </div>
                      <div style={{ justifyContent: "start" }}>
                        <h3> {item.name} </h3>
                      </div>

                      <div>
                        <h5> ${item.price}.00 </h5>
                      </div>
                      <div className={Styles.text1}>
                        Quantity :{" "}
                        <button
                          className={Styles.btn}
                          style={{
                            cursor:
                              item.quantity === 1 ? "not-allowed" : "pointer",
                          }}
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          -
                        </button>{" "}
                        {item.quantity}{" "}
                        <button
                          className={Styles.btn}
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          +
                        </button>
                        <button
                          className={Styles.btndel}
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "del")
                          }
                        >
                          {" "}
                          <Image
                          
                            src="/delete.svg"
                            width={20}
                            height={20}
                          />{" "}
                        </button>
                        <button
                          className={Styles.btndelsm}
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "del")
                          }
                        >
                          {" "}
                          <Image
                          
                            src="/delete.svg"
                            width={16}
                            height={16}
                          />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                )
            )}
            <div className={Styles.subtotal} style={{borderTopStyle:'solid',borderTopWidth:'2px',borderTopColor:'white',paddingTop:'5%'}} >
              <div>Subtotal :</div>
              <div>$ {totalPrice}.00</div>
            </div>
          </div>
        )}
        {totalQuantities >= 1 && (
          <div className={Styles.btnc}>
            <button className={Styles.btn1} onClick={handleCheckout}>
              Checkout with Stripe
            </button>
          </div>
        )}

        <br />
      </div>
      <div className={Styles.text3} style={{backgroundColor:'#caafa8',margin:'0px'}}  >

      <Link href="/products"  >
        <a>
          Continue Shopping{" "}
          {/* <Image src={arrow} alt="arrow" width={20} height={20} /> */}
        </a>
      </Link>
      </div>
    </>
  );
};

export default Cart;
