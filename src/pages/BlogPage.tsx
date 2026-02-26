import Seo from '../components/Seo';

const posts = [
  ['Unlocking West Africa\'s Export Potential: Your Gateway to Premium Exports', 'Export Services'],
  ['Streamlining Imports with Deriada: Your Reliable Partner for Seamless International Trade', 'Import Services'],
  ['Navigating Global Logistics: The Deriada Advantage for Reliable and Secure Shipments', 'Logistics Services']
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
      <Seo title="Blog" description="Insights on export, import and logistics in West Africa." />
      <h1 className="text-4xl font-bold text-brand-primary">Insights</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {posts.map(([title, category]) => (
          <article key={title} className="rounded-xl border border-brand-primary/10 bg-white p-6">
            <p className="text-sm font-semibold text-brand-accent">{category}</p>
            <h2 className="mt-2 text-lg font-semibold text-brand-primary">{title}</h2>
          </article>
        ))}
      </div>
    </div>
  );
}
