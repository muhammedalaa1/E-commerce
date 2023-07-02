import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Collection from "./Components/Collection/Collection";
import Home from "./Components/Home/Home";
import Product from "./Components/product/Product";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  return (
    <>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </SkeletonTheme>
    </>
    // <div>
    //   <Generate
    //     tit="test"
    //     pri={14453.5}
    //     desc={"lorem ipsum set"}
    //     img={"https://i.pravatar.cc"}
    //     cat={"electronic"}
    //     increment={++input}
    //   />
    //   <Generate
    //     tit="test"
    //     pri={14453.5}
    //     desc={"lorem ipsum set"}
    //     img={"https://i.pravatar.cc"}
    //     cat={"electronic"}
    //     increment={++input}
    //   />
    // </div>
  );
}

export default App;
