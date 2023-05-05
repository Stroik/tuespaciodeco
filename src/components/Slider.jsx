import Link from 'next/link';

export const Slider = ({ products }) => {
  return (
    <div className="carousel w-full overflow-y-hidden">
      {products.map((product, i) => {
        let prevSlide = `#slide`;
        let nextSlide = `#slide`;
        let totalSlides = products.length;

        prevSlide = i === 0 ? `#slide${totalSlides - 1}` : `#slide${i - 1}`;
        nextSlide = i === totalSlides - 1 ? `#slide0` : `#slide${i + 1}`;

        return (
          <div id={`slide${i}`} className="carousel-item relative w-full max-h-96" key={product.id}>
            <img src={`/assets/images/slider/bg-slider-${i + 1}.png`} className="w-full object-cover" />
            <div className="product-info absolute h-full p-6 w-full flex justify-center">
              <div className="card lg:card-side bg-base-100 shadow-xl max-w-3xl h-full">
                <figure>
                  <img src={product.images[0].src} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="text-sm max-w-xs">{String(product.short_description).replace(/(<([^>]+)>)/gi, '').slice(0,80)}...</p>
                  <div className="card-actions justify-end">
                    <Link href={`/productos/${product.id}`} className="btn btn-primary z-40">
                      ¡Lo quiero!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={prevSlide} className="btn btn-circle">
                <i className="ri-arrow-left-double-fill text-xl"></i>
              </a>
              <a href={nextSlide} className="btn btn-circle">
                <i className="ri-arrow-right-double-fill text-xl"></i>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
