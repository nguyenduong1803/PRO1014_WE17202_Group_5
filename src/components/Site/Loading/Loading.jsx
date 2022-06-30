import React from "react";
import './Loading.css'

function Loading() {
  return (
    <section class="loading">
      <div class="typewriter">
        <div class="slide">
          <i></i>
        </div>
        <div class="paper"></div>
        <div class="keyboard"></div>
      </div>
    </section>
  );
}

export default Loading;
