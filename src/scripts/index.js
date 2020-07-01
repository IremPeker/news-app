import "../styles/main.scss";
import { fetchNews } from "./fetchNews";
import { appendArticle, appendButton, appendNotFound } from "./domMethods";
import { cleanUp, showLoading, hideLoading, showError, hideError, hideNotFound } from "./helpers";
require("dotenv").config();

let timeout = null;
const searchInput = document.querySelector("#news-search");
hideError();
hideLoading();

searchInput.addEventListener('keypress', function () {
  const value = searchInput.value;
  
  if (value.length < 2) {
    showError();
    hideLoading();
  }
  else if (value.length >= 2) {
    hideError();
    showLoading();
  }
  else {
    hideError();
    hideLoading();
  }
  
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    if (value) {
      renderNews(value);
    } else cleanUp();
  }, 500);
});

async function renderNews(value) {
  const articles = await fetchNews(value);
  cleanUp();

  if(articles.length > 0) {
    hideNotFound();
    articles.map(el => {
      appendArticle(el);
    });
    appendButton(value); 
  }
  else {
    return appendNotFound();
  }
}
