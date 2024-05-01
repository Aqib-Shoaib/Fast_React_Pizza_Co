import { createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //these reducers might not be perfect!!!
    addItem(state, action) {
      //payload = new cart item
      //formatting the item to be pushed according to the app requirments
      const newItem = { ...action.payload, quantity: 1 };
      newItem.totalPrice = newItem.quantity * newItem.unitPrice;
      state.cart.push(newItem);
    },
    deleteItem(state, action) {
      //payload = id of the item to be deleted
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

//selectors:
//1--Get the Whole cart to display in Cart.jsx
export const getCart = (state) => state.cart.cart;
//get the total pizzas in the cart to display primarily in cartOverview.jsx
export const getTotalPizzaQuantity = (state) =>
  state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0);
//get the totalPrice for similar funcitionality
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0);
//getting the ids of pizzas in cart
function useIDs() {
  const getPizzaIdsInCart = useCallback((state) => {
    return state.cart.cart.map((item) => item.id);
  }, []);
  const ids = useSelector(getPizzaIdsInCart);
  return ids;
}
export default useIDs;
