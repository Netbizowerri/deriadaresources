import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';

const sections = [
  ['Export Services', 'We provide structured export solutions for hardwood charcoal and agricultural commodities. From sourcing to international delivery, we ensure compliance, quality assurance, and secure shipping.'],
  ['Import Services', 'Our import services simplify global sourcing with full customs documentation, regulatory compliance, and reliable delivery to your destination.'],
  ['Logistics Services', 'We offer freight forwarding, clearing & forwarding, cargo handling, and shipment tracking to ensure timely and secure delivery worldwide.']
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <Seo title="Services" description="Export, import and logistics solutions." />
      <SectionHeading title="Our Services" subtitle="Integrated services tailored for global trade success." />
      <div className="grid gap-6 md:grid-cols-3">
        {sections.map(([title, content]) => (
          <article key={title} className="rounded-xl border border-brand-primary/10 bg-white p-6">
            <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
            <p className="mt-2 text-brand-dark/80">{content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
