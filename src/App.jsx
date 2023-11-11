import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import Register from "./components/Register";
import classNames from "classnames";
const authText = {
  login: {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores eligendi sapiente, asperiores atque, debitis ducimus fuga\
     inventore expedita similique veniam nesciunt esse. Quidem quod nulla sequi cum at a?",
    button: "Login",
  },
  register: {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores\
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores  ",
    button: "Register",
  },
};

function App() {
  const [change, setChange] = useState("register");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex w-[80%] relative">
        <div
          className={classNames(
            "cover absolute w-[50%] h-full bg-red-500 flex justify-center items-center transition-transform",
            change == "login"
              ? "translate-x-[100%] rounded-e-2xl"
              : "translate-x-0 rounded-s-2xl"
          )}
        >
          {change == "login" ? (
            <button
              className="px-10 py-3 bg-slate-200"
              onClick={() => setChange("register")}
            >
              Register
            </button>
          ) : (
            <button
              className="px-10 py-3 bg-slate-200"
              onClick={() => setChange("login")}
            >
              Login
            </button>
          )}
        </div>
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
