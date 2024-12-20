import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import FirstPage from "./components/FirstPage.jsx";
import SecondPage from "./components/SecondPage.jsx";
import ThirdPage from "./components/ThirdPage.jsx";
import FourthPage from "./components/FourthPage.jsx";
import ThankYou from "./components/ThankYou.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "/second",
        element: <SecondPage />,
      },
      {
        path: "/third",
        element: <ThirdPage />,
      },
      {
        path: "/fourth",
        element: <FourthPage />,
      },
      {
        path: "/thankyou",
        element: <ThankYou />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
