let SET_CATEGORY_INFO = "SET_CATEGORY_INFO";
let SET_CATEGORY_ARTICLE_ITEM = "SET_CATEGORY_ARTICLE_ITEM";
let SET_CURRENT_ARTICLE = "SET_CURRENT_ARTICLE";

const EXPAND_CARD = "EXPAND_CARD";
const SHOW_COLLAPSE = "SHOW_COLLAPSE";

let initialState = {
  categoryInfo: [],
  categoryArticle: [],
};

const AccordionReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_CATEGORY_INFO: {
      return { ...state, categoryInfo: action.categoryInfo };
    }

    case SET_CATEGORY_ARTICLE_ITEM: {
      return { ...state, categoryArticle: action.categoryArticle };
    }

    default:
      return state;
  }
};

export const setCategoryInfo = (categoryInfo) => ({ type: SET_CATEGORY_INFO, categoryInfo });
export const setCategoryArticle = (categoryArticle) => ({ type: SET_CATEGORY_ARTICLE_ITEM, categoryArticle });


export default AccordionReducer;