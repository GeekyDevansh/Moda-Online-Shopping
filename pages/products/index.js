import React from 'react'
import { urlFor } from '../../lib/client'
import Link from 'next/link'
import {client} from '../../lib/client'
import Styles from '../../styles/Products.module.css'
import Image from 'next/image'


const Index = ({product_list}) => {
 
 

  return (
    <div className={Styles.maincontainer} >
      {product_list.map((product)=>{
        return(
          

      <div className={Styles.container}  key={product._id} >
        <Link href={`/products/${product.slug.current}`} >
          <a>

          <div className={Styles.item} >
          {product.image && 
          
          <Image src={urlFor(product.image)} alt="img" width={350} height={500} className={Styles.img} unoptimized={true} />
        }
          
          <div className={Styles.details} >
          <p>{product.name}</p>
          <p>${product.price}.00</p>
          </div>
          
          </div>
        </a>
        </Link>

       </div>
          
        )
      })
}
    </div>
  )
}

export const getServerSideProps = async ()=>{

  const query = '*[_type=="product_list"]';
  const product_list = await client.fetch(query);

  return {
    props:{
      product_list
    }
  }

}

export default Index