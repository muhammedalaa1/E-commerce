import React, { useEffect } from "react";
import Nav from "../Navbar/Nav";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Generate from "../Home/Generate";
import "./Product.scss";
import "./Collection.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { animateScroll as scroll } from "react-scroll";

const Collection = () => {
	useEffect(() => {
		const hash = window.location.hash.substring(1);
		if (hash) {
			const element = document.getElementById(hash);
			if (element) {
				window.scrollTo({
					top: element.offsetTop - 100,
					behavior: "smooth",
				});
			}
		}
	}, []);

	return (
		<>
			<Nav addClass={true} />
			<div className="py-12 my-12">
				<div className="py-6 flex">
					<div className="custom-container lg:block hidden">
						<div className="product-sidebar ">
							<div className="product-left-aside__category-list">
								<ul className="pl-0">
									<li>
										<a href="/Collection#facial-products">
											<div className="flex">
												<p className="mb-2 relative cursor-pointer font-medium text-xl">
													Facial Products<sup>3</sup>
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/Collection#hair-products">
											<div className="flex">
												<p className="mb-2 relative cursor-pointer font-medium text-xl">
													Hair Products<sup>3</sup>
												</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/Collection#body-products">
											<div className="flex">
												<p className="mb-2 relative cursor-pointer font-medium text-xl">
													Body Products<sup>3</sup>
												</p>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="custom-container">
						<div className="row">
							<div className="w-full lg:w-10/12 lg:ml-2">
								<div className="collection">
									<div>
										<p
											className="text-xl font-medium mb-6"
											id="facial-products"
										>
											Facial Products
										</p>
										<div className="row mb-12 collection-1">
											<div className="w-6/12 sm:w-4/12 md:w-3/12">
												<Link
													to="/product/1"
													className="mb-12 block text-black cursor-pointer"
												>
													<div
														className="mb-4 prd"
														style={{
															backgroundImage:
																'url("../../.././imgs/miss_rose_3d_fantastic_mineral_matte_lipstick__37_1506620679_19c9e4bc.jpg")',
															backgroundPosition: "center center",
															backgroundSize: "cover",
														}}
													></div>
													<Generate
														tit="lip-fantastic"
														id={1}
														img="../../.././imgs/miss_rose_3d_fantastic_mineral_matte_lipstick__37_1506620679_19c9e4bc.jpg"
														desc="A limited-edition, nourishing lip gel to top off your look and feel fantastic."
														pri="$24"
														cat="facial"
													/>
												</Link>
											</div>
											<div className="w-6/12 sm:w-4/12 md:w-3/12 ml-4">
												<Link
													to="/product/2"
													className="mb-12 block text-black cursor-pointer"
												>
													<div
														className="mb-4 prd"
														style={{
															backgroundImage:
																'url("../../.././imgs/212901_q1tVTrQGZJhOQ3ua.jpg")',
															backgroundPosition: "center center",
															backgroundSize: "cover",
														}}
													></div>
													<Generate
														tit="Eye Purity Gels"
														id={2}
														img='url("../../.././imgs/212901_q1tVTrQGZJhOQ3ua.jpg")'
														desc="Treat your skin with active pore enzymes that replenish sun damaged skin."
														pri="$18"
														cat="facial"
													/>
												</Link>
											</div>
											<div className="w-6/12 sm:w-4/12 md:w-3/12 ml-4">
												<Link
													to="/product/3"
													className="mb-12 block text-black cursor-pointer"
												>
													<div
														className="mb-4 prd"
														style={{
															backgroundImage:
																'url("../../.././imgs/Complexion.png")',
															backgroundPosition: "center center",
															backgroundSize: "cover",
														}}
													></div>
													<Generate
														tit="Complexion Cream"
														id={3}
														img="../../.././imgs/Complexion.png"
														desc="Anti-aging complexion cream for medium to dry skin. Nourish your face with a natural vitamin burst for that perfectly balanced glow."
														pri="$32"
														cat="facial"
													/>
												</Link>
											</div>
										</div>
									</div>
									<div id="hair-products">
										<p className="text-xl font-medium mb-6">Hair Products</p>
										<div className="row mb-12 collection-1">
											<div className="w-6/12 sm:w-4/12 md:w-3/12">
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
														pri="$25"
														cat="hair"
													/>
												</Link>
											</div>
											<div className="w-6/12 sm:w-4/12 md:w-3/12 ml-4">
												<Link
													to="/product/5"
													className="mb-12 block text-black cursor-pointer"
												>
													<div
														className="mb-4 prd"
														style={{
															backgroundImage:
																'url("https://cdn.chec.io/merchants/17851/images/e62bac70e3f29684c06bc36574c48d6afc5629ae5f08c2afc54bf|hair-set.jpg")',
															backgroundPosition: "center center",
															backgroundSize: "cover",
														}}
													></div>
													<Generate
														tit="Shampoo & Conditioner Set"
														id={5}
														img='url("https://cdn.chec.io/merchants/17851/images/e62bac70e3f29684c06bc36574c48d6afc5629ae5f08c2afc54bf|hair-set.jpg")'
														desc="Weightless, color safe, and cleansing Verb Ghost shampoo and conditioner set."
														pri="$65"
														cat="hair"
													/>
												</Link>
											</div>
											<div className="w-6/12 sm:w-4/12 md:w-3/12 ml-4">
												<Link
													to="/product/6"
													className="mb-12 block text-black cursor-pointer"
												>
													<div
														className="mb-4 prd"
														style={{
															backgroundImage:
																'url("https://cdn.chec.io/merchants/17851/images/3019e70937032bb24ec27722b9b896f12531a5875f08c2cd13714|hair-oil.jpg")',
															backgroundPosition: "center center",
															backgroundSize: "cover",
														}}
													></div>
													<Generate
														tit="Rose Hair & Body Oil"
														id={3}
														img="https://cdn.chec.io/merchants/17851/images/3019e70937032bb24ec27722b9b896f12531a5875f08c2cd13714|hair-oil.jpg"
														desc="A multitasking oil for hair and body that’s perfect for those on the go."
														pri="$38"
														cat="hair"
													/>
												</Link>
											</div>
										</div>
									</div>
									<div id="body-products" className="mt-3">
										<p className="text-xl font-medium mb-6 mt-3">
											Body Products
										</p>
										<div className="row mb-12 collection-1">
											<div className="w-6/12 sm:w-4/12 md:w-3/12">
												<Link
													to="/product/7"
													className="mb-12 block text-black cursor-pointer"
												>
													<div
														className="mb-4 prd"
														style={{
															backgroundImage:
																'url("../../.././imgs/Jade Face Rollers - What Do They Really Do_.png")',
															backgroundPosition: "center center",
															backgroundSize: "cover",
														}}
													></div>
													<Generate
														tit="Face & Body Roller"
														id={1}
														img="../../.././imgs/Jade Face Rollers - What Do They Really Do_.png"
														desc="Enrich your morning and evening beauty ritual and to help reduce the appearance of puffiness and wrinkles."
														pri="$18"
														cat="body"
													/>
												</Link>
											</div>
											<div className="w-6/12 sm:w-4/12 md:w-3/12 ml-4">
												<Link
													to="/product/8"
													className="mb-12 block text-black cursor-pointer"
												>
													<div
														className="mb-4 prd"
														style={{
															backgroundImage:
																'url("https://cdn.chec.io/merchants/17851/images/19e486f3eabbc47e5b6c8c590b38a83c3832e88e5f08c2019b039|scrub.jpg")',
															backgroundPosition: "center center",
															backgroundSize: "cover",
														}}
													></div>
													<Generate
														tit="Cure Srub Kit"
														id={2}
														img='url("https://cdn.chec.io/merchants/17851/images/19e486f3eabbc47e5b6c8c590b38a83c3832e88e5f08c2019b039|scrub.jpg")'
														desc="Cleanse and rejuvenate your skin with bamboo bristle scrubbing brushes."
														pri="$51"
														cat="body"
													/>
												</Link>
											</div>
											<div className="w-6/12 sm:w-4/12 md:w-3/12 ml-4">
												<Link
													to="/product/9"
													className="mb-12 block text-black cursor-pointer"
												>
													<div
														className="mb-4 prd"
														style={{
															backgroundImage:
																'url("https://cdn.chec.io/merchants/17851/assets/aBWsr09E5CudF6Gm|body-oil-2.jpg")',
															backgroundPosition: "center center",
															backgroundSize: "cover",
														}}
													></div>
													<Generate
														tit="Molecule Body Oil"
														id={3}
														img="https://cdn.chec.io/merchants/17851/assets/aBWsr09E5CudF6Gm|body-oil-2.jpg"
														desc="For a silky smooth finish, the Molecule Body Oil is a perfect addition for your post shower treatment."
														pri="$23"
														cat="body"
													/>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
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
											loading="lazy"
										/>
									</Link>
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

export default Collection;
