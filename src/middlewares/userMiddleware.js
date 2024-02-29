import { USER_GET_USER, userSetUser } from '../actions/user';
import axios from '../api/axios';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case USER_GET_USER: {
      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();
      try {
        const userData = await axios.get('/api/user');

        if (localStorage.getItem('USER_DATA')) {
          localStorage.removeItem('USER_DATA');
          localStorage.setItem('USER_DATA', JSON.stringify(userData.data));
        } else {
          localStorage.setItem('USER_DATA', JSON.stringify(userData.data));
        }
        await store.dispatch(userSetUser(userData.data));

        action.history('/');
        console.log(userData.data);
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

export default userMiddleware;
