import { articles } from "../../../data";

// testing a change

export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article #${id} not found.` });
  }
}
