import React from 'react'
import { client } from '../../lib/client'
import { urlFor } from '../../lib/client'
import Styles from '../../styles/Product.module.css'
import { useStateContext } from '../../context/StateContext'
import Link from 'next/link'
import Image from 'next/image'

const ProductDetails = ({product}) => {
  const {onAdd,qty} = useStateContext();

 

  return (
    <>
   
<div className={Styles.container} >

      <div className={Styles.image} >
        <img src = {urlFor(product.image)} alt='img' width={616} height={914} className={Styles.img} />

      </div>
      <div className={Styles.text} >
        <h1 className={Styles.heading1} >
          {product.name}
        </h1>
        <p> ${product.price}.00 </p>
        <p className={Styles.description}> Description </p>
        
        <p className={Styles.pdescription} > {product.description} </p>

        <button  className={Styles.cart} onClick={
          () => onAdd(product, qty)}>
      Add to cart
        </button>
        <br />
        <Link href='/cart' >

        <button className={Styles.buynow} onClick={
          async () => await onAdd(product, qty)} >
      Buy now
        </button>
            
            </Link>
            </div>
</div>


    
    </>
  )
}

export const getStaticPaths = async ()=>{


  const query = `*[_type=="product_list"]{
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product)=>({
    params : {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback:false
  }



}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product_list" && slug.current == '${slug}'][0]`;
  
  const product = await client.fetch(query);

  return{
    props: {
      product,
    },
    revalidate:10,
  }
}



export default ProductDetails