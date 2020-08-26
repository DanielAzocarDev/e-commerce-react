import { CartActionsTypes } from './cartTypes';
import { addItemToCard } from './cartUtils';

const initState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionsTypes.ADD_ITEM_CART:
      return {
        ...state,
        cartItems: addItemToCard(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
