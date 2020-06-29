import "../styles/main.scss";
import { fetchNews } from "./fetchNews";
import { appendArticle, appendButton } from "./domMethods";
import { cleanUp, showLoading, hideLoading } from "./helpers";

require("dotenv").config();

/** Listening on the keyup event */
let timeout = null;
const searchInput = document.querySelector("#news-search");
searchInput.onkeyup = getValue;

function getValue(e) {
  const value = e.srcElement.value;
  if (value) {
    showLoading();
  } else hideLoading();
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    if (value) {
      renderNews(value);
    } else cleanUp();
  }, 500);
}

async function renderNews(value) {
  const articles = await fetchNews(value);
  cleanUp();
  hideLoading();
  articles.map(el => {
    appendArticle(el);
  });
  appendButton(value); // the value (the keyword we write inside search) will come here
}
