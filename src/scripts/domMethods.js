import { formatDate } from "./helpers";
import { fetchMoreNews } from "./fetchNews";

export function appendArticle(article) {
  const newsContainer = document.querySelector(".news");
  newsContainer.insertAdjacentHTML("beforeend", articleStructure(article));
}

export function appendButton(value) {
  // still we are taking the keyword in the searchbox(value) to this function
  const pagination = document.querySelector(".pagination");
  pagination.insertAdjacentHTML("beforeend", loadMoreButton());
  const button = document.querySelector(".load-more");
  // see below reference for dataset
  button.addEventListener("click", fetchMoreNews.bind(null, value));
}

function articleStructure(article) {
  if (article.description)
    article.description = article.description
      .split(" ")
      .slice(0, 25)
      .join(" ");
  return `<div class="article"><a href="${article.url}" target="_blank">
    <div class="img">
      <img src="${article.urlToImage}" alt="" loading="lazy"/>
      <div class="info">
        <p class="date">${formatDate(article.publishedAt)}</p>
        <p class="source">${article.source.name}</p>
      </div>
    </div>
    <div class="title">
      <p> ${article.title}<span class="author"> by ${article.author}</span></p>
    </div>
    <div class="description">
      <p>${article.description}...</p>
    </div>
    </a></div>`;
}

function loadMoreButton() {
  return `<div class="load-more" data-page="1"><button>Load more</button></div>`;
}

// Dataset REsources => https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
// Everything you pass by using "data-..." will be inside dataset
