/* eslint-disable no-unused-vars */

import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import useIDs, { addItem } from "../cart/cartSlice";
import DeleteBtn from "../../ui/DeleteBtn";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

/* eslint-disable react/prop-types */
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const pizzaIds = useIDs();

  function addToCart(item) {
    dispatch(addItem(item));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500 ">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {soldOut ? (
            <Button disabled={soldOut} type="small">
              Item Sold Out
            </Button>
          ) : pizzaIds.includes(id) ? (
            <div className="flex gap-2">
              <UpdateItemQuantity id={id} />
              <DeleteBtn pizzaId={id} />
            </div>
          ) : (
            <Button type="small" onClick={() => addToCart(pizza)}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
