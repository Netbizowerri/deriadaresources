import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-dark py-10 text-brand-light">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-brand-accent">Deriada Global Resources Limited</h3>
          <p className="mt-2 text-sm text-white/80">Elevating Exports, Expanding Horizons</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm text-white/80">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/export-products">Export Products</Link></li>
            <li><Link to="/contact">Request Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Location</h4>
          <p className="mt-2 text-sm text-white/80">West Africa, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
