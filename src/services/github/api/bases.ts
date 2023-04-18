import axios from "axios";

export const githubUsersBaseApi = axios.create({
  baseURL: "https://api.github.com/users"
});

export const githubSearchsBaseApi = axios.create({
  baseURL: "https://api.github.com/search"
})

export const githubUserReposBaseApi = axios.create({
  baseURL: "https://api.github.com/repos"
})