import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useEffect, useState } from "react";
import { fetchlist } from "../Funtion/FuntiongetAPI";
import { useNavigate } from "react-router-dom";
const Categorys = [
  { name: "APPLE", sub: ["ALL"] },
  { name: "IPHONE & MAC", sub: ["iPhone", "iPad", "Macbook"] },
  { name: "WIRELESS", sub: ["Airpod", "Watch"] },
  { name: "OTHER", sub: ["Mouse", "Keyboard", "Other"] },
];
const Banner = () => {
  return (
    <div
      style={{ width: "1200px", margin: "0 auto" }}
      className="bg-[#F6F9F6] h-[150px] flex justify-between"
    >
      <h1 className="text-2xl pt-[60px] pl-[60px]">SHOP</h1>
      <p className="pt-[60px] pr-[60px]">SHOP</p>
    </div>
  );
};
//body-------/
const Bodyshop = () => {
  const [Category, setCategory] = useState("ALL");
  console.log(Category);
  const[activename,setactivenam]=useState(Categorys[0].name)
  const[actsub,setactsub]=useState();

  const [Prdshop, setPrdshop] = useState([]);
  //////////API/////////
  console.log(Prdshop);
  const fetchData = async () => {
    const data = await fetchlist();
    if (data) {
      setPrdshop(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const aticeSub=(item)=>{
    setCategory(item);
    setactsub(item)
  }

  /////////////////////
  const renderCategory = () => {
    return Categorys.map((ctr) => {
      return (
        <div key={ctr?.name}>
          <h3 className={`${activename===ctr.name ? "bg-black text-white":"bg-amber-200"}`} onClick={()=>setactivenam(ctr.name)}>{ctr?.name}</h3>
          <ul>
            {ctr.sub.map((item) => {
              return (
                <li key={item}  className={`${actsub===item ? "text-amber-700":""}`} onClick={() =>aticeSub(item) }>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };
  ///////////////////
  const renderlistprd = () => {
    const navigate =useNavigate();
    let filteredData = Prdshop;

  if (Category !== "ALL") {
    filteredData = Prdshop.filter((item) =>
      item?.category?.toLowerCase().includes(Category.toLowerCase())
    );
    
  }

    return filteredData.map((prd) => {
      const price = Number(prd?.price); 
      const pire = price.toLocaleString("vi-VN");
      return (
        <div key={prd?._id?.$oid} className="w-[25%] p-1">
          <img
            className="hover:opacity-80"
            src={prd?.img1}
            alt={`anh${prd?.name}`}
          />
          <div className="text-center px-1.5">
            <p className="font-bold"onClick={()=>navigate(`/detail/${prd?._id?.$oid}`)}>{prd?.name}</p>
            <p>{pire} VND</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div style={{ width: "1200px", margin: "0 auto", height:"700px" }} className="flex pt-2.5">
      <div className="w-[20%]">
        <h2 className="text-xl">CATEGORIES</h2>
        <div>{renderCategory()}</div>
      </div>
      <div className="w-[80%]">
        <div className="flex  justify-between">
          <input placeholder="Nhap thong tin" className="border-2 border-black/30 rounded-xs" />
          <div className="w-2xs flex justify-end">
            <select className="border-1">
              <option>Default</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap ">{renderlistprd()}</div>
      </div>
    </div>
  );
};

const ShopPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Bodyshop />
      <Footer />
    </div>
  );
};

export default ShopPage;