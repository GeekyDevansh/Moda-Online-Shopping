import React from "react";
import Head from "next/head";
import hp_1 from "../public/hp.jpg";
import Image from "next/image";
import Styles from "../styles/Home.module.css";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";
import arrow from "../public/black-arrow.png";
import Link from "next/link";
import { useNextSanityImage } from 'next-sanity-image';
import sanityClient from '@sanity/client';


const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true
});

const Index = ({ products }) => {
  const product = products[0];
  const product1 = products[1];
  const product2 = products[2];

  const imageProps1 = useNextSanityImage(
		configuredSanityClient,
		products[0].image
	);
  const imageProps2 = useNextSanityImage(
		configuredSanityClient,
		products[1].image
	);
  const imageProps3 = useNextSanityImage(
		configuredSanityClient,
		products[2].image
	);
  
  

  return (
    <>
      <Head>
        <title>Moda-Online Shopping</title>
      </Head>

      <div className={Styles.container}>
        <Image src={hp_1} alt='img' data-aos="fade-in" data-aos-duration="1000" />
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
      &quot;Style is a way to say who you are without having to speak.&quot; — Rachel
        Zoe
      </div>

      <div className={Styles.container3}>
        
        <div
          className={Styles.image}
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {product.image && (
            <Image
              {...imageProps1}
              alt="img"
              width={400}
              height={550}
              
            />
          )}
        </div>
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
      </div>

      <div className={Styles.container4}>
        <div
          className={Styles.image1}
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {product1.image && (
            <Image
              {...imageProps2}
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
          className={Styles.image2}
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {product2.image && (
            <Image
              {...imageProps3}
              alt="img"
              width={400}
              height={550}
              
            />
          )}
        </div>
        <div
          className={Styles.text2}
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
      </div>

      <div className={Styles.end} data-aos="fade-up" data-aos-duration="1000">
        <Link href='/products' >
        <a>
          {" "}
          EXPLORE MORE STYLES{" "}
          <Image src={arrow} alt="arrow" width={27} height={21} />{" "}
        </a>
        </Link>
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

export default Index;
