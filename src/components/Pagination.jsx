import Link from 'next/link';

export const Pagination = ({ page, per_page, totalPages }) => (
  <div className="pagination py-2 flex justify-between items-center w-full">
    {page > 1 && (
      <Link
        className="btn btn-primary text-slate-50 flex gap-2 items-center"
        href={`/productos?page=${page - 1}&per_page=${per_page}`}
      >
        <i className="ri-arrow-left-circle-line text-2xl "></i>
        <span>Atrás</span>
      </Link>
    )}
    {page < totalPages && (
      <Link
        className="btn btn-primary text-slate-50 flex gap-2 items-center ml-auto"
        href={`/productos?page=${page + 1}&per_page=${per_page}`}
      >
        <span>Siguiente</span>
        <i className="ri-arrow-right-circle-line text-2xl "></i>
      </Link>
    )}
  </div>
);
