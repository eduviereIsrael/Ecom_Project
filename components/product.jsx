
import React from 'react';
import Link from 'next/link';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = sanityClient({
    projectId: '73zwe825',
    dataset: 'production',
    apiVersion: '2022-06-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source)

// import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price} </p>
        </div>
      </Link>
    </div>
  )
}

export default Product