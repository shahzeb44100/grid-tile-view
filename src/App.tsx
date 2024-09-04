import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GridView from './components/viewOptions/GridView';
import TileView from './components/viewOptions/TileView';
import { Product } from './types';
import { fetchProductData } from './utils/api';
import NavBar from './components/navbar/NavBar';
import CommonHeader from './header/CommonHeader';
import NotFoundPage from './pageNotFound/NotFoundPage';

const App: React.FC = () => {
  const [view, setView] = React.useState<'grid' | 'tile'>('grid');
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleViewChange = (newView: 'grid' | 'tile') => setView(newView);

  React.useEffect(() => {
    setLoading(true);
    fetchProductData(3, 12)
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error("Something went wrong", error);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="app-container bg-customGray">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <CommonHeader heading="Product Listing" handleViewChange={handleViewChange}/>
              <main className="p-4">
                {view === 'grid' && <GridView products={products} loading={loading} />}
                {view === 'tile' && products.map((product) => (
                  <TileView key={product.id} product={product} />
                ))}
              </main>
            </>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
