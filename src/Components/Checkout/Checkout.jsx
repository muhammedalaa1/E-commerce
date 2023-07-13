import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.scss";
import Nav from "../Navbar/Nav";
import { COUNTRIES } from "./Country";
// import { Select, Option } from "@material-tailwind/react";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import DiscountIcon from "@mui/icons-material/Discount";
import "../Navbar/CartSideBar.scss";
import useCart from "../../Hooks/Cart";

const Checkout = ({ info, setInfo, Coupon, setCoupon }) => {
  const { cartItems, addToOrders } = useCart();
  console.log(info.firstName);
  // console.log(cartItems);
  const obj = { test: "" };
  console.log(obj.test);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Make Payment");
  const [isActive, setIsActive] = useState(false);

  const [shipmentMethod, setShipmentMethod] = useState("");
  const [country, setCountry] = useState("");

  const isFormValid = () => {
    if (
      info.firstName.trim() === "" ||
      info.lastName.trim() === "" ||
      info.email.trim() === "" ||
      info.fullName.trim() === "" ||
      info.country.trim() === "" ||
      info.city.trim() === "" ||
      info.addressLine1.trim() === "" ||
      info.cardNumber.trim() === "" ||
      info.cvv.trim() === "" ||
      info.expMonth.trim() === "" ||
      info.expYear.trim() === "" ||
      info.shipmentMethod.trim() === ""
    ) {
      return false; // Form is not valid
    }

    return true; // Form is valid
  };
  const handleClick = (element) => {
    console.log(isFormValid());
    if (isFormValid()) {
      element.preventDefault();
      setButtonText("Thanks");
      setIsActive(true);
      console.log(info);
      // localStorage.setItem("info", JSON.stringify({ info }));

      setTimeout(() => {
        navigate("/Reciept");
      }, 2000);
    }
  };

  const onChangeShipment = (event) => {
    setShipmentMethod(event.target.value);
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  const onChangeCountry = (event) => {
    setCountry(event.target.value);
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  function cc_format(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  }

  const CardPayment = (e) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "expMonth") {
      let newValue = value.replace(/\D/g, ""); // Remove non-digit characters
      newValue = Math.max(1, Math.min(parseInt(newValue), 12));
      if (value < 1 || value > 12) {
        alert("Enter a valid month");
        return;
      }
    }
    if (name === "expYear" && value > 999) {
      let newValue = value.replace(/\D/g, ""); // Remove non-digit characters
      newValue = Math.max(2023, Math.min(parseInt(newValue), 2029));
      if (value < 2023 || value > 2029) {
        alert("Enter a valid year");
        return;
      }
    }
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  const handleCouponChange = (e) => {
    const { name, value } = e.target;
    setCoupon((prevCoupon) => ({ ...prevCoupon, [name]: value }));
    // console.log(Coupon);
  };
  const handleCoupon = () => {
    if (Coupon.coupon === "TestDiscount") {
      setCoupon((prevCoupon) => ({ ...prevCoupon, ["flag"]: "true" }));
      return true;
    } else {
      setCoupon((prevCoupon) => ({ ...prevCoupon, ["flag"]: "false" }));
      return false;
    }
  };

  const calculateTotal = () => {
    var total = 0;
    cartItems.map((item, i) => {
      if (cartItems[i].size > cartItems[i].size1) {
        total +=
          parseFloat(cartItems[i].quantity) * parseFloat(cartItems[i].pri * 2);
      } else {
        total +=
          parseFloat(cartItems[i].quantity) * parseFloat(cartItems[i].pri);
      }
    });
    // console.log(parseFloat(total).toFixed(2));
    return total;
  };
  const calculateDiscount = () => {
    let total = calculateTotal();
    total *= 0.1;
    return parseFloat(total.toFixed(2));
  };

  const calculateTotalAmount = () => {
    var total = 0;
    total += calculateTotal();
    // console.log(total);
    if (Coupon.flag === "true") {
      total -= calculateDiscount();
    }
    // console.log(total);
    if (info.shipmentMethod === "World Wide") {
      total += 5;
    }
    return total;
  };

  return (
    <>
      <Nav addClass={true} />
      <div className="custom-container py-12 my-6 sm:my-12">
        <div className="row mt-6">
          <div className="w-full md:w-10/12 lg:w-6/12 md:ml-4 lg:ml-0">
            <form>
              <p className="text-lg font-semibold mb-6 ">Customer</p>
              <div className="row">
                <div className="w-full sm:w-6/12  px-2 mb-4 ">
                  <label className="w-full">
                    <p className="mb-1 text-sm font-extralight text-gray-600 ">
                      First name<span className="text-red-900">*</span>
                    </p>
                    <input
                      required
                      name="firstName"
                      className="rounded-none w-full"
                      value={info.firstName}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="w-full sm:w-6/12  px-2 mb-4 ">
                  <label className="w-full">
                    <p className="mb-1 text-sm font-extralight text-gray-600 ">
                      Last name<span className="text-red-900">*</span>
                    </p>
                    <input
                      required
                      name="lastName"
                      className="rounded-none w-full"
                      value={info.lastName}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="w-full sm:w-6/12  px-2 mb-4 ">
                  <label className="w-full">
                    <p className="mb-1 text-sm font-extralight text-gray-600 ">
                      Telephone
                    </p>
                    <input
                      name="customer[phone]"
                      className="rounded-none w-full"
                    />
                  </label>
                </div>
                <div className="w-full sm:w-6/12  px-2 mb-4 ">
                  <label className="w-full">
                    <p className="mb-1 text-sm font-extralight text-gray-600 ">
                      Email address<span className="text-red-900">*</span>
                    </p>
                    <input
                      required
                      name="email"
                      className="rounded-none w-full"
                      value={info.email}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <p className="text-lg font-semibold mb-6 ">Shipping Address</p>
              <div className="mb-12">
                <div className="row ">
                  <div className="w-full mb-4 px-2">
                    <label className="w-full">
                      <p className="mb-1 text-sm font-extralight text-gray-600 ">
                        Full name<span className="text-red-900">*</span>
                      </p>
                      <input
                        required
                        name="fullName"
                        className="rounded-none w-full"
                        value={info.fullName}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="w-full sm:w-6/12  px-2 mb-4 ">
                    <p className="mb-1 text-sm font-extralight text-gray-600 ">
                      Country<span className="text-red-900">*</span>
                    </p>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="Country">
                          Select your country
                        </InputLabel>
                        <Select
                          labelId="Country"
                          name="country"
                          id="Country"
                          value={info.country}
                          label="Shipment"
                          onChange={onChangeCountry}
                        >
                          {COUNTRIES.map(({ title }) => (
                            <MenuItem
                              key={title}
                              value={title}
                              className="flex items-center gap-2"
                            >
                              {title}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="w-full sm:w-6/12  px-2 mb-4 ">
                    <label className="w-full">
                      <p className="mb-1 text-sm font-extralight text-gray-600 ">
                        City<span className="text-red-900">*</span>
                      </p>
                      <input
                        required
                        name="city"
                        className="rounded-none w-full"
                        value={info.city}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="w-full sm:w-6/12  px-2 mb-4 ">
                    <label className="w-full">
                      <p className="mb-1 text-sm font-extralight text-gray-600 ">
                        Address line 1<span className="text-red-900">*</span>
                      </p>
                      <input
                        required
                        name="addressLine1"
                        className="rounded-none w-full"
                        value={info.addressLine1}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <div className="w-full sm:w-6/12  px-2 mb-4 ">
                    <label className="w-full">
                      <p className="mb-1 text-sm font-extralight text-gray-600 ">
                        Address line 2 (optional)
                      </p>
                      <input
                        name="shipping[Address_line2]"
                        className="rounded-none w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="w-full px-2 mb-4 ">
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Shipment Method
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={shipmentMethod}
                          name="shipmentMethod"
                          label="Shipment"
                          onChange={onChangeShipment}
                          required
                        >
                          <MenuItem value={"Local"}>Local (Free)</MenuItem>
                          <MenuItem value={"World Wide"}>
                            World Wide (5$)
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <InputLabel id="Order-notes" className="w-full mb-4">
                  <p className="mb-1 text-sm font-extralight text-gray-600 ">
                    Order notes (optional)
                  </p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full p-12"
                  />
                </InputLabel>
              </div>
              <p className="text-lg font-semibold mb-4">Payment Detail</p>
              <div className="border border-gray-400 mb-12">
                <div className="border-b border-gray-500 ">
                  <div className="pl-12 pr-4 pb-4 ml-2 ">
                    <div className="row">
                      <div className="sm:w-8/12 px-2 ">
                        <InputLabel className="w-full mb-4 mt-2 sm:mb-0">
                          <p className="mb-1 text-xs font-light ">
                            Card Number
                          </p>
                          <input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            className="w-full rounded-none"
                            value={cc_format(info.cardNumber)}
                            onChange={CardPayment}
                            required
                          />
                        </InputLabel>
                      </div>
                      <div className="sm:w-3/12 px-2">
                        <InputLabel className="w-full mb-4 mt-2 sm:mb-0">
                          <p className="mb-1 text-xs font-light ">Cvv</p>
                          <input
                            name="cvv"
                            maxLength={3}
                            className="rounded-0 w-full"
                            type="text"
                            onChange={handleInputChange}
                            required
                          />
                        </InputLabel>
                      </div>
                      <div className="sm:w-3/12 px-2">
                        <InputLabel className="w-full mb-4 mt-2 sm:mb-0">
                          <p className="mb-1 text-xs font-light ">Exp.month</p>
                          <input
                            name="expMonth"
                            maxLength={2}
                            className="rounded-0 w-full"
                            type="number"
                            value={info.expMonth}
                            onChange={handleInputChange}
                            required
                          />
                        </InputLabel>
                      </div>
                      <div className="sm:w-3/12 px-2">
                        <InputLabel className="w-full mb-4 mt-2 sm:mb-0">
                          <p className="mb-1 text-xs font-light ">Exp.Year</p>
                          <input
                            required
                            name="expYear"
                            maxLength={4}
                            min={2023}
                            max={2029}
                            className="rounded-0 w-full"
                            type="number"
                            value={info.expYear}
                            onChange={handleInputChange}
                          />
                        </InputLabel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                id="btn"
                className={`submit ${isActive ? "active" : ""}`}
                onClick={handleClick}
              >
                <p id="btnText">{buttonText}</p>
                <div className="check-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
              </button>
            </form>
          </div>
          <div className="w-full md:w-10/12 lg:w-5/12 offset-md-1 lg:mt-0 mt-4 px-2">
            <div className="checkout-summary lg:p-12 p-4">
              <div className="border-b text-xl border-gray-400 font-medium">
                Your order
              </div>

              {cartItems.map((product, key) => {
                return (
                  <div className="pt-4 border-b border-gray-400" key={key}>
                    <div className="flex mb-2">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="object-cover mr-2 w-14 h-16"
                      />
                      <div className="flex flex-grow ">
                        <div className="flex-grow">
                          <Link
                            to={`/product/${product.id}`}
                            className="text-blue-400 underline"
                          >
                            <p className="font-medium ">{product.title}</p>
                          </Link>
                          <p className="font-light ">
                            Quantity: {product.quantity}
                          </p>
                          <p>Size: {product.size}</p>
                        </div>
                      </div>
                      <div className="text-right font-semibold">
                        $
                        {product.size > product.size1
                          ? product.pri * 2
                          : product.pri}
                        .00
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="row py-4  relative ">
                <input
                  type="text"
                  placeholder="Gift card or discount code"
                  className="mr-2 w-full basis-0 flex-grow"
                  value={Coupon.coupon}
                  name="coupon"
                  onChange={handleCouponChange}
                />
                <button
                  className="text-white border-none font-medium px-6 relative w-auto max-w-full bg-black"
                  type="submit"
                  onClick={() => handleCoupon()}
                >
                  Apply
                </button>
              </div>
              <div
                className={`mb-4 bg-red-500 text-center p-2 rounded-lg transition-all ${
                  Coupon.flag === "false" ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                Enter a correct coupon
              </div>

              <div className="discount border-b border-gray-400 w-full text-sm p-2 ">
                <DiscountIcon className="text-black mr-2" />
                Hurry You got a discount use the coupon below :
                <div className="text-center text-black text-lg ">
                  TestDiscount
                </div>
              </div>
              <div className="py-4 border-b border-black">
                <div className="flex justify-between items-center mb-2">
                  <p>SubTotal</p>
                  <p className="text-right font-medium">
                    ${calculateTotal().toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p>Shipping</p>
                  <p className="text-right font-medium">
                    ${`${shipmentMethod !== "World Wide" ? 0 : 5}`}.00
                  </p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p>Discount</p>
                  <p className="text-right font-medium">
                    {Coupon.flag !== "true"
                      ? "No coupon code applied"
                      : `$${calculateDiscount()}`}
                  </p>
                </div>
              </div>
              <div className="text-2xl flex justify-between">
                <p className="font-family-secondary font-semibold">
                  Total amount
                </p>
                <p className="font-serif font-semibold">
                  ${calculateTotalAmount()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
