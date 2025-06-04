import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ArticleMeta = {
  title: string;
  date: string;
  slug: string;
  category: string;
};

export function getArticles(category: string): ArticleMeta[] {
  const dir = path.join(process.cwd(), 'src/content', category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

  return files.map((file) => {
    const slug = file.replace('.md', '');
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      slug,
      category
    };
  });
}

export function getArticleContent(category: string, slug: string) {
  const filePath = path.join(process.cwd(), 'src/content', category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return {
    content,
    meta: {
      title: data.title,
      date: data.date,
      category
    }
  };
}
