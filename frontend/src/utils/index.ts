import { AnimeState } from '../types/anime';

export const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  }
  const lastSpace = text.lastIndexOf(' ', limit);
  const textTruncate = text.substring(0, lastSpace) + '...';
  return textTruncate;
};

export const stars = (rating: number) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStarStyle = 'text-yellow-400';
  const emptyStarStyle = 'text-secondary3';
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const starStyle = i < roundedRating ? fullStarStyle : emptyStarStyle;
    stars.push(starStyle);
  }
  return stars;
};

export const initialData: AnimeState = {
  data: [],
  pagination: {
    last_visible_page: 0,
    has_next_page: false,
    current_page: 0,
    items: {
      count: 0,
      total: 0,
      per_page: 0,
    },
  },
};
