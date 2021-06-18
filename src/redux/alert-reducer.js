const SUCCESS = "ALERT_SUCCESS";
const ERROR = "ALERT_ERROR";
const CLEAR = "ALERT_CLEAR";

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case CLEAR:
      return {};
    default:
      return state
  }
}

export const success = (message) => ({type:SUCCESS, message});
export const errorAlert = (message) => ({type:ERROR, message});
export const clear = () => ({type: CLEAR});




export default alertReducer;