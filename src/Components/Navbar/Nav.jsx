import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Collapse,
} from "@material-tailwind/react";
import MenuIcon from "@mui/icons-material/Menu";
import "./CartSideBar.scss";
import "./Nav.scss";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink } from "react-router-dom";
import useCart from "../../Hooks/Cart";
import CartSideBar from "./CartSideBar";

const Nav = ({ addClass }) => {
  //Mobile NavBar
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  //Cart Toggle
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  //Total Quantity Display
  const { totalQuantity } = useCart();

  //Nav Bar Transition effect
  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setScrollClass("scrolled"); // Add your desired class name here
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10">
        <div
          className={`flex header items-center justify-between border-transparent text-white ${
            addClass ? "scrolled" : scrollClass
          }`}
        >
          <div>
            <Link to="/" className="font-serif font-bold text-xl">
              {" "}
              E-Commerce
            </Link>
          </div>
          <div className="lg:flex hidden space-x-72">
            <Link className="" to="/Collection">
              Shop
            </Link>
            <a className="" href="/#contact">
              Contact
            </a>
          </div>

          <div className={`${isCartOpen ? "hidden" : ""}`}>
            <IconButton
              aria-label="Show cart items"
              color="inherit"
              onClick={handleCartToggle}
            >
              <Badge badgeContent={totalQuantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
        <div
          className="menu-icon absolute right-2 border-l-2 border-black p-1 top-7"
          onClick={handleShowNavbar}
        >
          <MenuIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className={` ${showNavbar ? "" : "hidden"}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Collection">Shop</NavLink>
            </li>
            <li>
              <a href="/#contact">Conatct</a>
            </li>
          </ul>
        </div>
        {isCartOpen && (
          <CartSideBar isCartOpen={isCartOpen} setisCartOpen={setIsCartOpen} />
        )}
      </header>
    </>
  );
};

export default Nav;
