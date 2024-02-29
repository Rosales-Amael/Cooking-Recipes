import { LOGOUT_REQUEST } from '../actions/logout';
import { userSetUser } from '../actions/user';
import axios from '../api/axios';

const logoutMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      try {
        await axios.post('/logout');
        await store.dispatch(userSetUser(null));
        await localStorage.removeItem('USER_DATA');
        action.history('/connexion');
      } catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      break;
  }

  next(action);
};

export default logoutMiddleware;
