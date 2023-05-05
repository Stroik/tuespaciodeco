import { Slider } from '@/components/Slider';
import { CategoryList } from '@/components/lists/CategoryList';
import { ProductList } from '@/components/lists/ProductList';
import Link from 'next/link';

export const metadata = {
  title: 'Tu espacio deco - Tienda',
  description: 'Tienda de regalos y bazar',
};

async function getSliderProducts() {
  const response = await fetch(`${process.env.API_URL}/products/category/251`, { cache: 'no-store' });
  const { products } = await response.json();
  return products;
}

async function getCategories() {
  const response = await fetch(`${process.env.API_URL}/products/category`, { cache: 'no-store' });
  const { categories } = await response.json();
  return categories;
}

const getProducts = async (page = 1, per_page = 8) => {
  const url = new URL(`${process.env.API_URL}/products`);
  url.searchParams.append('page', page);
  url.searchParams.append('per_page', per_page);

  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.json();
  return data;
};

export default async function StorePage() {
  const slider = await getSliderProducts();
  let categories = await getCategories();
  const { products } = await getProducts();
  categories = categories.filter((category) => category.count > 0);
  categories = categories.sort((a, b) => b.count - a.count);
  categories = categories.filter((category) => category.parent === 0);
  categories = categories.filter((category) => category.id !== 251);
  return (
    <section>
      <Slider products={slider} />
      <div className="divider my-10">CATEGORIAS</div>
      <CategoryList categories={categories} />
      <div className="divider my-10">PRODUCTOS</div>
      <ProductList products={products} />
      <div className="grid place-content-center py-6">
        <Link href="/productos" className="btn gap-2">
          <i className="ri-store-3-line"></i>
          <span>Todos los productos</span>
        </Link>
      </div>
    </section>
  );
}
