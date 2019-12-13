/*
 *
 * Skills reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_THEME_ACTION } from './constants';

export const initialState = {
  theme: localStorage.getItem('theme') || 'default',
};

/* eslint-disable default-case, no-param-reassign */
const skillsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case CHANGE_THEME_ACTION:
        draft.theme = action.theme;
        break;
    }
  });

export default skillsReducer;
