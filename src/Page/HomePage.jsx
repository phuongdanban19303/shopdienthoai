import Header from "../Component/Header";
import Footer from "../Component/Footer";
import banner from "../assets/banner1.jpg";
import image1 from "../assets/product_1.png";
import image2 from "../assets/product_2.png";
import image3 from "../assets/product_3.png";
import image4 from "../assets/product_4.png";
import image5 from "../assets/product_5.png";

import React, { useContext, useEffect, useState } from "react";
import PopProvider, { Popupctx } from "../Context/Popupcontext";
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  return (
    <div
      style={{
        margin: "12px auto",
        width: "1200px",
        height: "300px", // Thêm chiều cao để ảnh hiển thị
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover", // Để ảnh phủ hết div
        backgroundPosition: "center", // Căn giữa ảnh
        backgroundRepeat: "no-repeat", // Không lặp ảnh
      }}
    >
      <div className="grid h-56 grid-cols-1 content-center ml-19 ">
        <p className="text-gray-500 text-xs">NEW INPASIOTON 2020</p>
        <h1 className=" text-3xl">
          20% OFF ON NEW <br />
          SEASON
        </h1>
        <button className="bg-gray-950 text-gray-200 px-2 py-1 w-[150px] mt-2">
          Browse collections
        </button>
      </div>
    </div>
  );
};

///////////////////////
const Category = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{ margin: "0px auto", width: "1200px" }}
      className="flex flex-col gap-4"
    >
      <div className="text-center h-auto ">
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <p>BROWSE OUR CATEGORIES</p>
      </div>
      <div className="flex justify-between">
        <img
          className="hover:opacity-80 transition-opacity duration-300"
          src={image1}
          alt="anh1anh1"
          onClick={()=>navigate("/shop")}
        />
        <img
          className="hover:opacity-80 transition-opacity duration-300"
          src={image2}
          alt="anh1anh2"
          onClick={()=>navigate("/shop")}

        />
      </div>
      <div className="flex justify-between">
        <img
          className="hover:opacity-80 transition-opacity duration-300"
          src={image3}
          alt="anh1anh3"
          onClick={()=>navigate("/shop")}

        />
        <img
          className="hover:opacity-80 transition-opacity duration-300"
          src={image4}
          alt="anh1anh4"
          onClick={()=>navigate("/shop")}

        />
        <img
          className="hover:opacity-80 transition-opacity duration-300"
          src={image5}
          alt="anh1anh5"
          onClick={()=>navigate("/shop")}
    
        />
      </div>
    </div>
  );
};
////////////////
 
const ListProduct = () => {
  const [listPrd, setListprd] = useState([]);
  const { openPop, closePop } = useContext(Popupctx);
  const navigate = useNavigate()
  const fetchlist = async () => {
    try {
      const repct = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const data = await repct.json();
      setListprd(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchlist();
  }, []);
  const displayList = () => {
    return listPrd.map((prd) => {
      const price = Number(prd?.price); // Chuyển giá trị thành số
      const pire = price.toLocaleString("vi-VN");
      return (
        <div key={prd?._id?.$oid} className="w-[25%] p-1">
          <img 
          className="hover:opacity-80"
            onClick={() =>
              openPop({
                img: prd?.img1,
                name: prd?.name,
                price: pire,
                shortdes: prd?.short_desc,
              })
            }
            src={prd?.img1}
            alt={`anh${prd?.name}`}
          />
          <div className="text-center px-1.5">
            -<p className="font-bold" onClick={()=>navigate(`/detail/${prd?._id?.$oid}`)}>{prd?.name}</p>
            <p>{pire} VND</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div style={{ margin: "0px auto", width: "1200px" }}>
      <p>MADE THE HARD WAY</p>
      <p className="pb-2">TOP  PRODUCTS</p>
      <div className="flex flex-wrap">{displayList()}</div>
    </div>
  );
};
////////

const Moreinformation = () => {
  return <div></div>;
};

const HomePage = () => {
  return (
    <PopProvider>
      <div>
        <Header />
        <Banner />
        <Category />
        <ListProduct />
        <Moreinformation />
        <Footer />
      </div>
    </PopProvider>
  );
};

export default HomePage;