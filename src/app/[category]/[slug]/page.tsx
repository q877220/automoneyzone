import { getArticleContent } from '@/lib/getArticles';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  return []; // 后期可用于预构建路径
}

export default function ArticlePage({ params }: { params: { category: string; slug: string } }) {
  const data = getArticleContent(params.category, params.slug);

  if (!data) return notFound();

  const { meta, content } = data;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {meta.date} · {meta.category}
      </p>

      <article className="prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
