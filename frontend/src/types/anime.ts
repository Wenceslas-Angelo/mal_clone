interface PaginationItems {
  count: number;
  total: number;
  per_page: number;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page?: number;
  items: PaginationItems;
}

interface imageUrl {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface animeData {
  mal_id: number;
  images: {
    jpg: imageUrl;
  };
  title: string;
  synopsis: string;
  status: string;
  episodes: number;
  score: number;
  scored_by: number;
  genres: [
    {
      mal_id: number;
      name: string;
    }
  ];
  year: number;
}

export interface apiResponse {
  pagination: Pagination;
  data: animeData[];
}
