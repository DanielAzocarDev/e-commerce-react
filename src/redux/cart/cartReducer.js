import { CartActionsTypes } from './cartTypes';

const initState = {
  hidden: true,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
