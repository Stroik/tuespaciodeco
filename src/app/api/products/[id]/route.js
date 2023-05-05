import { api } from '@/lib/woocommerce/api';

export async function GET(req, context) {
  const id = context.params.id;
  try {
    const response = await api.get(`products/${id}`);
    if (response.status === 200) {
      return new Response(JSON.stringify(response.data));
    }
    return new Response(JSON.stringify({ message: 'Error al obtener el producto' }));
  } catch (error) {
    console.log(error);
  }
}
