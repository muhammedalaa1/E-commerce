import React, { useEffect, useState } from "react";
import "./Generate.scss";
import "./Home.scss";
const Generate = (props) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const deleteFromCart = (product) => {
    console.log(product);

    const updatedCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleCart = (product) => {
    console.log(product);
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Product added to cart");
  };
  const incProd = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const [productData, setProductData] = useState({});
  useEffect(() => {
    const createProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: props.tit,
            price: props.pri,
            description: props.desc,
            image: props.img,
            category: props.cat,
          }),
        });
        const data = await response.json();
        data.id = data.id + props.increment;
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };

    createProduct();
  }, []);

  return (
    <div>
      {productData ? (
        <div>
          <p className="font-size-subheader mb-2 font-medium ">
            {props.tit}
          </p>
          <p className="text-gray-600 mb-2">{props.desc}</p>
          <p className="font-size-subheader font-medium pb-2 border-b border-b-black">
            {props.pri}.00
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Generate;
