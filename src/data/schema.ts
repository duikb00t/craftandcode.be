import { site, services, areaServed } from './site';

export const organizationId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;

export function organizationSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': organizationId,
    name: site.name,
    alternateName: site.alternateName,
    url: site.url,
    logo: site.logo,
    image: site.logo,
    description:
      'Craft and Code bouwt websites op maat, Craft CMS oplossingen, web applicaties en API-koppelingen voor bedrijven in Kontich, Antwerpen en Mechelen.',
    email: site.email,
    founder: {
      '@type': 'Person',
      name: site.founder,
      jobTitle: 'Webdeveloper',
      sameAs: [site.linkedin, site.instagram],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: areaServed.map((name) => ({ '@type': 'City', name })),
    knowsAbout: ['Craft CMS', 'Webdevelopment', 'Maatwerk software', 'API-koppelingen', 'Web applicaties'],
    sameAs: [site.linkedin],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Diensten',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, serviceType: s.serviceType },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: site.url,
    name: site.name,
    inLanguage: 'nl-BE',
    publisher: { '@id': organizationId },
  };
}
