import { db } from '@/db';
import { categories } from '@/db/schema';

const categoryNames = [
  'Cars and vehicles',
  'Comedy',
  'Education',
  'Entertainment',
  'Film and animation',
  'Gaming',
  'How-to and style',
  'Music',
  'News and politics',
  'People and blogs',
  'Pets and animals',
  'Science and technology',
  'Sports',
  'Travel and events',
];

async function main() {
  console.log('Seeding categories');

  try {
    const values = categoryNames.map((name) => ({
      name,
      descrioption: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log('Categories seeded successfully');
  } catch (error) {
    console.log('Error seeding categories', error);
    process.exit(1);
  }
}

main();
