import React from "react";
import image from "./assets/image.png";

export class Main extends React.Component {
  render() {
    return (
      <main className="w-11/12">
        <section className="flex justify-between w-full mb-10 max-md:flex-col max-md:justify-center">
          <div className="w-1/2 flex flex-col justify-around items-start max-md:w-full max-md:gap-5">
            <h1 className="font-bold text-3xl w-2/3 max-md:w-full">
              <span className="name font-bold text-6xl">John Doe</span> web
              developer
            </h1>
            <p className="font-serif">
              I'm a web developer with more than 10 years of experience
            </p>
            <button
              className="rounded-full
             bg-violet-700
              p-1
               w-36
                text-white
                 max-md:my-5
                  md:my-5
                   max-sm:my-10
                    max-xl:my-10"
            >
              Hire me
            </button>
            <div className="flex gap-5 text-white">
              <button className="rounded-lg bg-pink-400 p-2">HTML</button>
              <button className="rounded-lg bg-orange-400 p-2">CSS</button>
              <button className="rounded-lg bg-fuchsia-600 p-2">
                javascript
              </button>
            </div>
          </div>
          <div className=" w-1/3 max-sm:my-5 max-sm:w-full">
            <img src={image} alt="image"></img>
          </div>
        </section>
        <section className=" flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-xl">Latest Projects</p>
            <div className="mt-1">
              <select name="dropdown" className="border rounded-lg">
                <option value="0">All</option>
                <optgroup label="Doc">
                  <option value="1">Proj-1</option>
                  <option value="2">Proj-2</option>
                  <option value="3">Proj-3</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="flex gap-10 w-full max-sm:gap-2">
            <div className="border rounded-lg p-5">
              <h3 className=" font-bold text-xl mb-3">
                Noteworthy technology acquisitions 2021
              </h3>
              <p className=" text-slate-500 font-serif">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className=" font-bold text-xl mb-3">
                Noteworthy technology acquisitions 2021
              </h3>
              <p className=" text-slate-500 font-serif">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className=" font-bold text-xl mb-3">
                Noteworthy technology acquisitions 2021
              </h3>
              <p className=" text-slate-500 font-serif">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
