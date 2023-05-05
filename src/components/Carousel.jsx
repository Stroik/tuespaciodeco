'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Carousel = ({ images }) => {
  const [focus, setFocus] = useState(images[0].src);
  return (
    <div className="carousel-component grid gap-2 bg-slate-50 p-4 rounded-md">
      <div className="carousel-focus relative w-full rounded-md">
        <img src={focus} alt="Carousel" className="rounded-md !object-cover aspect-square w-full shadow-md" />
      </div>
      <div className="carousel-inner flex justify-center gap-2 max-h-20 w-full">
        {images.map((image, index) => {
          return (
            <div
              className={`aspect-square h-20 relative ${index === 0 ? 'active' : ''} rounded-md group shadow-md`}
              key={index}
              onClick={() => setFocus(image.src)}
            >
              <picture>
                <img src={image.src} alt="" className="aspect-square group-hover:scale-105 rounded-md shadow-md" sizes={image.sizes} />
              </picture>
            </div>
          );
        })}
      </div>
    </div>
  );
};
