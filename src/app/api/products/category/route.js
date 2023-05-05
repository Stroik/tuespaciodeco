import { api } from '@/lib/woocommerce/api';

export async function GET(req, context) {
  try {
    const response = await api.get('products/categories', {
      _fields: 'id,name,image,count,slug,parent',
      per_page: 100,
    });
    if (response.status === 200) {
      return new Response(JSON.stringify({ categories: response.data }));
    } else {
      return new Response(JSON.stringify({ categories: response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}
