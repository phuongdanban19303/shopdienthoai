import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const Data_Login = [
  {
    name: "phan duy phuong",
    email: "mifdanchoi@gmail.com",
    password: "12345678",
    number: "0364852922",
  },
];
export const ueSerctx = createContext();
const KEYUSER = "user_Register ";
const KEYLOGIN = "user_login ";

const getaccountslocal = () => {
  const data = localStorage.getItem(KEYUSER);
  return data ? JSON.parse(data) : Data_Login;
};
const Setaccountslocal = (accnt) => {
  localStorage.setItem(KEYUSER, JSON.stringify(accnt));
};
//////////////////////////////////
const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [Accounts, setAccounts] = useState(getaccountslocal());
  const [erroracc, seterroracc] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  ////////////////////////////////
  const getLoginlocal = () => {
    const data = localStorage.getItem(KEYLOGIN);
    return data ? JSON.parse(data) : {islogin:false };
  };
  const Setloginlocal = (accnt) => {
    localStorage.setItem(KEYLOGIN, JSON.stringify(accnt));
  };
  const [userLogin, setuserLogin] = useState(getLoginlocal());
  ///////////////////////////////
  const addAccount = (accnew) => {
    const { name, email, password, number } = accnew;
    if (!name || !email || !password || !number) {
      seterroracc({ ...erroracc, name: "Vui lòng nhập đầy đủ thông tin" });
      return;
    } else {
      seterroracc({ ...erroracc, name: "" });
    }
    if (!email.includes("@")) {
      seterroracc({ ...erroracc, email: "Email phải chứa '@'" });
      return;
    }
    if (password.length < 8) {
      seterroracc({
        ...erroracc,
        password: "Mật khẩu phải có ít nhất 8 ký tự",
      });
      return;
    }

    ///////////////
    const checkaccount = Accounts.find((acc) => acc.email === accnew.email);

    if (!checkaccount) {
      const newAccounts = [...Accounts, accnew];
      setAccounts(newAccounts);
      Setaccountslocal(newAccounts);
      navigate("/login");
    } else {
      seterroracc({ ...erroracc, email: "Email đã bị trùng" });
    }
  };
  console.log("th1",erroracc);

  const OnLogin =(acclogin)=>{
    const findlogin = Accounts.find((uesr)=>uesr.email===acclogin.email);
    if (!findlogin) {
        seterroracc({ ...erroracc, email: "Email Không tồn tại ",password: ""  });
        
        return;
    }
    seterroracc((prev) => ({ ...prev, email: ""})); 
    if (findlogin.password===acclogin.password) {
        const newlogin = {...userLogin,name:findlogin.name,islogin:true};
        setuserLogin(newlogin);
        Setloginlocal(newlogin)
    }
    else{
      seterroracc((prev) => ({ ...prev, password: "Mật khẩu không đúng" }));;
         console.log("check",erroracc);
         
    }

  }
  const Onlogout=()=>{
    const newlogin = {name:"",islogin:false};
        setuserLogin(newlogin);
        Setloginlocal(newlogin)
  }
  return (
    <ueSerctx.Provider value={{ Accounts, addAccount, erroracc, seterroracc,OnLogin,userLogin,Onlogout}}>
      {children}
    </ueSerctx.Provider>
  );
};

export default UserProvider;
