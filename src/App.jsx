import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className=" h-screen w-screen flex">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a href="/" className="px-5 py-3 rounded-xl border-blue-300 border">
          Add new Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl">Category</h1>

        <ul className=" w-[80%] ">
          <li className="mb-3 flex items-center">
            <span className="h-[15px] w-[15px] bg-red-300 rounded-full inline-block mr-2 "></span>
            cat1
          </li>
          <li className="mb-3 flex items-center">
            <span className="h-[15px] w-[15px] bg-blue-300 rounded-full inline-block mr-2 "></span>
            cat1
          </li>
          <li className="mb-3 flex items-center">
            <span className="h-[15px] w-[15px] bg-green-300 rounded-full inline-block mr-2 "></span>
            cat1
          </li>
        </ul>
      </nav>
      <div className=" h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="card p-5 mr-3 mb-3 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div className="card p-5 border-zinc-400 rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3  w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit.</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
