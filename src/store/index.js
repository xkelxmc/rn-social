import { applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { userReducer } from './user/reducer';
import { usersReducer } from './users/reducer';
import { postsReducer } from './posts/reducer';
import { configureStore } from '@reduxjs/toolkit';

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware);

const rootReducer = combineReducers({
    user: userReducer.reducer,
    users: usersReducer.reducer,
    posts: postsReducer.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    enhancers: [middlewareEnhancer],
});
