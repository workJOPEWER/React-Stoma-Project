const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [{
    id: "1",
    title: "Проблемы связанные с колостомой.",
    description: "Здесь обсуждаем колостому и размещаем информацию связанную с выводом толстой кишки на живот."
  }]
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 2,
        description: action.newPostText
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case DELETE_POST: {
      return {...state, posts: state.posts.filter(p=>p.id != action.postId)}
    }
    default:
      return state;
  }
};
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export default PostsReducer;