"use client";

export const ARS = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
});

export const Price = ({ price }) => {
  return <p className="text-xl font-semibold">{ARS.format(price.slice(0, -2))}</p>;
};
