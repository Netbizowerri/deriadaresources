import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { SiteProvider, siteData } from './context/SiteContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ExportProductsPage = lazy(() => import('./pages/ExportProductsPage'));
const ImportServicesPage = lazy(() => import('./pages/ImportServicesPage'));
const LogisticsPage = lazy(() => import('./pages/LogisticsPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  return (
    <SiteProvider value={siteData}>
      <MainLayout>
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/export-products" element={<ExportProductsPage />} />
            <Route path="/import-services" element={<ImportServicesPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </SiteProvider>
  );
}
