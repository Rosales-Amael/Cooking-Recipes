import {
  AVATAR_REQUEST,
  avatarChangeStatus,
  avatarChangeToast,
} from '../actions/avatar';
import { userGetUser } from '../actions/user';
import axios from '../api/axios';

const avatarMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case AVATAR_REQUEST: {
      try {
        const response = await axios.post(
          '/api/update-avatar',
          action.newAvatar
        );
        await store.dispatch(userGetUser());
        store.dispatch(avatarChangeToast(response.data.success));
        store.dispatch(avatarChangeStatus(response.status));
      } catch (error) {
        console.log(error);
        await store.dispatch(
          avatarChangeToast(error.response.data.errors.avatar[0])
        );
        store.dispatch(avatarChangeStatus(error.response.status));
      }
      break;
    }
    default:
      break;
  }

  next(action);
};

export default avatarMiddleware;
