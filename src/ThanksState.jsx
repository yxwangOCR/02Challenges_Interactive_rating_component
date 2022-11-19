import Thanks from "./images/illustration-thank-you.svg";
import Card from "./Card";
import "./ThanksState.css";

const ThanksState = () => {
  return (
    <Card>
      <span className='close-btn'>
        <i className='ri-close-line'></i>
      </span>
      <div className="thanks-content">
        <img src={Thanks} alt='thank-you-illustration' />
        <p className='p_1'>You selected 5 out of 5</p>
        <p className='p_2'>Thank you!</p>
        <p className='p_3'>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
};

export default ThanksState;
