import "./App.css";
import RatingState from "./RatingState";
import ThanksState from "./ThanksState";
import { useState } from "react";

function App() {
  const [showThanks, setShowThanks] = useState(false);
  const [rating, setRating] = useState(0);
  return (
    <div className='App'>
      {showThanks ? (
        <ThanksState rating={rating} />
      ) : (
        <RatingState
          rating={rating}
          setRating={setRating}
          setShowThanks={setShowThanks}
        />
      )}
      <div className='footer'>
        Challenge by Frontend Mentor. Coded by Yixuan WANG.
      </div>
    </div>
  );
}

export default App;
