import React from "react";
import useScrollPosition from "../hooks/useScrollPosition";

function Home() {
  let scrollPosition = useScrollPosition();
  console.log(scrollPosition);
  return (
    <>
      <div className="home-outer">
        <div
          className="home-mountains"
          style={{ bottom: `${scrollPosition * 0.5}px` }}
          onClick={() => (scrollPosition = 100)}
        ></div>
        <div
          className="home-elk"
          style={{ bottom: `(${scrollPosition * 0.5}px)` }}
        ></div>
      </div>
    </>
  );
}

export default Home;
