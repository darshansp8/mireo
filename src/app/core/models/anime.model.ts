export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: AnimeImage;
    webp: AnimeImage;
  };
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
      image_url: string | null;
      small_image_url: string | null;
      medium_image_url: string | null;
      large_image_url: string | null;
      maximum_image_url: string | null;
    };
  };
  approved: boolean;
  titles: AnimeTitle[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: AnimeAired;
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: AnimeBroadcast | null;
  producers: AnimeMeta[];
  licensors: AnimeMeta[];
  studios: AnimeMeta[];
  genres: AnimeMeta[];
  explicit_genres: AnimeMeta[];
  themes: AnimeMeta[];
  demographics: AnimeMeta[];
}

export interface AnimeImage {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface AnimeTitle {
  type: string;
  title: string;
}

export interface AnimeAired {
  from: string | null;
  to: string | null;
  prop: {
    from: AnimeDatePart;
    to: AnimeDatePart;
  };
  string: string;
}

export interface AnimeDatePart {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface AnimeBroadcast {
  day: string | null;
  time: string | null;
  timezone: string | null;
  string: string | null;
}

export interface AnimeMeta {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
