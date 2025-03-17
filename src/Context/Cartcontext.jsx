import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Cartctx = createContext();
const KEYCART = "listcart";
const getlistcart = () => {
  const data = localStorage.getItem(KEYCART);
  return data ? JSON.parse(data) : [];
};
const CartProvider = ({ children }) => {
  const [Listcart, Setlicart] = useState(getlistcart());
  //////
  const navigate=useNavigate();
  const Addtocart = (value) => {
    const check = Listcart?.find((prd) => prd.Id === value.Id);
    console.log("chec", check);

    if (!!check) return;
    const newcart = [...Listcart, value];
    Setlicart(newcart);
    localStorage.setItem(KEYCART, JSON.stringify(newcart));
    navigate("/cart")
  };
  const upCart = (id) => {
    Setlicart((pre) => {
      const newarr = pre.map((item) => {
        if (item.Id === id) {
          return { ...item, Quantity: item.Quantity + 1 };
        }
        return item;
      });

      localStorage.setItem(KEYCART, JSON.stringify(newarr));
      return newarr;
    });
  };
  const downCart = (id) => {
    Setlicart((pre) => {
      const check = Listcart.find((prd) => prd?.Id === id)?.Quantity === 1;
      if (check) {
        const newcart=Listcart.filter((pre) => pre.Id !== id);
        localStorage.setItem(KEYCART, JSON.stringify(newcart));
         return newcart
      }
      const newprd = pre.map((item) => {
        if (item.Id === id) {
            return { ...item, Quantity: item.Quantity - 1 };
          
        }
        return item
      });
      localStorage.setItem(KEYCART, JSON.stringify(newprd));

     return newprd;
    });
  };
  const deleteCart=(id)=>{
    Setlicart((pre)=>{
      const newdelete= pre.filter((item)=>item.Id!==id);  
      localStorage.setItem(KEYCART,JSON.stringify(newdelete));
      return newdelete
    })
  }

  return (
    <Cartctx.Provider value={{ Listcart, Addtocart, upCart, downCart,deleteCart }}>
      {children}
    </Cartctx.Provider>
  );
};

export default CartProvider;
