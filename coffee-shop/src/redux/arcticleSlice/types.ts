export interface Article {
  id: number;
  img: string;
  coffeeName: string;
  country: string;
  price: number;
  recommended: boolean;
  desrcription: string;
  createdAt: Date;
}

export interface ArticlesState {
  articles: Article[] | null;
  selectedArticles: Article[] | null;
  loading: boolean;
  error: string | null;
  selectedArticle: Article | null;
}
