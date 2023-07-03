import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import "../Home/Home.scss";
import img from "./2.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <>
      <footer className="pt-12">
        <div className="custom-container px-4 mb-12 footer-follow ">
          <div className=" flex-wrap footer-follow--header">
            <div className="px-4 footer-follow--title">
              <p className="font-size-display1 mb-4 max-w-md ">
                Follow us on Instagram for more updates
              </p>
              <div className="flex">
                <Link
                  to="/about"
                  className="flex py-4 items-center text-black border-b border-black"
                >
                  <p className="mr-4">Follow us</p>
                  <img
                    src="https://commercejs-demo-store.netlify.app/icon/arrow-long-right.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="flex footer-follow--images">
              <div className="sm:justify-end flex-col follow-images ">
                <div
                  style={{
                    paddingBottom: "100%",
                    backgroundImage:
                      'url("https://commercejs-demo-store.netlify.app/images/insta/1.png")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                  className="sds"
                ></div>
              </div>
              <div className="sm:justify-end flex-col follow-images ">
                {" "}
                <div
                  style={{
                    paddingBottom: "100%",
                    backgroundImage:
                      'url("https://commercejs-demo-store.netlify.app/images/insta/2.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transform: "translateY(62px)",
                  }}
                ></div>
              </div>
              <div className="sm:justify-end flex-col follow-images">
                {" "}
                <div
                  style={{
                    paddingBottom: "100%",
                    backgroundImage:
                      'url("https://commercejs-demo-store.netlify.app/images/insta/3.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transform: "translateY(12px)",
                  }}
                ></div>
              </div>
              <div className="sm:justify-end flex-col follow-images">
                {" "}
                <div
                  style={{
                    paddingBottom: "100%",
                    backgroundImage:
                      'url("https://commercejs-demo-store.netlify.app/images/insta/4.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transform: "translateY(82px)",
                  }}
                ></div>
              </div>
              <div className="sm:justify-end flex-col follow-images">
                {" "}
                <div
                  style={{
                    paddingBottom: "100%",
                    backgroundImage:
                      'url("https://commercejs-demo-store.netlify.app/images/insta/5.jpg")',
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transform: "translateY(22px)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="pt-12" id="contact">
        <div className="custom-container mb-12 pb-12 pt-12">
          <div className="row">
            <div className="w-full sm:w-6/12 md:w-4/12">
              {" "}
              <p className="font-family-secondary font-size-display1 mb-6">
                E-commerce
              </p>
              <div className="flex mb-12 pb-4 md:pb-0 md:mb-0 text-gray-600">
                <div className="pr-12">
                  <Link className="block mb-4" to="/about">
                    About
                  </Link>
                  <Link to="/Collection">Collection</Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12">
              <p className="font-family-secondary font-size-display1 mb-6">
                Social Media
              </p>
              <div className="flex mb-12 pb-4 md:pb-0 md:mb-0 text-gray-600">
                <div className="pr-12">
                  <Link
                    className="block mb-4"
                    to="https://www.linkedin.com/in/muhammed-alaa-b878051b8/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    to="https://twitter.com/MuHamme59273554"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </div>
                <div>
                  <Link
                    className="block mb-4"
                    to="https://www.instagram.com/muhammedalaa24/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                  <Link
                    to="https://www.facebook.com/muhammedalaa2213"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12">
              <p className="font-family-secondary font-size-display1 mb-6">
                Subscribe to get our news
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border-b border-gray-400 h-12 w-full"
                />
                <button className="bg-transparent absolute right-0">
                  <img
                    src="https://commercejs-demo-store.netlify.app/icon/arrow-long-right.svg"
                    alt=""
                    className="w-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-12">
          <div className="bg-brand">
            <div className="custom-container flex flex-col md:flex-row items-center justify-between ">
              <div className="pt-12 pb-0 md:pt-6 md:pb-6 flex items-center flex-wrap justify-center">
                <Link to="https://github.com/muhammedalaa1" target="_blank">
                  <GitHubIcon className="github" />
                </Link>
                <Link
                  className="ml-4"
                  to="https://github.com/muhammedalaa1"
                  target="_blank"
                >
                  <LinkedInIcon className="github" />
                </Link>
              </div>
              <div className="py-6 text-right font-size-caption text-sm md:text-lg">
                <p>&copy; 2023 Made By Muhammed Alaa </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
