import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { global } from "./Context";
import axios from "axios";
import toast from "react-hot-toast";

const Update = () => {
  let { state } = useLocation();
  console.log(state);

  let [item, setItem] = useState({ title: state.title, disc: state.disc });
  let { fetchd, count, setCount } = useContext(global);
  let navigate = useNavigate();

  let changeHandler = (e) => {
    let { name, value } = e.target;

    setItem({ ...item, [name]: value });
    console.log(item);
  };

  let handleForm = (e) => {
    e.preventDefault();

    setItem({ title: "", disc: "" });
    updateData();
  };

  let updateData = async () => {
    await axios.put(`http://localhost:5000/list/${state.id}`, item);
    toast.success("Data updated successfully");
    setCount(count + 1);
    navigate("/");x
  };

  return (
    <section className="update">
      <div className="home">
        <form action="" onSubmit={handleForm}>
          <div className="t1">
            <label htmlFor="">Title :</label>
            <input
              type="text"
              name="title"
              value={item.title}
              onChange={changeHandler}
            /><hr />
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
            <button>Update</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Update;
