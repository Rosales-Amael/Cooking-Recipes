import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';
import loginMiddleware from '../middlewares/loginMiddleware';
import registerMiddleware from '../middlewares/registerMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import logoutMiddleware from '../middlewares/logoutMiddleware';
import avatarMiddleware from '../middlewares/avatarMiddleware';
import forgotPasswordMiddleware from '../middlewares/forgotPasswordMiddleware';
import resetPasswordMiddleware from '../middlewares/resetPasswordMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
    userMiddleware,
    logoutMiddleware,
    avatarMiddleware,
    forgotPasswordMiddleware,
    resetPasswordMiddleware
  )
);

const store = createStore(reducer, enhancer);

export default store;
