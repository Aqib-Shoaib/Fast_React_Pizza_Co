import LinkBtn from "../../ui/LinkBtn";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const userName = useSelector((state) => state.user.username);
  // const cart = fakeCart;
  const cart = useSelector(getCart);

  if (cart.length === 0)
    return (
      <div className="space-y-2 px-3 ">
        <LinkBtn to="/menu">&larr; Back to menu</LinkBtn>
        <EmptyCart />
      </div>
    );
  return (
    <div className="mb-20 pb-32 ">
      <LinkBtn to="/menu">&larr; Back to menu</LinkBtn>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b px-10 ">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
