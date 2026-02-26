import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string[];
};

export default function Seo({ title, description, keywords = [] }: SeoProps) {
  const fullTitle = `${title} | Deriada Global Resources Limited`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
