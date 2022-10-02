import { Route, Routes } from 'react-router';

import Nav from './components/Nav';
import CategoryPage from './pages/Category';
import ProductDisplay from './pages/Product';
import CheckoutPage from './pages/Checkout';

import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectCartState, toggleCartHidden } from './features/cart/cartSlice';

import GlobalStyle, { Overlay, MainWrapper } from './GlobalStyles';

function App() {
  const { hidden } = useAppSelector(selectCartState);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {!hidden && <Overlay onClick={() => dispatch(toggleCartHidden())} />}
      <MainWrapper>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </MainWrapper>
    </div>
  );
}

export default App;
