import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger'

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, 
      logger
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Provider store={store}>
          <AppRouter />
      </Provider>
      </React.Fragment>
    );
  }
}

export default App;
