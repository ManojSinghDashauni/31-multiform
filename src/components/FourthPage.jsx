import React from "react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router";

const FourthPage = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  console.log(user);
  const onsubmit = () => {
    navigate("/thankyou", { replace: true });
  };
  return (
    <div className=" flex flex-col justify-between h-full">
      <div className="p-10">
        <h2 className="heading">Finishing up</h2>
        <p className="paragraph">
          Double-check everything looks OK before confirming.
        </p>

        {user && (
          <div>
            {user.map((item, index) => {
              return (
                <div key={index}>
                  <div className="bg-[#d6d9e6] rounded-lg flex p-4">
                    <div>
                      <div>{item?.title}</div>
                      <Link></Link>
                    </div>
                    <div className="ml-auto">{item?.price}</div>
                  </div>
                  <div className="bg-[#d6d9e6] rounded-lg flex p-4">
                    <div>{item?.service_name}</div>
                    <div className="ml-auto">{item?.Service_price}</div>
                  </div>
                </div>
              );
            })}
            <div>
              <p className="paragraph">Total (per month/year)</p>
              <p> $ /</p>
            </div>
          </div>
        )}
      </div>
      <div className="mx-10 my-4 flex justify-between">
        <button className="btn" type="button">
          <Link to={"/third"}>Go Back</Link>
        </button>
        <button className="btn" onClick={onsubmit} type="submit">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FourthPage;
