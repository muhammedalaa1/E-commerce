import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Collection from "./Components/Collection/Collection";
// import Home from "./Components/Home/Home";
const LazyHome = React.lazy(() => import("./Components/Home/Home"));
const Collection = React.lazy(() =>
	import("./Components/Collection/Collection")
);
import Product from "./Components/product/Product";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/signup/Signup";
import Checkout from "./Components/Checkout/Checkout";
import Reciept from "./Components/Checkout/Reciept";
function App() {
	const [info, setInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		fullName: "",
		country: "",
		city: "",
		addressLine1: "",
		cardNumber: "",
		cvv: "",
		expMonth: "",
		expYear: "",
		shipmentMethod: "",
	});
	const [Coupon, setCoupon] = useState({ coupon: "", flag: "" });

	return (
		<>
			<SkeletonTheme baseColor="#313131" highlightColor="#525252">
				<Routes>
					<Route
						path="/"
						element={
							<React.Suspense fallback="Loading ...">
								{" "}
								<LazyHome />
							</React.Suspense>
						}
					/>
					<Route
						path="/Collection"
						element={
							<React.Suspense fallback="Loading ...">
								{" "}
								<Collection />
							</React.Suspense>
						}
					/>
					<Route path="/product/:id" element={<Product />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Signup" element={<Signup />} />
					<Route
						path="/Checkout"
						element={
							<Checkout
								info={info}
								setInfo={setInfo}
								Coupon={Coupon}
								setCoupon={setCoupon}
							/>
						}
					/>
					<Route
						path="/Reciept"
						element={<Reciept info={info} Coupon={Coupon} />}
					/>
				</Routes>
			</SkeletonTheme>
		</>
	);
}

export default App;
