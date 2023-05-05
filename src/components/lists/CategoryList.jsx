import Link from 'next/link';

export const CategoryList = ({ categories }) => {
  return (
    <div className="carousel carousel-center rounded-box gap-4 my-4">
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className="carousel-item max-h-52 aspect-square relative rounded-md transition-all duration-300 hover:scale-105"
          >
            <Link href={`/productos/categorias/${category.slug}-${category.id}`}>
              <img
                src={category.image?.src || '/assets/images/category-placeholder.png'}
                alt=""
                className="mask mask-heart h-full object-cover"
              />
              <div className="indicator absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="indicator-item badge badge-primary">{category.count}</span>
                <h3 className=" px-4 py-2 bg-secondary rounded-lg text-slate-50 shadow-lg  truncate">
                  {category.name}
                </h3>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
