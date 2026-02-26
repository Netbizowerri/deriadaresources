import Seo from '../components/Seo';

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
      <Seo title="Shop" description="Request products directly from Deriada." />
      <h1 className="text-4xl font-bold text-brand-primary">Shop</h1>
      <p className="mt-4 text-brand-dark/80">Catalog and cart integrations can be connected here when required. For now, request product pricing through the contact form for tailored quotations.</p>
    </div>
  );
}
