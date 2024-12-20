import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#bfe2fd]">
      <div className=" bg-white grid grid-cols-[_300px_600px] h-[600px] p-4 rounded-lg">
        <div className="bg-hero-desktop bg-no-repeat bg-cover bg-bottom  p-8 rounded-xl">
          <Navigation />
        </div>
        <div className=" rounded-xl  bg-color-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// <!-- Sidebar start -->

//   <!-- Sidebar end -->

//   Monthly
//   Yearly

//   <!-- Step 2 end -->

//   <!-- Step 3 end -->

//   <!-- Step 4 start -->

//
//

//   <!-- Dynamically add subscription and add-on selections here -->

//   Total (per month/year)

//   Go Back
//   Confirm

//   <!-- Step 4 end -->

//   <!-- Step 5 start -->

//   Thank you!

//

//   <!-- Step 5 end -->
