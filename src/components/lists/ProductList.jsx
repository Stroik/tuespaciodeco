'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ARS } from '../Price';

export const ProductItem = ({ product }) => (
  <div className="card bg-zinc-200 shadow-md transition-transform duration-300 group relative">
    <p className="absolute top-5 right-5 z-30 rounded-lg p-1 bg-rose-500 text-slate-50 font-bold">
      {ARS.format(product.prices.regular_price.slice(0, -2))}
    </p>
    <figure className="img-container w-full relative aspect-square rounded-md overflow-hidden">
      <Link href={`/productos/${product.id}`}>
        <Image
          src={product.images[0].src}
          fill={true}
          alt={product.name}
          priority={true}
          placeholder="blur"
          blurDataURL={product.images[0].src}
          className="!object-cover rounded-md transition-all duration-300 group-hover:!-top-11 z-20"
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
        />
      </Link>
      <div className="actions absolute w-full px-2 flex items-center justify-center gap-2 bottom-1 z-0 text-slate-50">
        <Link className="rounded-md px-4 py-1 w-full flex justify-center items-center bg-primary hover:opacity-80" href={`/productos/${product.id}`}>
          <i className="ri-eye-line text-xl"></i>
        </Link>
        <button className="rounded-md px-4 py-1 w-full flex justify-center items-center bg-neutral hover:opacity-80 relative">
          <i className="ri-shopping-cart-fill text-xl"></i>
          <i className="ri-add-circle-fill text-sm"></i>
        </button>
      </div>
    </figure>
    <div className="card-body flex flex-col gap-4 justify-end">
      <Link href={`/productos/${product.id}`}>
        <h3 className="card-title">{product.name}</h3>
      </Link>
      <div className="card-actions justify-end">
        {product.categories.map((category) => (
          <Link href={`/productos/categorias/${category.slug}-${category.id}`} key={category.id} className="badge badge-primary">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-y-auto pb-4">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};
