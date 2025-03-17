import React, { useContext, useState } from "react";
import { Cartctx } from "../Context/Cartcontext";
import Header from "../Component/Header";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#F6F9F6] h-[150px] flex justify-between items-center px-16 max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold">CART</h1>
      <p className="text-lg">Shopping Cart</p>
    </div>
  );
};
////////////////////////////
const Shoppingcart = () => {
  const { Listcart, upCart, downCart, deleteCart } = useContext(Cartctx);
  console.log(Listcart);
  const navigate = useNavigate();

  const totalSum = Listcart.reduce(
    (acc, prd) => acc + Number(prd.price) * prd.Quantity,
    0
  );
  localStorage.setItem("Sum",JSON.stringify(totalSum))
  console.log("tong", totalSum);

  const renderCart = () => {
    return Listcart.map((prd) => {
      let numpire = Number(prd?.price);
      let total = numpire * Number(prd?.Quantity);
      return (
        <tr key={prd?.Id}>
          <td className="px-6 py-4">
            <img src={prd?.img} className="w-24  rounded-lg" alt={prd?.Name} />
          </td>
          <td className="px-6 py-4">{prd?.Name}</td>
          <td className="px-6 py-4">{numpire.toLocaleString("vi-VN")} VND</td>
          <td className="px-6 py-4">
            <div className="flex items-center space-x-2  p-2 rounded">
              <AiOutlineCaretLeft
                onClick={() => downCart(prd?.Id)}
                className="cursor-pointer text-gray-500 hover:text-black"
              />
              <span className="text-lg font-bold">{prd?.Quantity}</span>
              <AiOutlineCaretRight
                onClick={() => upCart(prd?.Id)}
                className="cursor-pointer text-gray-500 hover:text-black"
              />
            </div>
          </td>
          <td className="px-6 py-4">{total.toLocaleString("vi-VN")} VND</td>
          <td className="px-6 py-4">
            <button className="text-red-500 hover:text-red-700">
              <RiDeleteBin6Line onClick={() => deleteCart(prd?.Id)} />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">SHOPPING CART</h1>
      <div className="flex gap-9.5">
        <table className="w-[70%]  bg-white shadow-md">
          <thead className="bg-[#F8F9FA] text-gray-600 uppercase">
            <tr>
              <th className="px-6 py-3">IMG</th>
              <th className="px-6 py-3">PRODUCT</th>
              <th className="px-6 py-3">PRICE</th>
              <th className="px-6 py-3">QUANTITY</th>
              <th className="px-6 py-3">TOTAL</th>
              <th className="px-6 py-3">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {Listcart.length > 0 ? (
              renderCart()
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  Bạn chưa thêm sản phẩm nào vào giỏ hàng
                </td>
              </tr>
            )}
            <tr className="bg-[#F8F9FA]">
              <td colSpan="3" className="py-4 text-gray-500" onClick={()=>navigate("/shop")} >
                Continue shopping
              </td>
              <td colSpan="3" className="text-right py-4 text-gray-500">
                <button onClick={()=>navigate("/checkout")} className="border rounded-3xl shadow-2xs p-1.5 mr-2.5">
                  Proceed to checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-[30%] bg-[#F8F9FA] p-[30px]">
          <p className="text-2xl">CART TOTAL</p>
          <div className="flex justify-between pt-3.5">
            <p>SUBTOTAL</p>
            <p>{totalSum.toLocaleString("Vi-VN")}</p>
          </div>
          <div className="flex justify-between py-5">
            <p>TOTAL</p>
            <p>{totalSum.toLocaleString("Vi-VN")}</p>
          </div>
          <div className="grid">
            <input
              type="text"
              placeholder="Nhập mã giảm giá"
              className="bg-white border-2 py-2 pl-2 border-black/30 "
            />
            <button className="bg-black text-white h-10  flex justify-center items-center">
              <FaGift />
              Apply counpon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Shoppingcart />
    </div>
  );
};

export default CartPage;
