import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="h-full w-full mt-28">
      <h1 className="font-bold text-2xl text-center">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
        <button
          className="bg-black text-white p-2 m-2 rounded-lg cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Your Cart is empty, please add some items</h1>}
      </div>
    </div>
  );
};
export default Cart;
