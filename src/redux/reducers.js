const initialState = {
  cart: [],
};

// action types:
// ADD_ITEM
// REMOVE_ITEM

// action = { type: "ADD_ITEM", item: {} }
// action = { type: "REMOVE_ITEM", id: "" }
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

// action creator
export const addItem = (product) => {
  return {
    type: ADD_ITEM,
    item: product,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id,
  };
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_ITEM) {
    return {
      cart: state.cart.concat(action.item),
    };
  }
  if (action.type === REMOVE_ITEM) {
    return {
      cart: state.cart.filter((product) => product.id !== action.id),
    };
  }
  return state;
}
