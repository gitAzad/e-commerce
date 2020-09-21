import { userActionType } from './user.action.type';

export const setCurrentUser = (user) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user,
});
