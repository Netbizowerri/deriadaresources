import { createContext, useContext } from 'react';

type SiteContextType = {
  companyName: string;
  tagline: string;
  formspreeEndpoint: string;
};

const siteData: SiteContextType = {
  companyName: 'Deriada Global Resources Limited',
  tagline: 'Elevating Exports, Expanding Horizons',
  formspreeEndpoint: 'https://formspree.io/f/your-form-id'
};

const SiteContext = createContext<SiteContextType>(siteData);

export const SiteProvider = SiteContext.Provider;

export const useSite = () => useContext(SiteContext);

export { siteData };
