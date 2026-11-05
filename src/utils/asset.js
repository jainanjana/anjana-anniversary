// Builds a URL for a file inside /public that works locally and on GitHub Pages.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
