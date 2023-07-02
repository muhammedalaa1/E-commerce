import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Generate from "./Generate";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import home1 from "./imgs/home-2.jpg";
import home2 from "./imgs/home-3.jpg";
import home3 from "./imgs/home-4.jpg";
import { EffectFade } from "swiper";
import "./Home.scss";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
// Initialize SwiperCore modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
const images = [home1, home2, home3];

const Slide = ({ backgroundImage, title, description }) => {
  return (
    <div
      className="hero-Slide flex items-center justify-center flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className="text-center font-size-display hero-shadow">{title}</p>
      <p className="text-white uppercase text-xl mb-12 hero-shadow">
        {description}
      </p>
      <Link
        to="/Collection"
        className="flex bg-transparent text-white border border-white px-12 h-14 items-center hero-shadow hover"
      >
        Shop Now
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Nav />
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500 }}
          effect="fade"
          modules={[EffectFade]}
          speed={2000}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Slide
                backgroundImage={image}
                title="The care you've always needed"
                description="A range of products for you"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="p-12">
          <p className="mx-auto text-center mt-12 text-3xl uppercase font-size-display1">
            Moisture is the essence of wetness, and wetness is the essence of
            beauty.
          </p>
          <div className="flex items-center justify-center mt-4 mb-12">
            <Link to="/about" className="flex border-b border-black py-6">
              <p className="mr-4 text-sm font-medium">Find out more</p>
              <img
                src="https://commercejs-demo-store.netlify.app/icon/arrow-long-right.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="bg-brand py-12 collection-banner">
          <div className="custom-container py-12">
            <p className="font-size-display2 my-4 py-12 text-center font-family-secondary">
              Categories
            </p>
            <div className="flex flex-wrap ">
              <div className="md:w-1/3 w-full mb-12 collection-item px-2">
                <Link
                  to="/Collection#facial-products"
                  className="items-center text-black cursor-pointer mb-12 flex-col"
                >
                  <div className="facial collection-item-image"></div>
                  <p className="mb-2 text-2xl">Facial Products</p>
                </Link>
              </div>
              <div className="md:w-1/3 w-full mb-12 collection-item px-2">
                <Link
                  to="/collection#hair-products"
                  className="items-center text-black cursor-pointer mb-12 flex-col"
                >
                  <div className="hair collection-item-image"></div>
                  <p className="mb-2 text-2xl">Hair Products</p>
                </Link>
              </div>
              <div className="md:w-1/3 w-full mb-12 collection-item px-2">
                <Link
                  to="/collection#body-products"
                  className="items-center text-black cursor-pointer mb-12 flex-col"
                >
                  <div className="body collection-item-image "></div>
                  <p className="mb-2 text-2xl">Body Products</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container py-12 my-12">
          <div className="flex flex-col items-center mb-12 pb-6">
            <p className="mb-6 text-gray-700">
              Introducing Our Latest Products
            </p>
            <p className="text-center font-size-display1 mb-4 max-w-lg font-medium">
              Limited reservations on upcoming products and restocks.
            </p>
            <Link
              to="/Collection"
              className="flex py-4 items-center text-black border-b border-black"
            >
              <p className="mr-4">See more products </p>
              <img
                src="https://commercejs-demo-store.netlify.app/icon/arrow-long-right.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="flex flex-wrap mb-12">
            <div className="w-1/2 sm:w-1/2 lg:w-1/4  px-2">
              <Link
                to="/product/1"
                className="mb-12 block text-black cursor-pointer"
              >
                <div
                  className="mb-4 prd"
                  style={{
                    backgroundImage:
                      'url("https://cdn.chec.io/merchants/17851/images/cdae2365eff5a961dd838b0505a1142b656efdf95f08c2785b59a|lips.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <Generate
                  tit="lip-fantastic"
                  id={1}
                  img="https://cdn.chec.io/merchants/17851/images/cdae2365eff5a961dd838b0505a1142b656efdf95f08c2785b59a|lips.jpg"
                  desc="A limited-edition, nourishing lip gel to top off your look and feel fantastic."
                  pri="$24"
                  cat="facial"
                />
              </Link>
            </div>
            <div className="w-1/2 sm:w-1/2 lg:w-1/4 px-2">
              <Link
                to="/product/2"
                className="mb-12 block text-black cursor-pointer"
              >
                <div
                  className="mb-4 prd"
                  style={{
                    backgroundImage:
                      'url("https://cdn.chec.io/merchants/17851/images/c3cf1b72aaa232ba2ab495bd7485efe29cee138b5f08c2f945173|gel.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>

                <Generate
                  tit="Eye Purity Gels"
                  id={2}
                  img="https://cdn.chec.io/merchants/17851/images/c3cf1b72aaa232ba2ab495bd7485efe29cee138b5f08c2f945173|gel.jpg"
                  desc="Treat your skin with active pore enzymes that replenish sun damaged skin."
                  pri="$18.00"
                  cat="facial"
                />
              </Link>
            </div>
            <div className="w-1/2 sm:w-1/2 lg:w-1/4 px-2">
              <Link
                to="/product/3"
                className="mb-12 block text-black cursor-pointer"
              >
                <div
                  className="mb-4 prd"
                  style={{
                    backgroundImage:
                      'url("https://cdn.chec.io/merchants/17851/images/bf9cf6844f6febb697cbba7dcbbc048abc6c1cea5f08c2e616a7c|cream.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <Generate
                  tit="Complexion Cream"
                  id={3}
                  img="https://cdn.chec.io/merchants/17851/images/bf9cf6844f6febb697cbba7dcbbc048abc6c1cea5f08c2e616a7c|cream.jpg"
                  desc="Anti-aging complexion cream for medium to dry skin. Nourish your face with a natural vitamin burst for that perfectly balanced glow."
                  pri="$32.00"
                  cat="facial"
                />
              </Link>
            </div>
            <div className="w-1/2 sm:w-1/2 lg:w-1/4 px-2">
              <Link
                to="/product/4"
                className="mb-12 block text-black cursor-pointer"
              >
                <div
                  className="mb-4 prd"
                  style={{
                    backgroundImage:
                      'url("https://cdn.chec.io/merchants/17851/images/b115a9b1e7206e735653a4a9a38f429ccca4186c5f08c293d7a5b|hair-beauty.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <Generate
                  tit="Hair Beauty Bath"
                  id={4}
                  img="https://cdn.chec.io/merchants/17851/images/b115a9b1e7206e735653a4a9a38f429ccca4186c5f08c293d7a5b|hair-beauty.jpg"
                  desc="Made for your hair, a bath foam that brings your hair back to life."
                  pri="$25.00"
                  cat="hair"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="py-12 mb-12 explore-banner">
          <div className="bg-brand relative md:py-12">
            <div className="md:absolute left-0 right-0 bottom-0">
              <div className="custom-container px-0">
                <div className="row">
                  <div className="md:w-5/12 custom-image">
                    <div className="relative">
                      <div className="md:absolute right-0 left-0 bottom-0">
                        <div className="explore-banner--image"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-container md:py-12">
              <div className="flex py-12 ">
                <div className="w-full md:w-1/2 py-12">
                  <p className="font-size-display3 font-serif  mb-6">
                    A new shopping experience
                  </p>
                  <div className="flex">
                    <Link
                      to={"/collection"}
                      className="flex py-4 items-center text-black border-b border-black"
                    >
                      <p className="mr-4">Explore Products</p>
                      <img
                        src="https://commercejs-demo-store.netlify.app/icon/arrow-long-right.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
