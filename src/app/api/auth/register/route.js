export async function POST(request) {
  const url = `http://tuespaciodeco.local/wp-json/api/v1/mo-jwt-register`;
  const { username, password, email } = await request.json();

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ username, password, email }),
  });

  const data = await response.json();

  return new Response(JSON.stringify(data));
}
