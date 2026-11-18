// Single source of truth for content that appears in multiple places
// (visible HTML, structured data, footer).

export const site = {
  name: 'Craft and Code',
  alternateName: 'Craft & Code',
  url: 'https://craftandcode.be',
  email: 'info@craftandcode.be',
  logo: 'https://craftandcode.be/logo.png',
  // Social share image (1200x630), used for og:image / twitter:image.
  ogImage: 'https://craftandcode.be/og-image.png',
  founder: 'Ward Kennes',
  linkedin: 'https://www.linkedin.com/in/wardkennes/',
  instagram: 'https://www.instagram.com/craftandcode_be/',
  gtmId: 'GTM-WK66RQQD',
  // POST endpoint of the form service behind the contact form (static hosting, no own backend).
  // Leave empty to show the mail fallback instead of sending.
  contactFormEndpoint: 'https://formspree.io/f/mkjjelbl',
  cookieFirstSrc:
    'https://consent.cookiefirst.com/sites/craftandcode.be-c68ffa3a-7fb0-48cd-967d-e1a3696562f6/consent.js',
  // Google Business Profile. Rating and count are not fetched live: update them by hand.
  google: {
    profileUrl: 'https://maps.app.goo.gl/y359GxNteKb8Do1HA',
    // Stable CID link, used in structured data.
    mapsUrl: 'https://maps.google.com/?cid=12708925692475272115',
    rating: 5,
    reviewCount: 5,
  },
  geo: { latitude: 51.0979488, longitude: 4.553275 },
  address: {
    locality: 'Duffel',
    region: 'Antwerpen',
    postalCode: '2570',
    country: 'BE',
  },
};

export const services = [
  {
    name: 'Website op maat met Craft CMS',
    short: 'Website op maat',
    serviceType: 'Webdevelopment',
    text: 'Een contentmodel dat past bij jouw producten en diensten, een beheeromgeving zonder overbodige opties, en snelle laadtijden als uitgangspunt.',
    icon: 'M8 9l-3 3 3 3m8-6l3 3-3 3M13.5 6l-3 12',
  },
  {
    name: 'Web applicaties en maatwerk software',
    short: 'Web applicaties',
    serviceType: 'Softwareontwikkeling',
    text: 'Portalen, tools en interne applicaties voor processen die vandaag in Excel of in mailboxen blijven hangen.',
    icon: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm0 3h16M7.5 6.5h.01M10 6.5h.01',
  },
  {
    name: 'API-koppelingen en integraties',
    short: 'API-koppelingen',
    serviceType: 'Systeemintegratie',
    text: 'Je website koppelen aan je ERP, CRM of voorraadsysteem, zodat data maar op één plek onderhouden wordt.',
    icon: 'M13.5 6.5l4 4M9 21H5a2 2 0 0 1-2-2v-4l6-6 6 6-6 6zM14 4.5l5.5 5.5M12.5 6l5.5 5.5 2.3-2.3a3.9 3.9 0 0 0-5.5-5.5L12.5 6z',
  },
  {
    name: 'Social media campagnes',
    short: 'Social media campagnes',
    serviceType: 'Online marketing',
    text: 'Campagnes opzetten en opvolgen, met tracking die effectief meet welke aanvragen binnenkomen.',
    icon: 'M4 10v4a1 1 0 0 0 1 1h3l5 4V5L8 9H5a1 1 0 0 0-1 1zm13.5-2a5 5 0 0 1 0 8',
  },
];

// Cities shown as chips in the "Werkgebied" section.
// A chip becomes a link automatically once a published region page exists
// with a matching `city` in src/content/regions/.
export const workArea = ['Duffel', 'Kontich', 'Lint', 'Lier', 'Mechelen', 'Antwerpen', 'Rumst', 'Edegem', 'Boechout'];

// Cities listed as areaServed in the organization structured data.
export const areaServed = ['Duffel', 'Antwerpen', 'Mechelen', 'Lier', 'Kontich', 'Lint'];

export const faq = [
  {
    q: 'Wat kost een website op maat?',
    a: 'De prijs hangt af van de omvang: het aantal paginatypes, de functionaliteit en de koppelingen met bestaande systemen. Na een kort gesprek krijg je een onderbouwde inschatting, opgesplitst per onderdeel, zodat je ziet waar het budget naartoe gaat.',
  },
  {
    q: 'Waarom Craft CMS en niet WordPress?',
    a: 'Craft CMS vertrekt van jouw contentmodel in plaats van een thema. Je bouwt de velden die je nodig hebt, redacteuren krijgen een beheeromgeving zonder overbodige opties, en je hebt geen stapel plugins nodig om tot maatwerk te komen. Voor sites die blijven groeien is dat op termijn goedkoper in onderhoud.',
  },
  {
    q: 'Werken jullie ook buiten Duffel?',
    a: 'Ja. Craft and Code werkt voor klanten in Duffel, Antwerpen, Mechelen, Lier en Rumst Overleg gebeurt ter plaatse of digitaal, wat het best past bij het project.',
  },
  {
    q: 'Kan je een bestaande website of applicatie overnemen?',
    a: 'Dat kan. We starten met een technische doorlichting van de code, de hosting en het CMS. Daarna weet je of doorbouwen realistisch is of dat herbouwen op termijn minder kost.',
  },
];

