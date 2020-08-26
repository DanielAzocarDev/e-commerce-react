import { CartActionsTypes } from './cartTypes';

export const toggleCartHidden = () => ({
  type: CartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCard = item => ({
  type: CartActionsTypes.ADD_ITEM_CART,
  payload: item,
});
