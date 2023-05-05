import { PageHeader } from '@/components/PageHeader';
import { CategoryList } from '@/components/lists/CategoryList';

export const metadata = {
  title: 'Tu espacio deco - Categoría de productos',
  description: 'Tienda de regalos y bazar',
};

async function getCategories() {
  const response = await fetch(`${process.env.API_URL}/products/category`, { cache: 'no-store' });
  const { categories } = await response.json();
  return categories;
}

export default async function CategoriesPage() {
  let categories = await getCategories();
  categories = categories.filter((category) => category.count > 0);
  categories = categories.sort((a, b) => b.count - a.count);
  categories = categories.filter((category) => category.parent === 0);
  categories = categories.filter((category) => category.id !== 251);
  const links = [
    { href: '/', title: 'Inicio' },
    { href: '/productos', title: 'Productos' },
    { href: '/productos/categorias', title: 'Categorias' },
  ];
  return (
    <section>
      <PageHeader
        title="Categoria de productos"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        links={links}
      />
      <div className="divider my-10">CATEGORIAS</div>
      <CategoryList categories={categories} />
    </section>
  );
}
