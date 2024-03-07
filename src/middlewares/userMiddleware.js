import { setLoader } from '../actions/loader';
import { logoutRequest } from '../actions/logout';
import {
  USER_DELETE_REQUEST,
  USER_EDIT_REQUEST,
  USER_GET_USER,
  userChangeDeleteStatus,
  userChangeDeleteToastMessage,
  userChangeEditStatus,
  userChangeEditToastMessage,
  userChangeEmail,
  userChangeName,
  userGetUser,
  userSetUser,
} from '../actions/user';
import axios from '../api/axios';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case USER_GET_USER: {
      store.dispatch(setLoader(true));
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
        store.dispatch(userChangeName(userData.data.name));
        store.dispatch(userChangeEmail(userData.data.email));
        store.dispatch(setLoader(false));

        // action.history('/');
      } catch (error) {
        console.log(error);
        store.dispatch(setLoader(false));
      }
      break;
    }

    case USER_DELETE_REQUEST: {
      store.dispatch(setLoader(true));
      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();

      try {
        const response = await axios.delete('/api/delete-user');
        await store.dispatch(userSetUser(null));
        await localStorage.removeItem('USER_DATA');
        store.dispatch(
          userChangeDeleteToastMessage('Votre compte à bien été supprimer')
        );
        store.dispatch(userChangeDeleteStatus(response.status));
        action.history('/connexion');
        store.dispatch(setLoader(false));
      } catch (error) {
        console.log(error);
        store.dispatch(setLoader(false));
      }
      break;
    }

    case USER_EDIT_REQUEST: {
      store.dispatch(setLoader(true));
      const csrf = () => axios.get('/sanctum/csrf-cookie');
      await csrf();

      try {
        const response = await axios.patch('/api/edit-user', {
          name: store.getState().user.name,
          email: store.getState().user.email,
        });
        console.log(response);
        await store.dispatch(userGetUser());
        store.dispatch(userChangeEditToastMessage(response.data.success));
        store.dispatch(userChangeEditStatus(response.status));
        store.dispatch(setLoader(false));
      } catch (error) {
        console.log(error);
        store.dispatch(userChangeEditToastMessage(error.response.data.message));
        store.dispatch(userChangeEditStatus(error.response.status));
        store.dispatch(setLoader(false));
      }
      break;
    }

    default:
      break;
  }

  next(action);
};

export default userMiddleware;
