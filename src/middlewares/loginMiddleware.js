import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import {
  LOGIN_REQUEST,
  changeLoginEmail,
  changeLoginPassword,
  loginChangeError,
  loginSuccess,
} from '../actions/login';
import { userGetUser } from '../actions/user';

const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();
      try {
        const { email, password } = store.getState().login;
        await axios.post('/login', { email, password });
        await store.dispatch(userGetUser(action.history));
        store.dispatch(loginSuccess());
        store.dispatch(changeLoginEmail(''));
        store.dispatch(changeLoginPassword(''));
      } catch (error) {
        if (error.response.status === 422) {
          store.dispatch(loginChangeError(error.response.data.errors));
        }
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
