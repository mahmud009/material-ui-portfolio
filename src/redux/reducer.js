import { state } from "./state";
import actions from "./actions";

export function reducer(state, { type, payload }) {
  switch (type) {
    case actions.toggleDarkMode:
      state.darkMode = payload;
      return { ...state };
    default:
      return { ...state };
  }
}
