import Link from 'next/link';

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="login flex gap-2 text-white">
        <Link href="/auth/login" className="px-4 py-2 rounded bg-sky-600">
          Iniciar sesión
        </Link>
        <Link href="/auth/register" className="px-4 py-2 rounded bg-lime-600">
          Registrarse
        </Link>
      </div>
    </main>
  );
}
