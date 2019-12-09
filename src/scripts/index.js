// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

import { fetchNews } from "./fetchNews"; // if the thing you will import is an object you have to write like this {fetchNews}
import { appendArticle } from "./appendArticle";
// \/ All of your javascript should go here \/
// LIstening on the keyuo event
let timeout = null;
const searchInput = document.querySelector("#news-search");
searchInput.onkeyup = getValue;

function getValue(e) {
  //   console.log(e.srcElement.value);  // gives the same value as searchInput.value
  // below function will wait 500ms to get the e.srcElement.value
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    const value = e.srcElement.value;
    renderNews(value);
  }, 500);
}

async function renderNews(value) {
  const articles = await fetchNews(value);
  articles.map(el => appendArticle(el));
}
