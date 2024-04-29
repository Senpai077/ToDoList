import React, { useContext, useEffect, useState } from "react";
import { global } from "./Context";
import { LiaStickerMule } from "react-icons/lia";
import toast from "react-hot-toast";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

const LandingPage = () => {
  let { listObject, count, setCount } = useContext(global);
  let [item, setItem] = useState({ title: "", disc: "" });

  let navigate = useNavigate();

  let changeHandler = (e) => {
    let { name, value } = e.target;

    setItem({ ...item, [name]: value });
  };

  let handleForm = (e) => {
    e.preventDefault();

    setItem({ title: "", disc: "" });
    saveData();
  };

  let saveData = async () => {
    await axios.post("http://localhost:5000/list", item);
    setCount(count + 1);
    toast.success("Data saved successfully");
  };

  function deleteTask(id) {
    axios.delete(`http://localhost:5000/list/${id}`);
    setCount(count + 1);
    toast.success("task deleted sucessfully");
  }

  return (
    <section className="hp">
      <h1>T0 dO LIst</h1>
      <div className="home">
      <Outlet />
        <form action="" onSubmit={handleForm}>
          <div className="t1">
            <label htmlFor="">Title :</label>
            <input
              type="text"
              name="title"
              value={item.title}
              onChange={changeHandler}
            />
            <hr />
          </div>
          <div className="t1">
            <label htmlFor="">Discription :</label>
            <textarea
              name="disc"
              value={item.disc}
              onChange={changeHandler}
              id=""
              cols="30"
              rows="1"
            ></textarea>
            <hr />
          </div>
          <div className="submit opt">
            <button>ADD</button>
          </div>
        </form>
      </div>
      <div className="tdl">
        {listObject.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="data">
                <h4 className="kk">{item.title}</h4>
                <p>{item.disc}</p>
              </div>
              <div className="opt">
                <button onClick={() => deleteTask(item.id)}>Delete</button>
                <button onClick={() => navigate("/update", { state: item })}>
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
     
    </section>
  );
};

export default LandingPage;
