/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../features/cart/cartSlice";
import Button from "./Button";

function UpdateItemQuantity({ id, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1">
      <Button type="round" onClick={() => dispatch(increaseQuantity(id))}>
        +
      </Button>
      {quantity && <span>{quantity}</span>}
      <Button type="round" onClick={() => dispatch(decreaseQuantity(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
