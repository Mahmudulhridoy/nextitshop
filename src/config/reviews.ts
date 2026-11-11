// Approved customer reviews shown on the site. Source: /content/reviews.json
// New submissions arrive via FormSubmit to the configured business email.
// To publish one, copy it into content/reviews.json (see BLOG-GUIDE.md → "Feedback").
import reviewsData from "../../content/reviews.json";

export type Review = {
  name: string;
  service: string;
  rating: number; // 1-5
  message: string;
  date: string; // YYYY-MM-DD
};

export const reviews: Review[] = (reviewsData as Review[])
  .filter((r) => r && r.message && r.rating >= 1 && r.rating <= 5)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const reviewStats = {
  count: reviews.length,
  average: reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0,
};
