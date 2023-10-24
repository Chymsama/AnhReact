import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './postsRecuder';

const post_store = createStore(postsReducer, applyMiddleware(thunk));

export default post_store;