import React, { useContext, useEffect, useState } from "react";
import { fetchlist } from "../Funtion/FuntiongetAPI";
import Header from "../Component/Header";
import { useParams } from "react-router-dom";
import Footer from "../Component/Footer";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { Cartctx } from "../Context/Cartcontext";

const HearderDetail = ({ prdshop }) => {
  const [Quantity, SetQuantity] = useState(1);
  const augment = () => {
    SetQuantity((pre) => (pre += 1));
  };
  const rudece = () => {
    if (Quantity > 1) {
      SetQuantity((pre) => --pre);
    }
  };
  ////////////arttocart//////////
  const { Listcart, Addtocart } = useContext(Cartctx);
  const renderHeader = () => {
    return (
      <>
        <div
          className="flex"
          style={{ width: "1200px", margin: "0 auto", height: "700px" }}
        >
          <div className="w-[50%] relative ">
            <div className="flex justify-end">
              <img src={prdshop?.img1} alt="#" width={"80%"} />
            </div>
            <div className="absolute top-[40px] left-8 grid gap-y-1">
              <img src={prdshop?.img1} alt="#" width={"18%"} />
              <img src={prdshop?.img2} alt="#" width={"18%"} />
              <img src={prdshop?.img3} alt="#" width={"18%"} />
              <img src={prdshop?.img4} alt="#" width={"18%"} />
            </div>
          </div>
          <div className="w-[50%] px-10">
            <h1 className="text-2xl">{prdshop?.name}</h1>
            <p>{Number(prdshop?.price).toLocaleString("Vi-VN")}VND</p>
            <p>{prdshop?.short_desc}</p>
            <p> CATEGORY: {prdshop?.category}</p>
            <div className="flex">
              <div className="w-[35%] opacity-60 border-1 text-sm p-2 flex justify-between ">
                <p>QUANTITY</p>
                <div className="flex">
                  <AiOutlineCaretLeft className="size-5.5" onClick={rudece} />
                  <p className="text-black font-bold">{Quantity}</p>

                  <AiOutlineCaretRight className="size-5.5" onClick={augment} />
                </div>
              </div>
              <button
                onClick={() =>
                  Addtocart({
                    Id: prdshop?._id?.$oid,
                    Name: prdshop?.name,
                    img: prdshop?.img1,
                    price: prdshop?.price,
                    Quantity: Quantity,
                  })
                }
                className="bg-black p-1 px-4.5 text-amber-50"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <div>{renderHeader()}</div>;
};

const DetailPage = () => {
  const [prdshop, setPrdshop] = useState({});
  const [prdcatory, seprdcatory] = useState([]);
  console.log("prdcatory",prdcatory);
  
  const { id } = useParams();
  console.log("id", id);

  console.log(prdshop);

  const fetchData = async () => {
    const data = await fetchlist();

    if (data) {
      if (!!id) {
        const nemdata = data.find((item) => item?._id?.$oid === id);
        console.log(nemdata);
         if (nemdata) {
           const catoryprd= data.filter((item)=>item?.category== nemdata?.category )
           seprdcatory(catoryprd)
         }
        setPrdshop(nemdata);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {prdshop ? <HearderDetail prdshop={prdshop} /> : <p>k tồn tại</p>}
      <Footer />
    </div>
  );
};

export default DetailPage;
