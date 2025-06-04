import { getArticleContent } from '@/lib/getArticles';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export default function ArticlePage({ params }: Props) {
  const data = getArticleContent(params.category, params.slug);

  if (!data) return notFound();

  const { meta, content } = data;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{meta.date} · {meta.category}</p>

      <article className="prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
