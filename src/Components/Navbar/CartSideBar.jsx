import React, { useState, useContext, useEffect } from "react";
import { customProducts } from "../../Products";
import "./CartSideBar.scss";
import useCart from "../../Hooks/Cart";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import DeleteIcon from "@mui/icons-material/Delete";
import product from "../product/Product";

const CartSideBar = ({ isCartOpen, setisCartOpen }) => {
  const { cartItems, handleDecrease, handleIncrease, handleCartDelete } =
    useCart();
  const handleItemDecrease = (product, size) => {
    handleDecrease(product, size);
    // Perform any additional logic or actions
  };
  const handleItemIncrease = (product, size) => {
    handleIncrease(product, size);
    // Perform any additional logic or actions
  };
  const handleDelete = (product, size) => {
    handleCartDelete(product, size);
  };

  const calculateTotal = () => {
    var x = 0;
    var f = 0;

    customProducts.map((item, i) => {
      if (cartItems[i]) {
        if (cartItems[i].size > cartItems[i].size1 && !f) {
          x += cartItems[i].quantity * (cartItems[i].pri * 2);
        } else {
          x += cartItems[i].quantity * cartItems[i].pri;
        }
      }
    });
    return x.toFixed(2);
  };

  const handelCartClose = () => {
    setisCartOpen(!isCartOpen);
  };

  return (
    <>
      {isCartOpen ? (
        <div className={`cart-modal font-medium`}>
          <div className={`backdrop ${isCartOpen ? "te" : ""} `}></div>
          <div
            className={`main-cart-content flex flex-col ${
              isCartOpen ? "x" : ""
            }`}
          >
            <div className="px-6 md:px-12">
              <div className="pt-6 pb-4 border-b border-black flex justify-between items-center">
                <p className="font-size-subheader font-family-secondary">
                  Shopping Cart
                </p>
                <button
                  className="bg-transparent p-0"
                  onClick={handelCartClose}
                >
                  <img
                    src="https://commercejs-demo-store.netlify.app/icon/cross.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="flex-grow overflow-auto pt-4">
              {customProducts.map((product, i) => {
                if (cartItems[i]) {
                  return (
                    <div key={i}>
                      <div className="px-6 md:px-12 mb-2">
                        <div className="cart-item flex">
                          <div
                            className="cart-item--image mr-6"
                            style={{
                              backgroundImage: `url(
                                ${cartItems[i].img}
                              )`,
                            }}
                          ></div>
                          <div className="flex-grow border-b border-gray-400 ">
                            <div className="flex justify-between mb-2">
                              <p>{cartItems[i].title}</p>

                              <p className="text-right font-medium">
                                $
                                {cartItems[i].size > cartItems[i].size1
                                  ? `${cartItems[i].pri * 2}`
                                  : `${cartItems[i].pri}`}
                                .00
                              </p>
                            </div>

                            <div className="flex justify-between mb-2">
                              <p>size : {cartItems[i].size}</p>
                            </div>

                            <div className="flex items-center justify-between pt-2 pb-12">
                              <div className="flex items-center justify-center">
                                <button
                                  className="p-0 bg-transparent"
                                  onClick={() =>
                                    handleItemDecrease(
                                      cartItems[i],
                                      cartItems[i].size
                                    )
                                  }
                                >
                                  <img
                                    src="https://commercejs-demo-store.netlify.app/icon/minus.svg"
                                    alt=""
                                  />
                                </button>
                                <p className="text-center px-4">
                                  {cartItems[i].quantity}
                                </p>
                                <button
                                  className="p-0 bg-transparent"
                                  onClick={() =>
                                    handleItemIncrease(
                                      cartItems[i],
                                      cartItems[i].size
                                    )
                                  }
                                >
                                  <img
                                    src="https://commercejs-demo-store.netlify.app/icon/plus.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <DeleteIcon
                                onClick={handleDelete(
                                  cartItems[i],
                                  cartItems[i].size
                                )}
                              ></DeleteIcon>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="cart-footer">
              <div className="mb-4 flex justify-center md:justify-normal">
                <p className="text-blue-800 mr-2 font-medium">Subtotal :</p>
                <p className="underline-offset-4 underline ">
                  ${calculateTotal()}
                </p>
              </div>
              <div className="row">
                <div className="w-6/12 hidden md:block px-4">
                  <Link
                    className="h-14 flex items-center justify-center border border-black bg-white w-full flex-grow font-medium px-4 continue-shopping"
                    to="/collection"
                  >
                    Continue Shopping
                  </Link>
                </div>
                <div className="w-full md:w-6/12 px-4 ">
                  <Link
                    className="h-14 flex items-center justify-center border border-black bg-black text-white w-full flex-grow font-medium px-4 check-out"
                    to="/checkout"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default CartSideBar;
