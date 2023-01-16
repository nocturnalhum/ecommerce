import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product }) {
  return (
    <div className='card'>
      <Link href={`/product`}>
        <img
          src={product.image}
          alt={product.category}
          className='rounded shadow'
        />
      </Link>
    </div>
  );
}
