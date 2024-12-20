import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router";

const ThirdPage = () => {
  const { user, setUser } = useUserContext();
  const [serviceCard, setserviceCard] = useState([]);
  const navigate = useNavigate();

  console.log(user);
  const onsubmit = () => {
    setUser((prev) => [...prev, ...serviceCard]);
    navigate("/fourth");
  };

  const toggleSelect = (card) => {
    setserviceCard(
      (prev) =>
        prev.some((c) => c.id === card.id)
          ? prev.filter((c) => c.id !== card.id) // Remove if already selected
          : [...prev, card] // Add if not already selected
    );
  };

  const cardData = [
    {
      id: "0",
      service_name: " Online service",
      Service_content: "Access to multiplayer games",
      Service_price: "1",
    },
    {
      id: "1",
      service_name: " Larger storage",
      Service_content: "Extra 1TB of cloud save",
      Service_price: "2",
    },
    {
      id: "2",
      service_name: " Customizable Profile",
      Service_content: "Custom theme on your profile",
      Service_price: "2",
    },
  ];

  console.log(serviceCard);

  return (
    <div className=" flex flex-col justify-between h-full">
      <div className="p-10">
        <h2 className="heading">Pick add-ons</h2>
        <p className="paragraph">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="my-8 ">
          {cardData.map((option, index) => (
            <div
              key={index}
              className={`rounded-lg border-[1px] flex items-center px-8 py-2 mb-4  ${
                serviceCard.some((c) => c.id === option.id)
                  ? "border-[#02295a] bg-[#d6d9e6] "
                  : "border-[#9699ab]  bg-white"
              }`}
              onClick={() => toggleSelect(option)}
            >
              <input className="mr-8" type="checkbox" />
              <div className="flex flex-col">
                <h2 className="heading--2">{option.service_name}</h2>
                <p className="text-[#9699ab] text-base font-normal">
                  {option.Service_content}
                </p>
              </div>
              <p className="text-[#473dff] text-base font-normal ml-auto">
                +${option.Service_price}/mo
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-10 my-4 flex justify-between">
        <button className="btn" type="button">
          <Link to={"/second"}>Go Back</Link>
        </button>
        <button className="btn" onClick={onsubmit} type="button">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
