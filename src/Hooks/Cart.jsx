import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import useStorage from "./useStorage";
import product from "../Components/product/Product";

export const Context = createContext();

export const CartProvider = ({ children }) => {
  const { value: cartItems, set: setCartItems } = useStorage("cart", []);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleDecrease = (product, size) => {
    const isProductExist = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (isProductExist) {
      if (product.quantity !== 1) {
        const updatedCart = cartItems.map((item) => {
          if (item.id === product.id && item.size === size) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        setCartItems(updatedCart);
      }
    }
  };
  const handleCartDelete = (product, size) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== product.id || item.size !== size
    );
    setCartItems(updatedCart);
  };
  const handleIncrease = (product, size) => {
    console.log(cartItems);

    const isProductExist = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (isProductExist) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id && item.size === size) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(updatedCart);
    }
  };
  const getTotalQuantity = (v = null) => {
    return (v ? v : cartItems).reduce((sum, item) => sum + item.quantity, 0);
  };
  useLayoutEffect(() => {
    setTotalQuantity(getTotalQuantity());
  }, [cartItems]);

  return (
    <Context.Provider
      value={{
        totalQuantity,
        setTotalQuantity,
        cartItems,
        handleIncrease,
        handleDecrease,
        handleCartDelete,
        setCartItems: (v) => {
          setCartItems(v);
          setTotalQuantity(getTotalQuantity(v));
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default function useCart() {
  return useContext(Context);
}
