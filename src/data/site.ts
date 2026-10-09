// Single source of truth for content that appears in multiple places
// (visible HTML, structured data, footer).

export const site = {
  name: 'Craft and Code',
  alternateName: 'Craft & Code',
  url: 'https://craftandcode.be',
  email: 'info@craftandcode.be',
  logo: 'https://i.imgur.com/9k4m2Og.png',
  founder: 'Ward Kennes',
  linkedin: 'https://www.linkedin.com/in/wardkennes/',
  instagram: 'https://www.instagram.com/craftandcode_be/',
  gtmId: 'GTM-WK66RQQD',
  cookieFirstSrc:
    'https://consent.cookiefirst.com/sites/craftandcode.be-c68ffa3a-7fb0-48cd-967d-e1a3696562f6/consent.js',
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
