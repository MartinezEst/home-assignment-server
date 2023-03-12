interface Category {
  id: string;
  slug: string;
}

interface Competitor {
  id: string;
  name: string;
  score: number;
}

interface Market {
  id: string;
  name: string;
  selections: Selection[];
}

interface Selection {
  id: string;
  name: string;
  odds: number;
}

export interface SportEvent {
  id: string;
  category: Category;
  competitors: Array<Competitor>;
  markets: Array<Market>;
  startTime: Date;
  updatedAt: Date;
}
