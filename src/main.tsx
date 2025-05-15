import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from "./Game";
import "./index.css";

// TypeScript-safe Array.prototype.at polyfill
declare global {
  interface Array<T> {
    at(index: number): T | undefined;
  }
}

if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    if (index >= 0) {
      return this[index];
    } else {
      return this[this.length + index];
    }
  };
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);