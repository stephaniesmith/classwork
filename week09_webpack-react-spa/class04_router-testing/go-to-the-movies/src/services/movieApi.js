const BASE_URL = 'http://www.omdbapi.com';
const API_KEY = '3db77742';
const URL = `${BASE_URL}/?apikey=${API_KEY}`;

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData)

export function checkResponseData(response) {
  if(response.Response === 'False') throw response.Error;
  return response;
}

export function search(term, page) {
  const url = `${URL}&s=${encodeURIComponent(term)}&page=${page}`;
  return get(url);
}

export function getMovie(id) {
  const url = `${URL}&i=${id}`;
  return get(url);
}

