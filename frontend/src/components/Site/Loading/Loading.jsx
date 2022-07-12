import React from "react";
import './Loading.css'

function Loading() {
  return (
    <section className="loading">
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </section>
  );
}

export default Loading;
