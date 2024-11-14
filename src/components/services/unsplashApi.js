const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchImages(query, page) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${ACCESS_KEY}`
  );
  const data = await response.json();
  return data.results;
}
