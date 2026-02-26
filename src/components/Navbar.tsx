import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Export Products', '/export-products'],
  ['Import Services', '/import-services'],
  ['Logistics', '/logistics'],
  ['Shop', '/shop'],
  ['Blog', '/blog'],
  ['Contact', '/contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/10 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="text-lg font-bold text-brand-primary">DERIADA RESOURCES</Link>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <ul className="hidden gap-4 md:flex">
          {links.map(([label, path]) => (
            <li key={path}>
              <NavLink to={path} className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-brand-accent' : 'text-brand-dark'} hover:text-brand-secondary`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="space-y-2 border-t border-brand-primary/10 bg-white p-4 md:hidden">
          {links.map(([label, path]) => (
            <li key={path}>
              <NavLink to={path} onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-brand-light">
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
