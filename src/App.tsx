import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { AnalyticsConsentProvider } from '@/context/AnalyticsConsentContext';
import { PageViewTracker } from '@/components/PageViewTracker';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Catalog } from '@/pages/Catalog';
import { Checkout } from '@/pages/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsConsentProvider>
        <PageViewTracker />
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="catalogo" element={<Catalog />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </CartProvider>
      </AnalyticsConsentProvider>
    </BrowserRouter>
  );
}
