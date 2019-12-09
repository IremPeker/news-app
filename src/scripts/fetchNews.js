// this is how to import a package

import axios from "axios";

let apiKey = "";

// this is how we will export a file
// you also have to import it in index.js

export async function fetchNews(term) {
  // console.log(`I will fetch news about ${term}`);
  const params = {
    q: term,
    apiKey,
    pageSize: 20,
    page: 1
  };

  const url = `https://newsapi.org/v2/everything?q=${term}&apiKey=${apiKey}&pageSize=${params.pageSize}&page=${params.page}`;
  const res = await axios.get(url);
  const articles = res.data.articles;
  return articles; // this one returns a promise
}

//console.log(module.exports); // output is I will fetch news about [word you write inside input]

// ANOTHER WAY TO EXPORT A FILE => module.exports = { fetchNews };
// in order async function to work on webpack (because normally webpack is promised based) you have to add:
// in webpack config file => entry: ['babel-polyfill', './src/scripts/index.js'],
// in package json => "babel-plugin-transform-async-to-generator": "^6.5.0",
// => "babel-polyfill": "^6.5.0",
// then make npm install and npm start again
