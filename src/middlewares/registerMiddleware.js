import {
  REGISTER_REQUEST,
  registerErrors,
  registerSuccess,
} from '../actions/register';
import { userGetUser } from '../actions/user';
import axios from '../api/axios';

const registerMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();
      try {
        const { firstname, email, password, confirmPassword } =
          store.getState().register;
        await axios.post('/register', {
          name: firstname,
          email,
          password,
          password_confirmation: confirmPassword,
        });
        await store.dispatch(userGetUser());
        store.dispatch(registerSuccess());
      } catch (error) {
        console.log(error);
        store.dispatch(registerErrors(error.response.data.errors));
      }
      break;
    }

    default:
      break;
  }

  next(action);
};

export default registerMiddleware;
