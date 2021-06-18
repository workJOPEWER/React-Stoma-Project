const CLICKED_TAB = "CLICKED_TAB";

let initialState = {
  titles: {
    donate: [
      {
        id: 1,
        firstName: "реквизиты",
        secondName: "терминал",
        thirdName: "онлайн"
      }
    ]
  },
  path: "contacts",
  activeTab: 1
};

const TabsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CLICKED_TAB:
      return {
        ...state,
        activeTab: action.activeTab
      };
    default:
      return state;
  }
};

export const tabClicked = (activeTab) => ({ type: CLICKED_TAB, activeTab });
export default TabsReducer;