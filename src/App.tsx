import { Route, Routes } from 'react-router';

import Nav from './components/Nav';
import CategoryPage from './pages/Category';
import ProductDisplay from './pages/Product';
import CheckoutPage from './pages/Checkout';

import GlobalStyle, { Overlay, MainWrapper } from './GlobalStyles';
import { useAppSelector } from './app/hooks';
import { selectCartState } from './features/cart/cartSlice';

function App() {
  const { hidden } = useAppSelector(selectCartState);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {!hidden && <Overlay />}
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
