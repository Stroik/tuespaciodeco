import { api } from '@/lib/woocommerce/api';

export async function GET(req, context) {
  const { params } = context;
  try {
    const response = await api.get('products', {
      category: params.id,
      _fields: 'id,name,prices,images,categories,short_description',
      per_page: 100,
    });
    if (response.status === 200) {
      return new Response(JSON.stringify({ products: response.data }));
    } else {
      return new Response(JSON.stringify({ products: response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}
