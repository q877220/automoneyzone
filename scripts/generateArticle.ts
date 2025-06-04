import fs from 'fs';
import path from 'path';

const categories = {
  'side-hustles': '适合普通人的副业项目有哪些？',
  'ai-tools': '推荐几个实用的AI工具',
  'movie-recommend': '有哪些小众高分的电影推荐？',
  'recipes': '一个简单易做的家庭菜谱'
};

// 模拟文章内容（你可替换成GPT内容）
function fakeArticle(topic: string) {
  return `
这是关于 **${topic}** 的内容范例。

你可以将这里替换为真正由 AI 生成的内容。
`;
}

function createArticle(category: string, topic: string) {
  const date = new Date().toISOString().split('T')[0];
  const fileName = `post-${Date.now()}.md`;
  const dirPath = path.join(__dirname, `../src/content/${category}`);
  const filePath = path.join(dirPath, fileName);

  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const content = `---
title: "${topic}"
date: "${date}"
---

${fakeArticle(topic)}
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ 已生成文章: ${filePath}`);
}

for (const [cat, topic] of Object.entries(categories)) {
  createArticle(cat, topic);
}
