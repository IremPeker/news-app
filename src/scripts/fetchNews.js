import axios from "axios";
import { appendArticle } from "./domMethods";

let apiKey = process.env.API_KEY;

export async function fetchNews(term) {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${apiKey}`;
  const res = await axios.get(url);
  const articles = res.data.response.docs;
  return articles;
}

export async function fetchMoreNews(term) {
  const button = document.querySelector(".load-more");
  let page = button.dataset.page;
  page = parseInt(page);
  page++;
  button.setAttribute("data-page", page.toString());
  const params = {
    q: term,
    pageSize: 100,
    page
  };

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${apiKey}&pageSize=${params.pageSize}&page=${params.page}`;
  const res = await axios.get(url);
  const articles = res.data.response.docs;
  articles.map(el => {
    appendArticle(el);
  });
}

