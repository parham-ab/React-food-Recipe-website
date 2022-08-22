import http from "./http";

const searchApiDetails = (searchedWord) => {
  return http.get(`/lookup.php?i=${searchedWord}`);
};

export { searchApiDetails };