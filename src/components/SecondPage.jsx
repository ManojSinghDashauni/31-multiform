import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router";
import Toggle from "./Toggle";

const SecondPage = () => {
  const { user, setUser } = useUserContext();
  const [selectedCards, setSelectedCards] = useState([]);

  console.log(user);
  const onsubmit = () => {
    setUser((prev) => [...prev, ...selectedCards, ...storedState]);
  };

  const toggleSelect = (card) => {
    setSelectedCards((prev) =>
      prev.some((c) => c.id === card.id)
        ? prev.filter((c) => c.id !== card.id) // Remove if already selected
        : [card]
    );
  };

  const cardData = [
    {
      id: "0",
      title: "arcade",
      price: "9",
    },
    {
      id: "1",
      title: "advanced",
      price: "12",
    },
    {
      id: "2",
      title: "pro",
      price: "15",
    },
  ];

  console.log(selectedCards);

  const [isOn, setIsOn] = useState(false); // Toggle state (On/Off)
  const [storedState, setStoredState] = useState([]); // To store the On/Off states

  const handleToggle = (e) => {
    console.log(e);
    const newState = !isOn; // Calculate the new state
    setIsOn(newState); // Update the toggle state
    setStoredState(() => [newState ? "Yearly" : "Monthly"]); // Store the state as "On" or "Off"
  };
  console.log(storedState);

  return (
    <div className=" flex flex-col justify-between h-full">
      <div className="p-10">
        <h2 className="heading">Select your plan</h2>
        <p className="paragraph">
          You have the option of monthly or yearly billing.
        </p>
        <div className="my-8 grid grid-cols-3  gap-4">
          {cardData.map((option, index) => (
            <button
              key={index}
              className={` h-36 rounded-lg border-[1px]  ${
                selectedCards.some((c) => c.id === option.id)
                  ? "border-[#02295a] bg-[#d6d9e6] "
                  : "border-[#9699ab]  bg-white"
              }`}
              onClick={() => toggleSelect(option)}
            >
              <div></div>
              <div>
                <h2 className="heading--2">{option.title}</h2>
                <p className="text-[#9699ab] text-base font-normal">
                  ${option.price}/mo
                </p>
              </div>
            </button>
          ))}
        </div>
        <div className="flex text-sm p-2 justify-center items-center bg-[#d6d9e6] rounded-lg ">
          <span
            className={`${(e) =>
              e.taget.checked ? "text-red-600" : "text-green-500"}`}
          >
            Monthly
          </span>
          <span className="mx-2">
            <Toggle className="scale-50" onClick={handleToggle} />
          </span>
          Yearly
        </div>
      </div>
      <div className="mx-10 my-4 flex justify-between">
        <button className="btn" type="button">
          <Link to={"/"}>Go Back</Link>
        </button>
        <button className="btn" onClick={onsubmit} type="button">
          <Link to={"/third"}>Next Step</Link>
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
