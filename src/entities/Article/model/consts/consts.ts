export enum ArticleType {
  ALL = 'all',
  IT = 'IT',
  SCIENSE = 'SCIENSE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
  BIG = 'BIG', // строчное отображение статей
  SMALL = 'SMALL', // плиточное отображение статей
}

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}
