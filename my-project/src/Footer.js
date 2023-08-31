import React from "react";
import svg from "./assets/coursera.svg";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="mt-14">
        <h4 className=" font-bold text-xl">Subscribe to my newsletter</h4>
        <div className="flex justify-between items-center mb-16 max-sm:flex-col max-sm:mb-5">
          <p className="font-serif mt-8">
            I write about web development, design, and other cool stuff
          </p>
          <div className="p-5 flex justify-end w-1/2 gap-5 max-sm:w-full max-sm:p-0 max-sm:mt-3">
            <input
              className=" border w-1/2 p-3 rounded-lg"
              type="text"
              placeholder="Your email"
            ></input>
            <button
              type="submit"
              className=" bg-violet-600 rounded-3xl p-4 w-40"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-between max-sm:flex-col max-sm:gap-3">
          <div className="flex gap-5">
            <button>Linkedin</button>
            <button>Github</button>
            <button>Twitter</button>
            <button>Instagram</button>
          </div>
          <div className="flex gap-2">
            <img src={svg} alt="svg"></img>
            <p className="mr-5">2023 John Doe</p>
          </div>
        </div>
      </footer>
    );
  }
}
