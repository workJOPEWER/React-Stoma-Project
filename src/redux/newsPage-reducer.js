import { categoryAPI, postAPI } from "../api/api";


let SET_POSTS_LIST = "stomamd/newsPage/SET_POSTS_LIST"; //redux ducks
let SET_POST_ITEM = "stomamd/newsPage/SET_POST_ITEM";
let SET_CURRENT_PAGE = "stomamd/newsPage/SET_CURRENT_PAGE";
let SET_CATEGORY_NAME = "stomamd/newsPage/SET_CATEGORY_NAME";
let SET_TOTAL_ITEM_COUNT = "stomamd/newsPage/SET_TOTAL_ITEM_COUNT";
let TOOGLE_IS_FECHING = "stomamd/newsPage/TOOGLE_IS_FECHING";
let SET_DATE_FORMAT = "stomamd/newsPage/SET_DATE_FORMAT";

let initialState = {
  posts: [],
  postItem: null,
  categoryName: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  date: null
};

const newsPageReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_POSTS_LIST: {
      return { ...state, posts: action.posts };
    }

    case SET_POST_ITEM: {
      return { ...state, postItem: action.postItem };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_ITEM_COUNT: {
      return { ...state, totalCount: action.count };
    }

    case TOOGLE_IS_FECHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case SET_DATE_FORMAT: {
      return { ...state, date: action.date };
    }

    case SET_CATEGORY_NAME: {
      return { ...state, categoryName: action.category };
    }

  }

  return state;
};

export const setPostsList = (posts) => ({ type: SET_POSTS_LIST, posts });
export const setPostItem = (postItem) => ({ type: SET_POST_ITEM, postItem });
export const setCategoryName = (category) => ({ type: SET_CATEGORY_NAME, category });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalItemsCount = (totalCount) => ({ type: SET_TOTAL_ITEM_COUNT, count: totalCount });
export const toggleisFetching = (isFetching) => ({ type: TOOGLE_IS_FECHING, count: isFetching });
export const setDateFormat = (date) => ({ type: SET_DATE_FORMAT, date });

export const getNews = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleisFetching(true));
    dispatch(setCurrentPage(page));
    let data = await postAPI.getNews(page, pageSize);
    dispatch(toggleisFetching(false));
    dispatch(setPostsList(data.data));
    dispatch(setTotalItemsCount(data.total));
    dispatch(setDateFormat(data.created_at));
  };
};

export const getArticles = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleisFetching(true));
    dispatch(setCurrentPage(page));
    let data = await postAPI.getArticles(page, pageSize);
    dispatch(toggleisFetching(false));
    dispatch(setPostsList(data.data));
    dispatch(setTotalItemsCount(data.total));
    dispatch(setDateFormat(data.created_at));
  };
};

export const getCategoryName = () => {
  return (dispatch) => {
    categoryAPI.getCategory()
      .then(data => {
        dispatch(setCategoryName(data));
      });
  };
};

export const getCatPosts = (page, pageSize, slug) => {
  return async (dispatch) => {
    dispatch(toggleisFetching(true));
    dispatch(setCurrentPage(page));
    let data = await categoryAPI.getCategories(page, pageSize, slug);
    dispatch(toggleisFetching(false));
    dispatch(setPostsList(data.data));
    dispatch(setTotalItemsCount(data.total));
    dispatch(setDateFormat(data.created_at));
  };
};

export default newsPageReducer;