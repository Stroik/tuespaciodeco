import { Header } from '@/components/Header';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata = {
  title: 'Tu espacio deco - Bazar y regaleria',
  description: 'Tienda de regalos y bazar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="tuespacio">
      <head>
        <meta charSet="utf-8" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
