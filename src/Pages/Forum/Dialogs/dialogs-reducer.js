const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  table: [{
    id: "1",
    name: "тема:",
    title: "колостома, как определить размер",
    categName: "категория:",
    category: "колостома"

  }],
  messages: [
    {
      id: 1,
      message: "Подскажите пожалуйста если у меня операция на сигмовидной кишке,\n" +
      "            значит от ануса у меня только прямая кишка осталась и какого объёма мне клизмы\n" +
      "            ставить. Я начал делать туда за раз меньше пол литра влазит. Это правильно или\n" +
      "            мне стараться по больше закачать. И ещё один вопрос я начал делать клизмы с\n" +
      "            пустя три месяца после операций, чем это может быть чревато? ",
      name: "Oпубликовано:",
      data: " 20 Nov 2020"
    },
    {
      id: 2,
      message: "Подскажите пожалуйста если у меня операция на сигмовидной кишке,\n" +
      "            значит от ануса у меня только прямая кишка осталась и какого объёма мне клизмы\n" +
      "            ставить. Я начал делать туда за раз меньше пол литра влазит. Это правильно или\n" +
      "            мне стараться по больше закачать. И ещё один вопрос я начал делать клизмы с\n" +
      "            пустя три месяца после операций, чем это может быть чревато? ",
      name: "Oпубликовано:",
      data: " 20 Nov 2020"
    }
  ]
};

const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 2, message: body }]
      };
    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default DialogsReducer;