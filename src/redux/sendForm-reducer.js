import { mailAPI } from "../api/api";

const SET_MAIL_DATA = "SET_MAIL_DATA";

let initialState = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  subject: "",
  message: ""
};

const sendFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIL_DATA:
      return {
        ...state, data: action.data
      };
  }
  return state;
};

export const setMailData = (name, lastname, phone, email, subject, message) => ({
  type: SET_MAIL_DATA, data:
    { name, lastname, phone, email, subject, message }
});

export const email = (name, lastname, phone, email, subject, message) => {
  return async (dispatch) => {
    dispatch(setMailData(name, lastname, phone, email, subject, message));
    await mailAPI.sendMail(name, lastname, phone, email, subject, message);
  };
};

export default sendFormReducer;