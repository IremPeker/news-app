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
  const loading = document.querySelector('.loading');
  loading.style.visibility = 'visible';
  setTimeout(function(){
    loading.style.visibility = 'hidden';
 }, 4000);
}

export function hideLoading() {
  const loading = document.querySelector('.loading');
  loading.style.visibility = 'hidden';
}

export function showError() {
  const error = document.querySelector('.error-message');
  error.style.display = 'block';
}

export function hideError() {
  const error = document.querySelector('.error-message');
  error.style.display = 'none';
}

export function hideNotFound() {
  const notFoundMessage = document.querySelector('.not-found');
  notFoundMessage.style.display = 'none';
}
