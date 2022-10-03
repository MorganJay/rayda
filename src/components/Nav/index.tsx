import { Link } from 'react-router-dom';

import Cart from '../Cart';
import CartDropdown from '../CartDropdown';
import CurrencySwitcher from '../CurrencySwitch';
import CurrencyDropdown from '../CurrencyDropdown';

import { Logo } from '../../assets';

import { useAppSelector } from '../../app/hooks';
import {
  selectCartState,
  selectCartStateItemsCount,
} from '../../features/cart/cartSlice';

import { NavLink, Navbar, CartCurrencyContainer } from './styles';
import { selectCurrencyState } from '../../features/currency/currencySlice';

const Nav = () => {
  const { hidden, products } = useAppSelector(selectCartState);
  const { toggleHidden } = useAppSelector(selectCurrencyState);
  const count = useAppSelector(selectCartStateItemsCount);

  return (
    <Navbar>
      <div>
        <NavLink to="/" className="woman">WOMEN</NavLink>
        <NavLink to="/">MEN</NavLink>
        <NavLink to="/">KIDS</NavLink>
      </div>
      <Link to="/" style={{ paddingRight: 150 }}>
        <Logo />
      </Link>
      <CartCurrencyContainer>
        <CurrencySwitcher />
        <Cart count={count} />
      </CartCurrencyContainer>
      {!hidden && <CartDropdown count={count} products={products} />}
      {!toggleHidden && <CurrencyDropdown />}
    </Navbar>
  );
};

export default Nav;
