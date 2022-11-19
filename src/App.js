import "./App.css";
import RatingState from "./RatingState";
import ThanksState from "./ThanksState";
import { useState } from "react";

function App() {
  return (
    <div className='App'>
      <RatingState />
      <ThanksState />
      <div className='footer'>
        Challenge by Frontend Mentor. Coded by Yixuan WANG.
      </div>
    </div>
  );
}

export default App;
