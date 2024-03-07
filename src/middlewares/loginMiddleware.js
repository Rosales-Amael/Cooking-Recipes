import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import {
  LOGIN_REQUEST,
  changeLoginEmail,
  changeLoginPassword,
  loginChangeError,
} from '../actions/login';
import { userGetUser } from '../actions/user';
import { setLoader } from '../actions/loader';

const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      store.dispatch(setLoader(true));
      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();
      try {
        const { email, password } = store.getState().login;
        await axios.post('/login', { email, password });
        await store.dispatch(userGetUser(action.history));
        store.dispatch(changeLoginEmail(''));
        store.dispatch(changeLoginPassword(''));
        action.history('/');
        store.dispatch(setLoader(false));
      } catch (error) {
        if (error.response.status === 422) {
          store.dispatch(loginChangeError(error.response.data.errors));
        }
        store.dispatch(setLoader(false));
        console.log(error);
      }
      break;
    }

    default:
      break;
  }

  next(action);
};

export default loginMiddleware;
