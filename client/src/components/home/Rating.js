import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
const Rating = ({ value, text,color }) => {
  return (
    <div className="flex justify-between w-[240px] items-center">
      <div className="flex items-center">
        {value >= 1 ? (
          <BsStarFill color={color} />
        ) : value >= 0.5 ? (
          <BsStarHalf color={color} />
        ) : (
          <BsStar color={color}/>
        )}
        {value >= 2 ? (
          <BsStarFill color={color}/>
        ) : value >= 1.5 ? (
          <BsStarHalf color={color}/>
        ) : (
          <BsStar color={color}/>
        )}
        {value >= 3 ? (
          <BsStarFill color={color}/>
        ) : value >= 2.5 ? (
          <BsStarHalf color={color}/>
        ) : (
          <BsStar color={color}/>
        )}
        {value >= 4 ? (
          <BsStarFill color={color}/>
        ) : value >= 3.5 ? (
          <BsStarHalf color={color}/>
        ) : (
          <BsStar color={color} />
        )}
        {value >= 5 ? (
          <BsStarFill color={color}/>
        ) : value >= 4.5 ? (
          <BsStarHalf color={color}/>
        ) : (
          <BsStar color={color} />
        )}
      </div>
      <div>
        <p>{text && text}</p>
      </div>
    </div>
  );
};
export default Rating;
