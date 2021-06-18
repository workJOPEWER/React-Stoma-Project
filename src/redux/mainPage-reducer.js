import { postAPI } from "../api/api";
let SET_NEWS_POST_LIST = "stomamd/mainPage/SET_NEWS_POST_LIST"; //redux ducks
let SET_ARTICLES_POST_LIST = "stomamd/mainPage/SET_ARTICLES_POST_LIST";


let initialState = {
  headings: {
    themes: [
      {
        id: "1",
        subtitle: "Oсновные",
        title: "темы портала"
      }
    ],
    news: [
      {
        id: "1",
        subtitle: "События",
        title: "новости",
        aTitle: "статьи"
      }
    ],
    partners: [{
      id: "5",
      subtitle: "наши",
      title: "партнеры"
    }],
    about: [{
      id: "1",
      subtitle: "о нас",
      title: "наши цели"
    }],
    contacts: [{
      id: "1",
      subtitle: "мы на связи",
      title: "контакты"
    }]
  },
  themes: [
    {
      id: "1",
      title: "все про стому",
      descr: "В данном разделе Вы сможете подробно узнать о разновидностях и особенностях стомы",
      imgUrl: "https://stoma.md/images/stoma.jpg",
      link: "/info/vse-pro-stomu/110"
    },
    {
      id: "2",
      title: "жизнь со стомой",
      descr: "В данном разделе Вы узнаете о том, что стома не является препятствием к полноценной жизни",
      imgUrl: "https://stoma.md/images/livestoma.jpg",
      link: "/info/zizn-so-stomoi/117"
    },
    {
      id: "3",
      title: "средства ухода",
      descr: "В данном разделе Вы узнаете о средствах ухода и правилах их использования",
      imgUrl: "https://stoma.md/images/care.jpg",
      link: "/info/sredstva-uxoda/122"
    },
    {
      id: "4",
      title: "порядок обеспечения",
      descr: "В данном разделе Вы узнаете о том, как можете получить средства ухода за стомой, и познакомитесь с законами ",
      imgUrl: "https://stoma.md/images/ruls.jpg",
      link: "/info/zakony-i-prava/124"
    },
    {
      id: "5",
      title: "недержание",
      descr: "В данном разделе Вы сможете узнать о разновидностях недержания",
      imgUrl: "https://stoma.md/images/incontinence.jpg",
      link: "/info/vse-pro-stomu/115"
    },
    {
      id: "6",
      title: "форум",
      descr: "В данном разделе Вы сможете обсуждать волнующие темы, познакомится и даже получить консультацию ",
      imgUrl: "https://stoma.md/images/forum.jpg",
      link: "https://forumbb.stoma.md"
    }
  ],
  about: {
    id: "1",
    img: "http://localhost:8080/static/media/Logo.73033a97.jpg",
    text: "Главной целью Ассоциация Стомированных людей Молдовы (AOPS) является социальная реабилитация стомированных людей, " +
    "скорейшая реинтеграция и социализация в общество и семью. Для достижения своих целей " +
    "Ассоциация Стомированных людей Молдовы намеренна осуществить ряд действий ... ",
    link: "/about/znakomstvo-s-associaciei/107"
  },
  partners: {
    properties: [
      {
        "_id": "1",
        "index": 0,
        "picture": "https://www.fondru.md/vohogod/2020/03/Logo-FRU-RUS.png",
        "about": "Фонд «Ренато Усатый»",
        "details": "Фонд «Ренато Усатый» это фонд который оказывает помощь людям и городам в Республике Молдовы"
      },
      {
        "_id": "2",
        "index": 1,
        "picture": "https://www.fowusa.org/wp-content/uploads/2019/12/2019-Logo-transparent2.png",
        "about": "некоммерческая организация,",
        "details": "которая поддерживает" +
        " стомированных по всему миру. Их миссия  бесплатно предоставлять " +
        "принадлежности для стомы и образовательные ресурсы нуждающимся стомам по всему миру."
      },
      {
        "_id": "3",
        "index": 2,
        "picture": "data:image/png;base64,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",
        "about": "Высокопроизводительный веб-хостинг в Молдове.",
        "details": "iHost является лидером на рынке государственных и частных услуг инфраструктуры. Более 10 лет опыта и перехода на новейшие технологии и комплексные решения для обработки и защиты данных."
      },
    ]
  },
  pathToProject: "/about/nastoyashhie-i-budushhie-proekty/109",
  pathToAbout: "/about",
  newsPosts: [],
  articlesPosts: []

};

const mainPageReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_NEWS_POST_LIST: {
      return { ...state, newsPosts: action.newsPosts };
    }

    case SET_ARTICLES_POST_LIST: {
      return { ...state, articlesPosts: action.articlesPosts };
    }
  }

  return state;
};

export const setNewsPosts = (newsPosts) => ({ type: SET_NEWS_POST_LIST, newsPosts });
export const setArticlesPosts = (articlesPosts) => ({ type: SET_ARTICLES_POST_LIST, articlesPosts });

export const getNews = () => {
  return async (dispatch) => {
    let data = await postAPI.getNews();
    dispatch(setNewsPosts(data.data));
  };
};
export const getArticles= () => {
  return async (dispatch) => {
    let data = await postAPI.getArticles();
    dispatch(setArticlesPosts(data.data));
  };
};

export default mainPageReducer;