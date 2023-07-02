import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import "./Product.scss";
import useCart from "../../Hooks/Cart";
import { customProducts } from "../../Products";
import Footer from "../Footer/Footer";
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const product = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const selectedProduct = customProducts.find((product) => product.id === id);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.size1);

  const handleSizeClick = (size) => {
    selectedProduct.size = selectedSize;
    setSelectedSize(size);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      data.title = selectedProduct.title;
      data.img = selectedProduct.img;
      data.price = selectedProduct.pri;
      data.category = selectedProduct.category;
      data.description = selectedProduct.description;
      data.size = selectedProduct.size1;
      data.size1 = selectedProduct.size1;
      data.size2 = selectedProduct.size2;
      setProduct(data);
    };

    fetchProduct();
  }, []);

  const { totalQuantity, cartItems, setCartItems } = useCart();
  const handleCart = (product, redirect) => {
    const isProductExist = cartItems.find(
      (item) => item.id === product.id && item.size === selectedSize
    );
    if (isProductExist) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id && item.size === selectedSize) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, size: selectedSize },
      ]);
    }
    if (redirect) {
      navigate("/cart");
    }
  };

  if (!Object.keys(product).length > 0) return <div>Loading.....</div>;

  return (
    <>
      <Nav addClass={true} />
      <div className="py-12 my-12">
        <div className="main-product-content container">
          <div className="product-sidebar">
            <div className="product-left-aside__category-list">
              <h3 className="font-medium text-lg mb-4">Products</h3>
              <ul className="pl-0">
                <li>
                  <Link
                    to="/Collection#facial-products"
                    className={`pb-2 text-black ${
                      selectedProduct.category === "facial" ? "font-bold" : ""
                    }`}
                  >
                    Facial Products <sup>3</sup>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Collection#hair-products"
                    className={`pb-2 text-black ${
                      selectedProduct.category === "hair" ? "font-bold" : ""
                    }`}
                  >
                    Hair Products
                    <sup>3</sup>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Collection#body-products"
                    className={`pb-2 text-black ${
                      selectedProduct.category === "body" ? "font-bold" : ""
                    }`}
                  >
                    Body Products
                    <sup>3</sup>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-images">
            <div className="flex-1">
              <img src={selectedProduct.img1} alt="" className="w-full mb-4" />
              <img src={selectedProduct.img2} alt="" className="w-full mb-4" />
              <img src={selectedProduct.img3} alt="" className="w-full mb-4" />
            </div>
          </div>
          <div className="product-detail">
            <div>
              <div className="cursor-pointer">
                <div className="flex">
                  <div className="flex relative">
                    <img
                      src="https://commercejs-demo-store.netlify.app/icon/star.svg"
                      className="w-4"
                      alt=""
                    />
                    <img
                      src="https://commercejs-demo-store.netlify.app/icon/star.svg"
                      className="w-4"
                      alt=""
                    />
                    <img
                      src="https://commercejs-demo-store.netlify.app/icon/star.svg"
                      className="w-4"
                      alt=""
                    />
                    <img
                      src="https://commercejs-demo-store.netlify.app/icon/star.svg"
                      alt=""
                      className="w-4"
                    />
                    <img
                      src="https://commercejs-demo-store.netlify.app/icon/star.svg"
                      alt=""
                      className="w-4"
                    />
                    <div className="flex absolute left-0 top-0 right-0 bottom-0 overflow-hidden flex-wrap w-11/12">
                      <img
                        src="https://commercejs-demo-store.netlify.app/icon/star-solid.svg"
                        alt=""
                        className="block w-4"
                      />
                      <img
                        src="https://commercejs-demo-store.netlify.app/icon/star-solid.svg"
                        alt=""
                        className="block w-4"
                      />
                      <img
                        src="https://commercejs-demo-store.netlify.app/icon/star-solid.svg"
                        alt=""
                        className="block w-4"
                      />
                      <img
                        src="https://commercejs-demo-store.netlify.app/icon/star-solid.svg"
                        alt=""
                        className="block w-4"
                      />
                    </div>
                    <span className="ml-2 text-sm leading-5 font-medium">
                      {" "}
                      4.0/5
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-4xl font-family-secondary mt-2 mb-2">
                {selectedProduct.title}
              </p>
              <div className="mb-5 pb-4 text-base leading-8">
                {selectedProduct.description}
              </div>
              <div className="sm:block">
                <div className="mb-4">
                  <div>
                    <span className="font-semibold mr-4 text-sm font-family-secondary">
                      Size :
                    </span>
                    <span
                      className={`mr-4 cursor-pointer text-sm sizes p-2 ${
                        selectedSize === selectedProduct.size1
                          ? "custom-hover"
                          : ""
                      }`}
                      onClick={() => handleSizeClick(selectedProduct.size1)}
                    >
                      {" "}
                      {selectedProduct.size1}
                    </span>
                    <span
                      className={`mr-4 cursor-pointer text-sm sizes p-2 ${
                        selectedSize === selectedProduct.size2
                          ? "custom-hover"
                          : ""
                      }`}
                      onClick={() => handleSizeClick(selectedProduct.size2)}
                    >
                      {" "}
                      {selectedProduct.size2}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex py-6">
                <button
                  className="h-14 bg-black text-white pl-4 pr-12 flex items-center flex-grow"
                  onClick={() => handleCart(selectedProduct)}
                >
                  <span className="text-center flex-grow mr-4">
                    Add to cart
                  </span>
                  <span className="border-l border-white pl-4">
                    $
                    {selectedSize === selectedProduct.size1
                      ? selectedProduct.pri
                      : selectedProduct.pri * 2}
                    .00
                  </span>
                </button>
              </div>
            </div>
            <Fragment>
              <Accordion open={open === 0}>
                <AccordionHeader onClick={() => handleOpen(1)} clas>
                  Shipping and returns
                </AccordionHeader>
                <AccordionBody>
                  Arrives in 5 to 7 days, returns accepted within 30 days. For
                  more information, click here.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  Details
                </AccordionHeader>
                <AccordionBody>
                  Slightly textured fabric with tonal geometric design and a bit
                  of shine
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default product;
