import React, { useContext } from "react";
import { Cartctx } from "../Context/Cartcontext";
import Header from "../Component/Header";
///////////////
const Banner = () => {
  return (
    <div
      style={{ width: "1200px", margin: "0 auto" }}
      className="bg-[#F6F9F6] h-[150px] flex justify-between"
    >
      <h1 className="text-2xl pt-[60px] pl-[60px]">CHECK OUT</h1>
      <p className="pt-[60px] pr-[60px]">CHECK OUT</p>
    </div>
  );
};
//////////
const Shoppingcart = () => {
  const { Listcart } = useContext(Cartctx);
  const datasum = localStorage.getItem("Sum");
  const newdata = datasum ? JSON.parse(datasum) : 0;
  return (
    <div
      style={{ width: "1200px", margin: "0 auto" }}
      className="flex gap-6 pt-10"
    >
      <div className="w-[70%]">
        <h1 className="text-2xl">BILLING DETAILS</h1>
        <div>
          <p>FULL NAME:</p>
          <input type="text" className="w-[100%] border-2 border-black/20" />
        </div>
        <div>
          <p>EMAIL:</p>
          <input type="text" className="w-[100%] border-2 border-black/20" />
        </div>
        <div>
          <p>PHONE NUMBER:</p>
          <input type="text" className="w-[100%] border-2 border-black/20" />
        </div>
        <div>
          <p>ADREES:</p>
          <input type="text" className="w-[100%] border-2 border-black/20" />
        </div>
      </div>
      <div className="w-[30%]  bg-gray-100">
        <h1 className="text-2xl">YOUR ODER</h1>
        {Listcart.map((item) => {
          return (
            <>
              <div className="flex justify-between">
                <p>{item?.Name}</p>
                <p>{item?.price}x{item?.Quantity}</p>
              </div>
            </>
          );
        })}
        <div className="flex justify-between">
          <p>TOTAL</p>
          <p className="text-gray-500">{newdata}</p>
        </div>
      </div>
    </div>
  );
};
const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Shoppingcart />
    </div>
  );
};

export default CheckoutPage;
