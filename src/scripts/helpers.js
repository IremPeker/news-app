// exported here and imported in the file that will be used

export function formatDate(dt) {
  const date = new Date(dt);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// below function is to be able to clean the search results and search for other keyword spontenously
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
