import React from "react";
//*images
import t4tImg from "../assets/T4Twelcome.png";
import engineerImg from "../assets/engineer.png";
import callDaveImg from "../assets/callDave.png";
import logoImg from "../assets/logo.png";

//* CSS
import "./index.scss";

function Home() {
  return (
    <>
      <section className="welcome">
        <img
          src={t4tImg}
          className="welcome"
          alt="welcome to T4T"
        />
      </section>

      <header id="masthead">
        <div className="container">
          <nav>
            <img
              src={logoImg}
              className="logoheader"
              alt="logoheader"
            />
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

      <section>
        <img src={engineerImg} className="engineer" alt="engineer" />
      </section>

      <section id="aboutUs" className="aboutText">
        <h2>About Us</h2>
        <p>
          T4T (Tools for Tools) is a cross between industrial tool rental
          company United Rentals and CraigsList. Our goal is to help consumers
          in need of tools that they don't want or don't need to buy. Either
          they don't have the money right now to buy it or it's a one-off
          project.
        </p>
        <p>
          If you are in need of a tool, click on the "RENT" link to find one of
          the options that we offer.
        </p>
        <p>
          If you have a tool that you are willing to lend out, click on the
          "LEND" link and we will be in touch with you after you provide some
          pertinent information.
        </p>
        <p>
          Additionally, if you Need Advice for your project or even just
          navigating our site, click on the "CALL DAVE" link. You will be able
          to contact us to get the help you need.
        </p>
      </section>

      <section>
        <img
          src={callDaveImg}
          id="callDave"
          className="callDaveImage"
          alt="call Dave"
        />
      </section>

      <footer>
        <div className="push">
          &copy; <img src={logoImg} className="logo" alt="logo" />{" "}
          2018. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
