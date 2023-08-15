import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./container/Header";
import { ProductList } from "./container/ProductList";
import { ProductDetails } from "./container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          {/* This route will handle the "404 Not Found" case */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

// Define a NotFound component to handle 404 errors
function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
