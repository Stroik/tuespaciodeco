import { api } from '@/lib/woocommerce/api';

export async function GET(request, context) {
  const { searchParams } = new URL(request.url);
  let page = searchParams.get('page');
  let per_page = searchParams.get('per_page');
  page = typeof page === undefined ? 1 : Number(page);
  per_page = typeof per_page === undefined ? 12 : Number(per_page);

  try {
    const response = await api.get('products', {
      page,
      per_page,
    });
    const { headers } = response;
    const pagination = {
      total: headers['x-wp-total'],
      totalPages: headers['x-wp-totalpages'],
    };
    if (response.status === 200) {
      return new Response(JSON.stringify({ products: response.data, pagination }));
    }
    return new Response(JSON.stringify({ message: 'Error al obtener los productos' }));
  } catch (error) {
    console.log(error);
  }
}