// "Website diensten" section on the homepage: everything around the website itself.
export const websiteServices = [
  {
    name: 'Onderhoud en optimalisatie',
    text: 'Updates, beveiliging en back-ups, en een site die sneller en beter wordt in plaats van te verouderen.',
    icon: 'M10.3 4.3a1.7 1.7 0 0 1 3.4 0 1.7 1.7 0 0 0 2.6 1 1.7 1.7 0 0 1 2.4 2.4 1.7 1.7 0 0 0 1 2.6 1.7 1.7 0 0 1 0 3.4 1.7 1.7 0 0 0-1 2.6 1.7 1.7 0 0 1-2.4 2.4 1.7 1.7 0 0 0-2.6 1 1.7 1.7 0 0 1-3.4 0 1.7 1.7 0 0 0-2.6-1 1.7 1.7 0 0 1-2.4-2.4 1.7 1.7 0 0 0-1-2.6 1.7 1.7 0 0 1 0-3.4 1.7 1.7 0 0 0 1-2.6 1.7 1.7 0 0 1 2.4-2.4 1.7 1.7 0 0 0 2.6-1zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  },
  {
    name: 'UX en UI design',
    text: 'Een structuur en interface waarin bezoekers vinden wat ze zoeken en makkelijk de stap zetten naar contact of aankoop.',
    icon: 'M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zm0 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5zm12 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5z',
  },
  {
    name: 'Content creatie en design',
    text: 'Pagina\'s, visuals en opbouw die samen een duidelijk verhaal vertellen, klaar om zelf verder aan te vullen.',
    icon: 'M4 16l4.6-4.6a2 2 0 0 1 2.8 0L16 16m-2-2l1.6-1.6a2 2 0 0 1 2.8 0L20 14M14 8h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
  },
  {
    name: 'Toegankelijkheid',
    text: 'Een website die ook werkt met toetsenbord, schermlezer en voldoende contrast, getoetst aan de WCAG-richtlijnen.',
    icon: 'M12 4.5a1.5 1.5 0 1 0 0 .01M5 8l7 1.5L19 8M12 9.5V14m0 0l-3 6m3-6l3 6',
  },
  {
    name: 'Grafisch ontwerp',
    text: 'Logo\'s, huisstijlelementen en visuals die online en offline hetzelfde merk uitstralen.',
    icon: 'M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.3M11 7.3l1.7-1.6a2 2 0 0 1 2.8 0l2.8 2.8a2 2 0 0 1 0 2.8L11 18.6M7 17h.01',
  },
  {
    name: 'Copywriting',
    text: 'Teksten in begrijpelijke taal die uitleggen wat je doet en voor wie, geschreven voor mensen en vindbaar voor zoekmachines.',
    icon: 'M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.4-9.4a2 2 0 1 1 2.8 2.8L11.8 15H9v-2.8l8.6-8.6z',
  },
  {
    name: 'SEO en vindbaarheid in AI',
    text: 'Technische SEO, gestructureerde data en content die gevonden wordt in Google en geciteerd door AI-assistenten zoals ChatGPT.',
    icon: 'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  },
];

// Client logos shown on the home page. Files live in /public/clients.
// width/height are the intrinsic dimensions (prevents layout shift).
// `mono` (optional): hand-made black-and-white version, for logos whose colours vanish under a grayscale filter.
// `fit` evens out the optical size: wide logos get less height, compact ones more.
export const clients = [
  { name: 'Bulkmans veranda\'s', logo: '/clients/bulkmans-verandas.svg', width: 160, height: 114, fit: 'max-h-16' },
  { name: 'Imprenta Print Professionals', logo: '/clients/imprenta-logo.png', width: 367, height: 96, fit: 'max-h-10' },
  { name: 'XL Reklame', logo: '/clients/xlreklame-logo.png', width: 212, height: 212, fit: 'max-h-16' },
  { name: 'Straalstudio', logo: '/clients/straalstudio_logo.svg', width: 294, height: 172, fit: 'max-h-14' },
  { name: 'Vloerwerken Ceuppens', logo: '/clients/vloerwerken-ceuppens-logo.svg', width: 290, height: 78, fit: 'max-h-11' },
  { name: 'Verhoeven Architectenbureau', logo: '/clients/verhoeven-architectenbureau-logo.png', width: 333, height: 180, fit: 'max-h-14' },
  { name: 'Morel & Co Vastgoedprojecten', logo: '/clients/morelandco-logo.svg', mono: '/clients/morelandco-logo-mono.svg', width: 156, height: 121, fit: 'max-h-16' },
  { name: 'CAR Antenne 3000 vzw', logo: '/clients/antenne3000-logo.avif', width: 480, height: 525, fit: 'max-h-16 sm:max-h-20' },
] as const;
