import { Carousel } from '@/components/Carousel';
import { PageHeader } from '@/components/PageHeader';
import { Price } from '@/components/Price';
import Link from 'next/link';

export const metadata = {
  title: 'Tu espacio deco - Bazar y regaleria',
  description: 'Tienda de regalos y bazar',
};

async function getProduct(id) {
  const url = new URL(`${process.env.API_URL}/products/${id}`);
  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function ProductId({ params }) {
  const { id } = params;
  const product = await getProduct(id);
  const links = [
    { href: '/', title: 'Inicio' },
    { href: '/productos', title: 'Productos' },
    { href: `/productos/${id}`, title: product.name },
  ];
  return (
    <section>
      <PageHeader title={product.name} description={product.description} links={links} />
      <div className="product grid grid-cols-1 md:grid-cols-2 gap-4">
        <Carousel images={product.images} />
        <div className="product-info bg-slate-50 p-4 rounded-md flex flex-col gap-4 ">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <Price price={product.prices.regular_price} />
          <p className="text-lg">{String(product.short_description).replace(/(<([^>]+)>)/gi, '')}</p>
          <div className="actions">
            <button className="btn btn-primary w-full gap-2">
              <i className="ri-shopping-cart-fill"></i>
              <span>Agregar al carrito</span>
            </button>

            <div className="flex flex-col gap-4 mt-4">
              <h4 className="text-xl font-semibold">Categories</h4>
              <div className="flex gap-2">
                {product.categories.map((category) => (
                  <Link
                    href={`/productos/categorias/${category.slug}-${category.id}`}
                    key={category.id}
                    className="badge badge-primary"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
