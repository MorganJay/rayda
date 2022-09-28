import { Route, Routes } from 'react-router';

import Nav from './components/Nav';
import CategoryPage from './pages/Category';
import ProductDisplay from './pages/Product';
import CheckoutPage from './pages/Checkout';

import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
