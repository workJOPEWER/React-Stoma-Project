import React from "react";
import "./App.scss";
import "./style.scss";
import { Switch } from 'react-router-dom';
import Header from "./common/Header/Header";
import AboutContainer from "./Containers/AboutContainer";
import MainpageContainer from "./Containers/MainPageContainer";
import InfoPageContainer from "./Containers/InfoPageContainer";
import ContactsPageContainer from "./Containers/ContactsPageContainer";
import { Route, withRouter } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./common/Preloader/Preloader";
import Mistake from "./common/404/Mistake";
import ScrollIndicator from "./common/ScrollingOnSait/ScrollIndicator/ScrollIndicator";
import ScrollToStart from "./common/ScrollingOnSait/ScrollIndicator/ScrollToStart";

const NewsContainer = React.lazy(() => import("./Containers/newsPageContainer"));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      <div className='app-wrapper'>
        <div className='wrapper'>
          <ScrollIndicator/>
          <ScrollToStart/>
          <Header/>
          <Switch>
          <Route exact path='/' render={() => <MainpageContainer/>}/>
          <Route path='/home' render={() => <MainpageContainer/>}/>
          <Route path='/about' render={() => <AboutContainer/>}/>
          <Route path='/blog' render={() => {
            return <React.Suspense fallback={ <Preloader/>}>
              <NewsContainer/>
            </React.Suspense>}}/>
          <Route path='/info' render={() => <InfoPageContainer/>}/>
          <Route path='/contacts' render={() => <ContactsPageContainer/>}/>
          <Route path="*" render={() => <Mistake/>}/>
          </Switch>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
