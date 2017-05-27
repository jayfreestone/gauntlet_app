import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ThreadIndexContainer from './app/pages/ThreadIndexContainer.jsx';
import ThreadContainer from './app/pages/ThreadContainer.jsx';
import Header from './app/modules/Header';

const App = () => {
  return (
      <BrowserRouter>
        <div>
          <Helmet>
            <title>Gauntlet</title>
          </Helmet>

          <Header />

          <Route exact path="/" component={ThreadIndexContainer} />
          <Route path="/thread/:threadID" component={ThreadContainer} />
        </div>
      </BrowserRouter>
  );
};

export default App;
