export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-brand-primary">{title}</h2>
      {subtitle && <p className="mx-auto mt-2 max-w-3xl text-brand-dark/80">{subtitle}</p>}
    </div>
  );
}
