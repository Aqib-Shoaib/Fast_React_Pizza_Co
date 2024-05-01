/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

function DeleteBtn({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDelete(Id) {
    dispatch(deleteItem(Id));
  }
  return (
    <Button type="small" onClick={() => handleDelete(pizzaId)}>
      Delete
    </Button>
  );
}

export default DeleteBtn;
