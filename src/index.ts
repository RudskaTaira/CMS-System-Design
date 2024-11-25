import { Article } from './content/Article';
import { Versioned } from './version/Versioned';
import { createVersion } from './version/VersionControl';
import { articleValidator } from './validation/ArticleValidator';

const initialArticle: Versioned<Article> = {
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'published',
  title: 'Understanding TypeScript and Its Applications',
  body: 'This article introduces TypeScript, its features, and why it is preferred over JavaScript in large-scale projects.',
  author: 'John Smith',
  tags: ['TypeScript', 'Programming', 'Software Engineering'],
  version: 2,
  previousVersions: []
};

const updatedArticle = createVersion(initialArticle);

const validationResult = articleValidator.validate(updatedArticle);

console.log('New Version:', updatedArticle);
console.log('Validation Result:', validationResult);
