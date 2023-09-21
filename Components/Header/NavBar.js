import React from "react";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import "./header.css";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row flex-wrap justify-between sticky top-0">
        <Logo />
        <div>
          <LoginButton />
          <SignUpButton />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
