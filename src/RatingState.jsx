import Star from "./images/icon-star.svg";
import Card from "./Card";
import "./RatingState.css";
import { useState } from "react";

const RatingState = ({ rating, setRating, setShowThanks }) => {
  const [activeNumber, setActiveNumber] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) return;
    setShowThanks(true);
    setRating(rating);
  };
  return (
    <Card>
      <img src={Star} alt='icon' className='star-image' />
      <p className='title'>How did we do?</p>
      <p className='description'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='numbers'>
        <span
          className={activeNumber.one ? ".numbers-item active" : "numbers-item"}
          onClick={() => {
            setActiveNumber({
              one: true,
              two: false,
              three: false,
              four: false,
              five: false,
            });
            setRating(1);
          }}>
          1
        </span>
        <span
          className={activeNumber.two ? ".numbers-item active" : "numbers-item"}
          onClick={() => {
            setActiveNumber({
              one: false,
              two: true,
              three: false,
              four: false,
              five: false,
            });
            setRating(2);
          }}>
          2
        </span>
        <span
          className={
            activeNumber.three ? ".numbers-item active" : "numbers-item"
          }
          onClick={() => {
            setActiveNumber({
              one: false,
              two: false,
              three: true,
              four: false,
              five: false,
            });
            setRating(3);
          }}>
          3
        </span>
        <span
          className={
            activeNumber.four ? ".numbers-item active" : "numbers-item"
          }
          onClick={() => {
            setActiveNumber({
              one: false,
              two: false,
              three: false,
              four: true,
              five: false,
            });
            setRating(4);
          }}>
          4
        </span>
        <span
          className={
            activeNumber.five ? ".numbers-item active" : "numbers-item"
          }
          onClick={() => {
            setActiveNumber({
              one: false,
              two: false,
              three: false,
              four: false,
              five: true,
            });
            setRating(5);
          }}>
          5
        </span>
      </div>
      <button type='submit' className='submit-btn' onClick={handleSubmit}>
        SUBMIT
      </button>
    </Card>
  );
};

export default RatingState;
