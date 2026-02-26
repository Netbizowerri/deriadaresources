import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';

const products = ['Restaurant Hardwood Charcoal', 'BBQ Hardwood Charcoal', 'Ayin Charcoal', 'Acacia Charcoal', 'Coconut Shell Charcoal', 'Fresh Ginger', 'Split Dry Ginger', 'Garlic', 'Turmeric', 'Soya Beans', 'Dried Hibiscus Flower', 'Organic Chilli Pepper', 'Organic Black Pepper', 'Cashew Nuts', 'Powdered Ginger', 'Powdered Garlic', 'Powdered Turmeric', 'Powdered Soybean'];

export default function HomePage() {
  return (
    <>
      <Seo title="Home" description="Premier export and import company in West Africa, Nigeria." keywords={["West Africa Export Company", "Hardwood Charcoal Exporter", "Freight Forwarding Nigeria"]} />
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary px-4 py-20 text-white lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-sm">Certified Export Company</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Your Premier Export & Import Partner in West Africa</h1>
          <p className="mt-5 max-w-3xl text-lg">Certified export company delivering premium hardwood charcoal, agricultural commodities, spices, and seamless global trade solutions.</p>
          <div className="mt-8 flex gap-4">
            <Link to="/export-products" className="rounded bg-brand-accent px-5 py-3 font-semibold text-brand-dark">Explore Our Products</Link>
            <Link to="/contact" className="rounded border border-white px-5 py-3 font-semibold">Contact Us</Link>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading title="Who We Are" subtitle="Deriada Global Resources Limited is a certified export company under the Nigerian Export Promotion Council. We specialize in agricultural exports, import services, freight forwarding, and clearing & forwarding." />
      </section>

      <section className="bg-white px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Our Core Services" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Export Services', 'Premium export of hardwood charcoal, ginger, garlic, soybeans, spices, and agro-commodities meeting international standards.'],
              ['Import Services', 'Seamless import solutions with customs compliance, documentation handling, and reliable global sourcing.'],
              ['Logistics Services', 'Freight forwarding, clearing & forwarding, and secure global shipment coordination.']
            ].map(([title, desc]) => (
              <motion.article key={title} whileHover={{ y: -6 }} className="assemble rounded-xl border border-brand-primary/10 bg-brand-light p-6">
                <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
                <p className="mt-2 text-brand-dark/80">{desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading title="Our Export Products" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product} className="disintegrate-hover rounded-lg border border-brand-secondary/20 bg-white p-4">
              {product}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-primary px-4 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading title="Why Choose Deriada?" />
          <ul className="grid gap-4 md:grid-cols-5">
            {['Certified Export Company', 'Global Logistics Network', 'Strict Quality Assurance', 'Sustainable Sourcing Practices', 'Customer-Centric Approach'].map((point) => (
              <li key={point} className="float-animate rounded bg-white/10 p-4">{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center lg:px-8">
        <h3 className="text-3xl font-bold text-brand-primary">Ready to Partner with a Reliable Global Trade Company?</h3>
        <Link to="/contact" className="mt-6 inline-block rounded bg-brand-accent px-6 py-3 font-semibold text-brand-dark">Request a Quote</Link>
      </section>
    </>
  );
}
