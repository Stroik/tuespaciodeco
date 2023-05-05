import Link from 'next/link';

export const Navbar = () => {

  return (
    <nav className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li className="text-base">
          <Link href="/">
            <i className="ri-home-heart-fill text-2xl"></i>
            <span>Inicio</span>
          </Link>
        </li>
        <li className="text-base">
          <Link href="/nosotros">
            <i className="ri-team-fill text-2xl"></i>
            <span>Nosotros</span>
          </Link>
        </li>
        <li className="text-base">
          <Link href="/tienda">
            <i className="ri-shopping-basket-fill text-2xl"></i>
            <span>Tienda</span>
          </Link>
        </li>
        <li className="text-base">
          <Link href="/contacto">
            <i className="ri-chat-smile-fill text-2xl"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
