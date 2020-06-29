import { formatDate } from "./helpers";
import { fetchMoreNews } from "./fetchNews";

export function appendArticle(article) {
  const newsContainer = document.querySelector(".news");
  newsContainer.insertAdjacentHTML("beforeend", articleStructure(article));
}

export function appendButton(value) {
  const pagination = document.querySelector(".pagination");
  pagination.insertAdjacentHTML("beforeend", loadMoreButton());
  const button = document.querySelector(".load-more");
  button.addEventListener("click", fetchMoreNews.bind(null, value));
}

function articleStructure(article) {
  if(article.byline.original === null) {
    article.byline.original = ""
  }
  return `<div class="article"><a href="${article.web_url}" target="_blank">
    <div class="img">
      <img src="https://static01.nyt.com/${article.multimedia[50].url}?quality=75&auto=webp&disable=upscale" itemprop="url" decoding="async" itemid="https://static01.nyt.com/${article.multimedia[50].url}?quality=75&auto=webp&disable=upscale" loading="lazy"/>
      <div class="info">
        <p class="date">${formatDate(article.pub_date)}</p>
      </div>
    </div>
    <div class="title">
      <p class="section"> ${article.section_name}<span class="author"> ${article.byline.original}</span></p>
      <p class="headline"> ${article.headline.main}</p>
    </div>
    <div class="description">
      <p>${article.abstract}...</p>
    </div>
    </a></div>`;
}

function loadMoreButton() {
  return `<div class="load-more" data-page="1"><button>Load more</button></div>`;
}
