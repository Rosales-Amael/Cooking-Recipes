import { setLoader } from '../actions/loader';
import {
  REGISTER_REQUEST,
  changeRegisterConfirmPassword,
  changeRegisterEmail,
  changeRegisterFirstname,
  changeRegisterPassword,
  registerChangeErrors,
  registerChangeStatus,
  registerChangeToastMessage,
} from '../actions/register';
import { userGetUser } from '../actions/user';
import axios from '../api/axios';

const registerMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      store.dispatch(setLoader(true));
      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();
      try {
        const { firstname, email, password, confirmPassword } =
          store.getState().register;
        const response = await axios.post('/register', {
          name: firstname,
          email,
          password,
          password_confirmation: confirmPassword,
        });
        store.dispatch(registerChangeStatus(response.status));
        store.dispatch(
          registerChangeToastMessage('Votre compte à bien été créer')
        );
        store.dispatch(changeRegisterFirstname(''));
        store.dispatch(changeRegisterEmail(''));
        store.dispatch(changeRegisterPassword(''));
        store.dispatch(changeRegisterConfirmPassword(''));
        action.history('/connexion');
        store.dispatch(setLoader(false));
      } catch (error) {
        console.log(error);
        store.dispatch(registerChangeErrors(error.response.data.errors));
        store.dispatch(setLoader(false));
      }
      break;
    }

    default:
      break;
  }

  next(action);
};

export default registerMiddleware;
