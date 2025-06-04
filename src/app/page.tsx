import Link from 'next/link';
import { getArticles } from '@/lib/getArticles';

const categories = ['side-hustles', 'ai-tools', 'movie-recommend', 'recipes'];

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">📚 AutoMoneyZone</h1>
      {categories.map((cat) => {
        const articles = getArticles(cat);
        return (
          <section key={cat} className="mb-10">
            <h2 className="text-2xl font-semibold capitalize mb-2">{cat.replace('-', ' ')}</h2>
            <ul className="space-y-2">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/${a.category}/${a.slug}`} className="text-blue-500 hover:underline">
                    {a.title} <span className="text-gray-400 text-sm">({a.date})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
