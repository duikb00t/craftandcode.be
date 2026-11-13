import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'kennisbank'>;

export const kennisbankPath = '/kennisbank/';
export const articlePath = (entry: Article) => `${kennisbankPath}${entry.id}/`;

/** Published articles, newest first. */
export async function getArticles() {
  const entries = await getCollection('kennisbank', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

const dateFormat = new Intl.DateTimeFormat('nl-BE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Brussels' });
export const formatDate = (date: Date) => dateFormat.format(date);
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
