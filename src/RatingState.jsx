import star from "./images/icon-star.svg";
import Card from "./Card";
import "./RatingState.css";
const RatingState = () => {
  return (
    <Card>
      <img src={star} alt='icon' className="star-image"/>
      <p className='title'>How did we do?</p>
      <p className='description'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='numbers'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <button type='sublit' className="submit-btn">SUBMIT</button>
    </Card>
  );
};

export default RatingState;
