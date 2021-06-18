import { createSelector } from "reselect";

const getPostsSelector = (state) => {
  return state.newsPage.posts;
};

export const getPosts = createSelector( getPostsSelector,
  (posts) => {
    return posts.filter( p => true);
  });

export const getPageSize = (state) => {
  return state.newsPage.pageSize;
};

export const getTotalCount = (state) => {
  return state.newsPage.totalCount;
};

export const getCurrentPage = (state) => {
  return state.newsPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.newsPage.isFetching;
};

