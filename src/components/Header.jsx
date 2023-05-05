import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-start">
        <img src="/assets/images/logo-tuespaciodeco.png" alt="logo tu espacio deco" />
      </div>
      <div className="navbar-center">
        <Navbar />
      </div>
      <div className="navbar-end">
        <Cart />
        <UserMenu />
      </div>
    </header>
  );
};
