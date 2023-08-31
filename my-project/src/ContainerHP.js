import React from "react";
import { Navbar } from "./navbar";
import { Main } from "./Main";
import { Footer } from "./Footer";

export class Container extends React.Component {
  render() {
    return (
      <div className="m-10 flex flex-col justify-center w-2/3 max-sm:w-full max-sm:px-1 max-sm:flex max-sm:justify-center">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}
