import { PageHeader } from '@/components/PageHeader';
import { Pagination } from '@/components/Pagination';
import { ProductList } from '@/components/lists/ProductList';

export const metadata = {
  title: 'Tu espacio deco - Productos',
  description: 'Tienda de regalos y bazar',
};

const getProducts = async (page = 1, per_page = 12) => {
  const url = new URL(`${process.env.API_URL}/products`);
  url.searchParams.append('page', page);
  url.searchParams.append('per_page', per_page);

  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.json();
  return data;
};

export default async function ProductsPage({ searchParams }) {
  let { page, per_page } = searchParams;
  page = typeof page === 'undefined' ? 1 : Number(page);
  per_page = typeof per_page === 'undefined' ? 12 : Number(per_page);
  const { products, pagination } = await getProducts(page, per_page);
  const { totalPages } = pagination;
  const links = [
    { title: 'Inicio', href: '/' },
    { title: 'Productos', href: '/productos' },
  ];

  return (
    <section>
      <PageHeader
        title="Productos"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        links={links}
      />
      <ProductList products={products} />
      <Pagination page={page} per_page={per_page} totalPages={totalPages}/>
    </section>
  );
}
