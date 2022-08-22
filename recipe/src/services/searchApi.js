import http from "./http";

const searchApi = (searchedWord) => {
  return http.get(`/search.php?s=${searchedWord}`);
};

export { searchApi };