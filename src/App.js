import React, { Component,  Fragment} from 'react';
import Recipes from './components/recipes';

import Header from './components/pages/header';
import Footer from './components/pages/footer';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header/>
        <Recipes/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
