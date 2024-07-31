import React, { useState } from "react";
import Navbar from "./component/Navbar";
import TextUtils from "./component/home/TextUtils";
import { toast } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/about/About";

const App = () => {
  // const bgColor = "#070B4A";
  // const textColor = "E0E2FF";
  // const btnColor = "404C77";
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#070B4A";
      document.body.style.color = "#E0E2FF";
      toast("Dark Mode Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      toast("Light Mode Enabled");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            title={"Text-Utils"}
            firstItem={"Home"}
            secondItem={"About"}
            mode={mode}
            toggleMode={toggleMode}
          />
          <TextUtils label="Write your text here to analyze" mode={mode} />
        </>
      ),
    },

    {
      path: "/about",
      element: (
        <>
          <Navbar
            title={"Text-Utils"}
            firstItem={"Home"}
            secondItem={"About"}
            mode={mode}
            toggleMode={toggleMode}
          />
          <About mode={mode} />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
