import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./App.css";
import Login from "./components/login";
import Register from "./components/Register";
import classNames from "classnames";

const authText = {
  login: {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores eligendi sapiente, asperiores atque, debitis ducimus fuga inventore expedita similique veniam nesciunt esse. Quidem quod nulla sequi cum at a?",
    button: "Login",
  },
  register: {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores\
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores  ",
    button: "Register",
  },
};

function App() {
  const [change, setChange] = useState("login");
  const coverRef = useRef(null);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex h-[500px] w-[1211px] relative">
        <div
          ref={coverRef}
          className={classNames(
            "cover absolute w-[50%] h-full bg-red-500 flex justify-center items-center transition-all duration-1000 p-10",
            change === "login"
              ? "translate-x-[100%] rounded-e-2xl "
              : "translate-x-0 rounded-s-2xl"
          )}
        >
          {change === "login" ? (
            <div>
              <p>{authText.register.text}</p>
              <button
                className="px-10 py-3 bg-slate-200 mt-10 ml-[calc((100%_-_120px)/2)] outline-none"
                onClick={() => setChange("register")}
              >
                Register
              </button>
            </div>
          ) : (
            <div>
              <p>{authText.login.text}</p>
              <button
                className="px-10 py-3 bg-slate-200 mt-10 ml-[calc((100%_-_120px)/2)] outline-none"
                onClick={() => setChange("login")}
              >
                Login
              </button>
            </div>
          )}
        </div>
        {change == "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default App;
