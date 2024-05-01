/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import DeleteBtn from "../../ui/DeleteBtn";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";
function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <p className="mb-1 sm:mb-0 ">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold sm:ml-2 ">
          {formatCurrency(totalPrice)}
        </p>
        <div className="flex gap-2">
          <UpdateItemQuantity id={id} quantity={quantity} />
          <DeleteBtn pizzaId={id} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
