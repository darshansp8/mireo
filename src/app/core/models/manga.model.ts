export interface Manga {
  mal_id: number;
  url: string;
  images: {
    jpg: MangaImage;
    webp: MangaImage;
  };
  approved: boolean;
  titles: MangaTitle[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string | null;
  chapters: number | null;
  volumes: number | null;
  status: string;
  publishing: boolean;
  published: MangaPublished;
  score: number | null;
  scored_by: number;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  authors: MangaMeta[];
  serializations: MangaMeta[];
  genres: MangaMeta[];
  explicit_genres: MangaMeta[];
  themes: MangaMeta[];
  demographics: MangaMeta[];
}

export interface MangaImage {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface MangaTitle {
  type: string;
  title: string;
}

export interface MangaPublished {
  from: string | null;
  to: string | null;
  prop: {
    from: MangaDatePart;
    to: MangaDatePart;
  };
  string: string;
}

export interface MangaDatePart {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface MangaMeta {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface MangaPagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface MangaListResponse {
  data: Manga[];
  pagination: MangaPagination;
}

export interface MangaResponse {
  data: Manga;
}
