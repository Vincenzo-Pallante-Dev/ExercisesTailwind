import React from "react";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="flex gap-5 p-5 m-2 border-2 rounded-lg font-serif max-sm:w-full max-sm:justify-center">
        <div>
          <button>Projects</button>
        </div>
        <div>
          <button>About</button>
        </div>
        <div>
          <button>Contact</button>
        </div>
      </nav>
    );
  }
}
