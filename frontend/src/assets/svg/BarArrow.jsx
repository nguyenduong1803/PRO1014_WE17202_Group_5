import * as React from "react"

const BarArrow = (props) => (
  <svg
    aria-hidden="true"
    data-prefix="fad"
    data-icon="angle-double-right"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
    {...props}
  >
    <g className="fa-group" fill="currentColor">
      <path
        d="M224 273 88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
        className="fa-secondary"
      />
      <path
        d="M415.89 273 280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
        className="fa-primary"
      />
    </g>
  </svg>
)

export default BarArrow
