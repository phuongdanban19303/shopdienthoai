import React, { useContext, useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import banner1 from "../assets/banner1.jpg";
import { ueSerctx } from "../Context/UserContext";

const RegisterPage = () => {
  const Login = () => {
    const { Accounts, addAccount, erroracc } = useContext(ueSerctx);
    const [acctregister, setaccregister] = useState({});
    console.log("llo", erroracc?.name);

    const getAccvalue = (name, value) => {
      setaccregister((pre) => {
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
        <div className="bg-white w-[400px] h-[500px] rounded-b-md shadow-xl relative">
          {erroracc?.email && (
            <p className="text-red-600 absolute top-[20px] left-[40px] font-bold">
              {erroracc?.email}
            </p>
          )}
          {erroracc?.name && (
            <p className="text-red-600 absolute top-[70px] left-[40px] font-bold">
              {erroracc?.name}
            </p>
          )}
          {erroracc?.password && (
            <p className="text-red-600 absolute top-[45px] left-[40px] font-bold">
              {erroracc?.password}
            </p>
          )}
          <p className="italic text-xl text-center pt-[100px]"> SING UP</p>
          <div className="text-center border-gray-500 pt-[50px] ">
            <input
              className="border-gray-500 pl-3.5 text-black h-[40px] border-1 w-[80%]"
              type="text"
              placeholder="Full Name"
              onChange={(e) => getAccvalue("name", e.target.value)}
            />
            <input
              className="border-gray-500  pl-3.5 text-black h-[40px]  border-1 w-[80%]"
              type="text"
              placeholder="Email"
              onChange={(e) => getAccvalue("email", e.target.value)}
            />
            <input
              className="border-gray-500  pl-3.5 text-black h-[40px] border-1 w-[80%]"
              type="text"
              placeholder="Pass Word"
              onChange={(e) => getAccvalue("password", e.target.value)}
            />
            <input
              className="border-gray-500  pl-3.5 text-black h-[40px]  border-1 w-[80%]"
              type="text"
              placeholder="Phone"
              onChange={(e) => getAccvalue("number", e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              onClick={() => addAccount(acctregister)}
              className="w-[80%] bg-[#494949] text-[#ffff] py-[8px] mt-3.5 "
            >
              SING UP
            </button>
            <p className="text-gray-500 pt-10">
              Login?<span className="text-blue-400">Click</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default RegisterPage;
