import axios from "axios";

const API = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const apiClient = axios.create({
  baseURL: API,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const fetchAllRepos = async (username, length) => {
  try {
    const response = await apiClient.get(
      `/users/${username}/repos?sort=updated&direction=desc`
    );
    // console.log("fetchAllRepos", response.data);

    return response.data.slice(0, length);
  } catch (error) {
    console.error("Error fetching user repos:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const fetchSpecificRepo = async (username, repoName) => {
  try {
    const response = await apiClient.get(`/repos/${username}/${repoName}`);
    // console.log("fetchSpecificRepo", response.data);

    return response.data;
  } catch (error) {
    console.error(`Error fetching specific repo ${repoName}:`, error);
    throw error;
  }
};

export const fetchLanguages = async (languages_url) => {
  try {
    const response = await apiClient.get(languages_url);
    return response.data;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
};
