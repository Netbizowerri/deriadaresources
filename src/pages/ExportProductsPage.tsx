import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';

const products = ['Restaurant Hardwood Charcoal', 'BBQ Hardwood Charcoal', 'Ayin Charcoal', 'Acacia Charcoal', 'Coconut Shell Charcoal', 'Fresh Ginger', 'Split Dry Ginger', 'Garlic', 'Turmeric', 'Soya Beans', 'Dried Hibiscus Flower', 'Organic Chilli Pepper', 'Organic Black Pepper', 'Cashew Nuts', 'Powdered Ginger', 'Powdered Garlic', 'Powdered Turmeric', 'Powdered Soybean'];

export default function ExportProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <Seo title="Export Products" description="Premium export commodities from Nigeria." />
      <SectionHeading title="Export Products" subtitle="Consistent quality, globally compliant products." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product} className="rounded-lg border border-brand-secondary/20 bg-white p-4">{product}</div>
        ))}
      </div>
    </div>
  );
}
