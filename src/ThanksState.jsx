import Thanks from "./images/illustration-thank-you.svg";
import Penguin from "./images/Penguin.svg";
import Card from "./Card";
import "./ThanksState.css";
import { useState } from "react";

const ThanksState = ({ rating }) => {
  const [show, setShow] = useState(true);

  return show ? (
    <Card>
      <span className='close-btn' onClick={() => setShow(false)}>
        <i className='ri-close-line'></i>
      </span>
      <div className='thanks-content'>
        <img src={Thanks} alt='thank-you-illustration' />
        <p className='p_1'>You selected {rating} out of 5</p>
        <p className='p_2'>Thank you!</p>
        <p className='p_3'>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </Card>
  ) : (
    <Card>
      <div className='thanks-content'>
        <h1>See you soon!</h1>
        <img src={Penguin} alt='thank-you-illustration' className="penguin"/>
      </div>
    </Card>
  );
};

export default ThanksState;

