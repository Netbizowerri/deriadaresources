import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
      <Seo title="About" description="About Deriada Global Resources Limited." />
      <SectionHeading title="About Deriada" />
      <p className="text-lg leading-8 text-brand-dark/85">Deriada Global Resources Limited is incorporated under the Companies and Allied Matters Act 2022 and recognized by the Nigerian Export Promotion Council. We connect Nigerian commodities and international markets through trusted export, import, and logistics operations.</p>
    </div>
  );
}
