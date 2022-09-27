import { Route, Routes } from 'react-router';
import { Page1 } from './pages/Checkout';
import CategoryPage from './pages/Category';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
