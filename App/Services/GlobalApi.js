import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});
const apiKey = "?country=us&apiKey=0e3527cc51c744cfa0d18174d46119fa";

const getTopHeadline = api.get("/top-headlines" + apiKey);
const getByCategory = (category) =>
  api.get(
    "/everything?q=" + category + "&apiKey=0e3527cc51c744cfa0d18174d46119fa"
  );

export default { getTopHeadline, getByCategory };

// https://newsapi.org/v2/top-headlines?country=us&apiKey=0e3527cc51c744cfa0d18174d46119fa
