/* eslint-disable prefer-destructuring */
import { setLoader } from '../actions/loader';
import {
  RESET_PASSWORD_REQUEST,
  resetPasswordChangeErrors,
  resetPasswordChangeStatus,
  resetPasswordChangeToastMessage,
} from '../actions/resetPassword';
import axios from '../api/axios';

const resetPasswordMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST: {
      store.dispatch(setLoader(true));
      const token = store.getState().resetPassword.token;
      const email = store.getState().resetPassword.email;
      const password = store.getState().resetPassword.password;
      const passwordConfirmation =
        store.getState().resetPassword.passwordConfirmation;

      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();

      try {
        const response = await axios.post('/reset-password', {
          token,
          email,
          password,
          password_confirmation: passwordConfirmation,
        });
        store.dispatch(resetPasswordChangeStatus(response.status));
        store.dispatch(resetPasswordChangeToastMessage(response.data.status));
        store.dispatch(setLoader(false));
        action.history('/connexion');
        console.log(response);
      } catch (error) {
        store.dispatch(resetPasswordChangeStatus(422));
        store.dispatch(
          resetPasswordChangeToastMessage(
            error.response.data.errors.password[0]
          )
        );
        if (error.response.status === 422) {
          store.dispatch(resetPasswordChangeErrors(error.response.data.errors));
        }
        store.dispatch(setLoader(false));
      }
      break;
    }
    default:
      break;
  }

  next(action);
};

export default resetPasswordMiddleware;
