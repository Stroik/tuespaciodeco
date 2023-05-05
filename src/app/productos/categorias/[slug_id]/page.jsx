import { PageHeader } from '@/components/PageHeader';
import { ProductList } from '@/components/lists/ProductList';

export const metadata = {
  title: 'Tu espacio deco - Categoría de productos',
  description: 'Tienda de regalos y bazar',
};

async function getProductsByCategory(id) {
  const response = await fetch(`${process.env.API_URL}/products/category/${id}`, { cache: 'no-store' });
  const { products } = await response.json();
  return products;
}

export default async function CategorySlugPage({ params }) {
  const _params = params.slug_id.split('-');
  const [slug, id] = _params;
  const products = await getProductsByCategory(id);
  const links = [
    { href: '/', title: 'Inicio' },
    { href: '/productos', title: 'Productos' },
    {
      href: `/productos/categorias/${slug}-${id}`,
      title: String(slug).charAt(0).toUpperCase() + String(slug).slice(1).toLowerCase(),
    },
  ];
  return (
    <section>
      <PageHeader
        title={`Productos en categoría ${String(slug).charAt(0).toUpperCase() + String(slug).slice(1).toLowerCase()}`}
        links={links}
      />
      <ProductList products={products} />
    </section>
  );
}
