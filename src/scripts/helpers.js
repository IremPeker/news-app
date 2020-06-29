export function formatDate(dt) {
  const date = new Date(dt);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function cleanUp() {
  const news = document.querySelector(".news");
  const pagination = document.querySelector(".pagination");
  news.innerHTML = "";
  pagination.innerHTML = "";
}

export function showLoading() {
  const news = document.querySelector("#news-search");
  news.classList.add("loading");
}

export function hideLoading() {
  const news = document.querySelector("#news-search");
  news.classList.remove("loading");
}
