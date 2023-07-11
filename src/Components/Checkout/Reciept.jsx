import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Navbar/Nav";
import "./Checkout.scss";
import { useState, useEffect } from "react";
import useCart from "../../Hooks/Cart";

const Reciept = ({ info }) => {
  const { orders, addToOrders, handleClear, cartItems } = useCart();
  const navigate = useNavigate();
  const { ordernumber } = orders;

  const handlePrint = () => {
    window.print();
  };

  const calculateReceipt = () => {
    var total = 0;
    Object.values(orders[orders.length - 1]).map((d) => {
      if (d !== orders[orders.length - 1].orderNumber) {
        if (d.size > d.size1) {
          total += parseFloat(d.quantity) * parseFloat(d.pri * 2);
        } else {
          total += d.quantity * d.pri;
        }
      }
    });
    return total;
  };
  useEffect(() => {
    if (cartItems.length === 0) {
      // navigate("/", { replace: true });
    }
    if (cartItems.length > 0) {
      addToOrders(cartItems);

      handleClear();
      console.log("hello");
    }

    return () => {};
  }, []);

  return (
    <>
      {orders.length > 0 ? (
        <>
          {" "}
          <Nav addClass={true} />
          <div className="pt-12  mt-2 checkout-confirm receipt">
            <div className="row mt-6 h-screen">
              <div className="w-full md:w-10/12 lg:w-6/12 md:mt-2 lg:mt-0">
                <div className="h-full flex flex-col items-center justify-center py-12 px-6 sm:px-12">
                  <div className="bg-completed h-16 w-16 flex rounded-full items-center justify-center mb-6">
                    <img
                      src="../../.././imgs/check.svg"
                      className="w-10"
                      alt=""
                    />{" "}
                  </div>

                  <h3 className="text-center font-family-secondary font-medium text-3xl mb-4">
                    Thank you for your purchase!
                  </h3>

                  <h4 className="text-center text-lg">
                    Your order completed successfully
                  </h4>
                  <p className="text-center font-light mb-12">
                    Here is your order number for reference:
                    {orders[orders.length - 1].orderNumber}
                  </p>
                  <div className="flex w-100 justify-center flex-col sm:flex-row">
                    <Link
                      to="/"
                      className="max-w-xs px-4 py-4 text-center flex-grow border bg-white border-gray-500 text-gray-700 mb-2 sm:mb-0 sm:mr-2 "
                    >
                      Go back Home
                    </Link>
                    <Link
                      to="/Collection"
                      className="max-w-xs px-4 py-4 text-center flex-grow border bg-black border-gray-500 text-white mb-2 sm:mb-0 sm:mr-2 "
                    >
                      Continue shopping
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12">
                <div className="bg-brand checkout-receipt p-6 md:p-12 overflow-auto">
                  <div className="sm:p-6">
                    <div className="border-b border-gray-400 flex justify-between items-start pb-4 flex-col sm:flex-row ">
                      <div>
                        <p className="mb-2">
                          Receipt number :{" "}
                          {orders[orders.length - 1].orderNumber}
                        </p>
                        <p className="text-lg mt-4">Order details</p>
                      </div>
                      <button
                        className="flex items-center underline cursor-pointer pb-4 flex-col sm:flex-row"
                        onClick={() => handlePrint()}
                      >
                        <img
                          src="../../.././imgs/print.svg"
                          alt=""
                          className="mr-2 w-6 "
                        />
                        Print Receipt
                      </button>
                    </div>
                    <div className="border-b border-gray-400 flex justify-between items-start pb-4 py-6 flex-col sm:flex-row ">
                      <p className="text-gray-500 mr-6 mb-4 sm:mb-0">
                        Ships to
                      </p>
                      <div className="flex-grow">
                        <p className="font-medium">{info.addressLine1},</p>
                        <p className="font-medium">{info.city},</p>
                        <p className="font-medium">{info.country}</p>
                      </div>
                    </div>
                    <div className="py-6 border-b border-gray-400">
                      {Object.values(orders[orders.length - 1]).map(
                        (d, index) => {
                          if (d !== orders[orders.length - 1].orderNumber)
                            return (
                              <div className="flex flex-grow mb-4" key={index}>
                                <div className="flex-grow">
                                  <p className="mb-2 font-medium">
                                    {d.quantity} x {d.title}
                                  </p>
                                </div>
                                <div className="text-right font-semibold">
                                  ${d.pri}.00
                                </div>
                              </div>
                            );
                        }
                      )}
                    </div>
                    <div className="py-4 ">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-lg font-medium">subtotal</p>
                        <p className="text-right font-medium">
                          ${calculateReceipt()}.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default Reciept;
