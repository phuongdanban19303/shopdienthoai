import React, { useContext, useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import banner1 from "../assets/banner1.jpg";
import { ueSerctx } from "../Context/UserContext";
import { useRef } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const Loginsingin = () => {
    const { erroracc, OnLogin, userLogin, Onlogout } = useContext(ueSerctx);
    console.log(userLogin);
    const inputRef = useRef(null);

    const handleClick = () => {
      inputRef.current.value = ""; // Xóa nội dung input
      inputRef.current.focus(); // Đặt lại focus vào input
    };

    const [accLogin, setaccLogin] = useState({});
    const getAccvalue = (name, value) => {
      setaccLogin((pre) => {
        return { ...pre, [name]: value };
      });
    };

    return (
      <div
        style={{
          width: "1200px",
          margin: "0 auto",
          height: "600px",
          backgroundImage: `url(${banner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex justify-center items-center"
      >
        {userLogin?.islogin ? (
          <div>
            <h1 className="text-4xl">Xin chào {userLogin?.name}</h1>
            <button className="bg-black text-white px-4 py-1.5 mt-2.5" onClick={()=>{Onlogout();setaccLogin({})}}>LOG OUT</button>
          </div>
        ) : (
          <div className="bg-white w-[400px] h-[500px] rounded-b-md shadow-xl relative">
            {erroracc?.email && (
              <p className="text-red-600 absolute top-[20px] left-[40px] font-bold">
                {erroracc?.email}
              </p>
            )}
      
            {erroracc?.password && (
              <p className="text-red-600 absolute top-[45px] left-[40px] font-bold">
                {erroracc?.password}
              </p>
            )}
            <p className="italic text-xl text-center pt-[100px]">SIGN IN</p>
            <div className="text-center border-gray-500 pt-[50px] ">
              <input
                className="border-gray-500  pl-3.5 text-black h-[40px]  border-1 w-[80%]"
                type="text"
                placeholder="Email"
                onChange={(e) => getAccvalue("email", e.target.value)}
                value={accLogin.email}
              />
              <input
                className="border-gray-500  pl-3.5 text-black h-[40px] border-1 w-[80%]"
                type="password"
                placeholder="Pass Word"
                onChange={(e) => getAccvalue("password", e.target.value)}
                ref={inputRef}
              />
            </div>
            <div className="text-center">
              <button
                onClick={() => {OnLogin(accLogin), handleClick()}}
                className="w-[80%] bg-[#494949] text-[#ffff] py-[8px] mt-3.5 "
              >
                SIGN IN
              </button>
              <p className="text-gray-500 pt-10">
                Don't have an account? <Link to="/register" className="text-blue-400 hover:text-blue-600 cursor-pointer">Click here to register</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <Header />
      <Loginsingin />
      <Footer />
    </div>
  );
};

export default LoginPage;
