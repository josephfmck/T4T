import React from "react";
//*images
import t4tImg from "../assets/T4Twelcome.png";
import logoImg from "../assets/logo.png";

//* CSS
import "./home.scss";

function Home() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img src={logoImg} className="logoheader" alt="logoheader" />
            <a className="active home" href="/">
              HOME
            </a>
            <a href="tools" className="rent">
              RENT
            </a>
            <a href="lender" className="lend">
              LEND
            </a>
            <a href="/#aboutUs" className="about">
              ABOUT US
            </a>
            <a href="/#callDave" className="callDave">
              NEED ADVICE? - CALL DAVE
            </a>
          </nav>
        </div>
      </header>
      <section id="welcome-section">
        <img src={t4tImg} className="bg-img" alt="welcome to T4T" />
      </section>

      <footer>
        <div className="push">
          &copy; <img src={logoImg} className="logo" alt="logo" /> 2018. All
          Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
