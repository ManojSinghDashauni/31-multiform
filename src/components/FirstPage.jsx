import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router";

const FirstPage = () => {
  const { user, setUser } = useUserContext();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const handleData = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  console.log(data);

  const onsubmit = (e) => {
    e.preventDefault();
    if (
      data.name !== undefined &&
      data.email !== undefined &&
      data.number !== undefined
    ) {
      setUser((prev) => [...prev, data]);
      navigate("/second");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className=" flex flex-col justify-between h-full">
      <div className="p-10">
        <h2 className="heading">Personal info</h2>
        <p className="paragraph">
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col mt-8">
          <label className="label flex justify-between" htmlFor="name">
            Name
            {error && (
              <div className="text-[#ed3548] text-sm font-bold">
                This Field Is Required
              </div>
            )}
          </label>

          <input
            className="input"
            type="text"
            id="name"
            value={data["name"]}
            placeholder="e.g. Stephen King"
            onChange={(e) => handleData("name", e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-6">
          <label className="label flex justify-between" htmlFor="email">
            Email Address
            {error && (
              <div className="text-[#ed3548] text-sm font-bold">
                This Field Is Required
              </div>
            )}
          </label>
          <input
            className="input"
            type="text"
            id="email"
            value={data["email"]}
            placeholder="e.g. stephenking@lorem.com"
            onChange={(e) => handleData("email", e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-6">
          <label className="label flex justify-between" htmlFor="number">
            Phone number
            {error && (
              <div className="text-[#ed3548] text-sm font-bold">
                This Field Is Required
              </div>
            )}
          </label>
          <input
            className="input"
            type="tel"
            id="number"
            value={data["number"]}
            placeholder="e.g. +1 234 567 890"
            onChange={(e) => handleData("number", e.target.value)}
          />
        </div>
      </div>
      <button className="btn self-end mx-10 my-4 " onClick={onsubmit}>
        Next Step
      </button>
    </div>
  );
};

export default FirstPage;
