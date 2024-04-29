import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const global = createContext();

const Context = ({ children }) => {
  let { Provider } = global;
  let [listObject, setListObject] = useState([]);
  let [count, setCount] = useState(0);

  let fetchd =  async() => {
    let { data } = await axios.get("http://localhost:5000/list");
   
    setListObject(data);
  };
  useEffect(() => {
    fetchd();
  }, [count]);

  return <Provider value={{ count, setCount,listObject, setListObject ,fetchd}}>{children}</Provider>;
};

export default Context;
