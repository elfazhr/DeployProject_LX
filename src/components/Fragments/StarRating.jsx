import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const StarRating = (props) => {
  const { star, reviews } = props;

  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;

    return (
      <span key={index} >
        {star >= index + 1 ? (
          <FaStar className="text-xl text-yellow-500" />
        ) : star >= number ? (
          <FaStarHalfAlt className="text-xl text-yellow-500" />
        ) : (
          <FaRegStar className="text-xl text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <div className="flex my-5">
      {ratingStar} 
      <p className="text-sm ml-2 font-semibold underline text-slate-700">{reviews} reviews</p>
    </div>
  );
};

export default StarRating;
