/* eslint-disable prefer-destructuring */
import {
  FORGOT_PASSWORD_SEND_EMAIL,
  forgotPasswordChangeErrors,
  forgotPasswordChangeStatus,
  forgotPasswordChangeToast,
} from '../actions/forgotPassword';
import { setLoader } from '../actions/loader';
import axios from '../api/axios';

const forgotPasswordMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SEND_EMAIL: {
      store.dispatch(setLoader(true));
      const email = store.getState().forgotPassword.email;
      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();
      try {
        const response = await axios.post('/forgot-password', { email });
        store.dispatch(forgotPasswordChangeStatus(response.status));
        store.dispatch(forgotPasswordChangeToast(response.data.status));
        store.dispatch(setLoader(false));
        console.log(response);
      } catch (error) {
        store.dispatch(setLoader(false));
        console.log(error.response.status);
        store.dispatch(forgotPasswordChangeStatus(422));
        store.dispatch(forgotPasswordChangeToast(error.response.data.message));
        if (error.response.status === 422) {
          store.dispatch(
            forgotPasswordChangeErrors(error.response.data.errors)
          );
        }
      }
      break;
    }
    default:
      break;
  }

  next(action);
};

export default forgotPasswordMiddleware;
