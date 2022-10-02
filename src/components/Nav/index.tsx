import { Link } from 'react-router-dom';

import CurrencySwitcher from '../CurrencySwitch';
import Cart from '../Cart';

import { Logo } from '../../assets';

import { NavLink, Navbar, CartCurrencyContainer } from './styles';
import {
  selectCartState,
  selectCartStateItemsCount,
} from '../../features/cart/cartSlice';
import { useAppSelector } from '../../app/hooks';
import CartDropdown from '../CartDropdown/index';

const Nav = () => {
  const { hidden, products } = useAppSelector(selectCartState);
  const count = useAppSelector(selectCartStateItemsCount);

  const className = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? 'active' : ''}`;

  return (
    <Navbar>
      <div>
        <NavLink className="active" to="/">
          WOMEN
        </NavLink>
        <NavLink className={className} to="/">
          MEN
        </NavLink>
        <NavLink className={className} to="/">
          KIDS
        </NavLink>
      </div>
      <Link to="/" style={{ paddingRight: 150 }}>
        <Logo />
      </Link>
      <CartCurrencyContainer>
        <CurrencySwitcher />
        <Cart count={count} />
      </CartCurrencyContainer>
      {hidden ? null : <CartDropdown count={count} products={products} />}
    </Navbar>
  );
};

export default Nav;
