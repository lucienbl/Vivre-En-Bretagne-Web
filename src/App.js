import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from "./store";
import RootNavigator from "./RootNavigator";

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
