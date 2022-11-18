import star from "./images/icon-star.svg";
const RatingState = () => {
  return (
    <div className='rating-state'>
      <img src={star} alt='icon' />
      <p className="title">How did we do?</p>
      <p className="description">
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
      <button type='sublit'>SUBMIT</button>
    </div>
  );
};

export default RatingState;
