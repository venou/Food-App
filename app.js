import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { lazy, Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";

const Grocery = lazy(() => import("./components/Grocery"));

import "./style.css";
import appStore from "./utils/appStore";

const App = () => {
  const [username, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Shiva pandit",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: username, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, // ✅ Cleaner than path:"/"
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <>
            <title>About Us</title> {/* ✅ React 19 built-in metadata */}
            <About />
          </>
        ),
      },
      {
        path: "contact",
        element: (
          <>
            <title>Contact</title>
            <meta name="description" content="Contact page of our app" />
            <Contact />
          </>
        ),
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading…</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
