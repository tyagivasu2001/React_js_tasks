import React from 'react'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai'
import PropTypes from 'prop-types';

const StartRating = (prop) => {
    
    const ratingarr=Array.from({length:5},(_,index)=>{
        let number = index+0.5;
  return (
         <span className="star" key={index}>
            {prop.rating >=index +1 ?(
                <FaStar/>
            ):prop.rating >=number?(
                <FaStarHalfAlt/>
            ):
            <AiOutlineStar/>}
         </span>
  )
});
return <div >{ratingarr} <b>{prop.review}</b> </div>
};

export default StartRating;
StartRating.propTypes={
    rating:PropTypes.number,
    review:PropTypes.number
}