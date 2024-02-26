import axios from 'axios';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      break;
  }

  next(action);
};

export default loginMiddleware;
