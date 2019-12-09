import { formatDate } from "./helpers";

export function appendArticle(article) {
  const newsContainer = document.querySelector(".news");
  newsContainer.insertAdjacentHTML("beforeend", articleStructure(article));
}

function articleStructure(article) {
  return ` <div class="article"><a href="${article.url}" target="_blank">
          <div class="img">
            <img src="${article.urlToImage}" alt="" />
          </div>
          <div class="info">
            <p class="date">${formatDate(article.publishedAt)}</p>
            <p class="source">${article.source.name}</p>
          </div>
          <div class="title">
            <p>${article.title}<span class="author">${article.author}</span></p>
          </div>
          <div class="description">
            <p>${article.description}</p>
          </div>
        </a></div>`;
}
