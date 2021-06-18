import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import newsPageReducer from "./newsPage-reducer";
import mainPageReducer from "./mainPage-reducer";
import headBlockReducer from "./headBlock-reducer";
import thunkMiddleware from "redux-thunk";
import TabsReducer from "../Components/Tabs/tabs-reducer";
import contactsPageReducer from "./contactsPage-reducer";
import footerReducer from "../common/Footer/footer-reducer";
import AccordionReducer from "./accordion-reducer";
import titleReducer from "./title-reducer";
import AboutPageReducer from "./aboutPage-reducer";
import appReducer from "./app-reducer";
import sendFormReducer from "./sendForm-reducer";

let reducers = combineReducers({
  appReducer: appReducer,
  headBlock: headBlockReducer,
  footer: footerReducer,
  contacts: contactsPageReducer,
  newsPage: newsPageReducer,
  mainPage: mainPageReducer,
  aboutPage: AboutPageReducer,
  tabsBlock: TabsReducer,
  accordion: AccordionReducer,
  title: titleReducer,
  sendForm: sendFormReducer,
  form: formReducer


});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;

