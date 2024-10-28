import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(
  reducers,{},
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f // Fallback if Redux DevTools is unavailable
);

export default store;
