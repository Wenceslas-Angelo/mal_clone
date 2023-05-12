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
