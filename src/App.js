import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import ProductList from './container/ProductList';
import ProductDetails from './container/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductList />} /> 
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route path="*" element={<div>404 not found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
