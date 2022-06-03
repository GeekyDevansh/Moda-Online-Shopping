import React from "react";
import Head from "next/head";
import hp_1 from "../public/hp.jpg";
import Image from "next/image";
import Styles from "../styles/Home.module.css";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";
import arrow from "../public/black-arrow.png";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";

const index = ({ products }) => {
  const product = products[0];
  const product1 = products[1];
  const product2 = products[2];
  const { onAdd, qty } = useStateContext();

  return (
    <>
      <Head>
        <title>Moda-Online Shopping</title>
      </Head>

      <div className={Styles.container}>
        <Image src={hp_1} data-aos="fade-in" data-aos-duration="1000" />
        <div
          className={Styles.brand}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Da Milano
        </div>
        <div
          className={Styles.brand1}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Fresh Arrivals
        </div>

        <Link href="/products">
          <button
            className={Styles.btn}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <a> Shop Now</a>
          </button>
        </Link>
      </div>

      <div className={Styles.container2} data-aos="fade-up">
        "Style is a way to say who you are without having to speak." — Rachel
        Zoe
      </div>

      <div className={Styles.container3}>
        <div
          className={Styles.text}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className={Styles.heading}> {product.name} </h1>$ {product.price}
          .00
          <p> {product.description} </p>
          <Link href="/products">
            <button className={Styles.btn1}> Shop Now </button>
          </Link>
        </div>
        <div
          className={Styles.image}
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {product.image && (
            <img
              src={urlFor(product.image)}
              alt="img"
              width={400}
              height={550}
              
            />
          )}
        </div>
      </div>

      <div className={Styles.container4}>
        <div
          className={Styles.image1}
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {product1.image && (
            <img
              src={urlFor(product1.image)}
              alt="img"
              width={400}
              height={550}
              
            />
          )}
        </div>
        <div
          className={Styles.text1}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className={Styles.heading}> {product1.name} </h1>${" "}
          {product1.price}.00
          <p> {product1.description} </p>
          <Link href="/products">
            <button className={Styles.btn1}> Shop Now </button>
          </Link>
        </div>
      </div>

      <div className={Styles.container4}>
        <div
          className={Styles.text}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className={Styles.heading}> {product2.name} </h1>${" "}
          {product2.price}.00
          <p> {product2.description} </p>
          <Link href="/products">
            <button className={Styles.btn1}> Shop Now </button>
          </Link>
        </div>
        <div
          className={Styles.image2}
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {product2.image && (
            <img
              src={urlFor(product2.image)}
              alt="img"
              width={400}
              height={550}
              
            />
          )}
        </div>
      </div>

      <div className={Styles.end} data-aos="fade-up" data-aos-duration="1000">
        <a href="/products">
          {" "}
          EXPLORE MORE STYLES{" "}
          <Image src={arrow} alt="arrow" width={27} height={21} />{" "}
        </a>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
};

export default index;
