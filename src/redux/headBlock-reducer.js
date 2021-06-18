const GET_HOME_PAGE_HEAD = "GET_HOME_PAGE_HEAD";

let initialState = {
    home: [
      {
        id: 1,
        subtitle: "Информационный / консультативный ",
        strongSub: "",
        title: "интернет портал stoma.md",
        desc: "для ",
        strongDesc: "стомирванных людей",
        image: "https://cdn.pixabay.com/photo/2019/04/09/16/34/hands-4114905_960_720.jpg",
        button: null
      }],
    about: [
      {
        id: 1,
        subtitle: "Общественная ",
        strongSub: "Ассоциация Стомированных",
        title: "первые в молдове",
        desc: "для ",
        strongDesc: "людей со стомой",
        image: "https://cdn.pixabay.com/photo/2019/04/09/16/34/hands-4114905_960_720.jpg"
      }],
    news: [
      {
        id: 1,
        subtitle: "Мероприятия/",
        strongSub: "проекты/ статьи",
        title: "новости / события",
        desc: "из жизни ",
        strongDesc: "стомированных",
        image: "https://cdn.pixabay.com/photo/2019/04/09/16/34/hands-4114905_960_720.jpg"
      }],
    info: [
      {
        id: 1,
        subtitle: "",
        strongSub: "Правила/ рекомендации/ технические средства",
        title: "жизнь со стомой",
        desc: "Как ",
        strongDesc: "продолжать радоваться жизни? ",
        image: "https://cdn.pixabay.com/photo/2019/04/09/16/34/hands-4114905_960_720.jpg"
      }],
    forum: [
      {
        id: 1,
        subtitle: "Обмен опытом/",
        strongSub: "поиск друзей/ консультации",
        title: "форум для общения",
        desc: "стомированных ",
        strongDesc: "и не только ...",
        image: "https://cdn.pixabay.com/photo/2019/04/09/16/34/hands-4114905_960_720.jpg"
      }],
    contacts: [
      {
        id: 1,
        subtitle: "Не оставайся",
        strongSub: "в стороне",
        title: "контакты",
        desc: "как нас ",
        strongDesc: "поддержать",
        image: "https://cdn.pixabay.com/photo/2019/04/09/16/34/hands-4114905_960_720.jpg"
      }]
};

const headBlockReducer = (state = initialState, action) => {

  return state;
};

export default headBlockReducer;