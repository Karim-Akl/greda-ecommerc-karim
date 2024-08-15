"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "../hero/hero";
import Main from "../main/main";
import "./ss.css";
import "./home.css"

const Page = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setState(true);
      } else {
        setState(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="up"></div>
      <Header />
      <Hero />
      <Main />
      <Main />
      <Footer />

      {/* Scroll to Top Button */}
      <div className="up">
        <a
          href="#up"
          style={{ opacity: state ? 1 : 0, transition: "opacity 0.3s" }}
          aria-label="Scroll to Top"
        >
          <button className="icon-angle-double-up scroll2Top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-up"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Page;
