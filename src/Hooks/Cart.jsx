import { createContext, useContext, useLayoutEffect, useState } from "react";
import useStorage from "./useStorage";

export const Context = createContext();

export const CartProvider = ({ children }) => {
  const { value: cartItems, set: setCartItems, clear } = useStorage("cart", []);
  const { value: orders, set: setOrders } = useStorage("orders", []);
  const [totalQuantity, setTotalQuantity] = useState(0);

  //clear cartItems;
  const handleClear = () => {
    clear();
  };

  //generate order num
  function generateOrderNumber() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const paddedNumber = randomNumber.toString().padStart(6, "0");
    const orderNumber = `ORDER-${paddedNumber}`;
    return orderNumber;
  }

  //function to add order in local storage
  const addToOrders = (items) => {
    if (cartItems) {
      const orderNumber = generateOrderNumber(); // Replace this with your own logic to generate order numbers
      const order = { ...items, orderNumber };
      setOrders((prevOrders) => [...prevOrders, order]);
    }
  };

  //decrease items in cart
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

  //remove item from cart
  const handleCartDelete = (product, size) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== product.id || item.size !== size
    );
    setCartItems(updatedCart);
  };

  //increase item in cart
  const handleIncrease = (product, size) => {
    console.log(cartItems);

    const isProductExist = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (isProductExist) {
      const updatedCart = cartItems.map((item) => {
        if (
          item.id === product.id &&
          item.size === size &&
          item.quantity < 30
        ) {
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

  //total quantity
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
        handleClear,
        setCartItems: (v) => {
          setCartItems(v);
          setTotalQuantity(getTotalQuantity(v));
        },
        orders,
        addToOrders,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default function useCart() {
  return useContext(Context);
}
