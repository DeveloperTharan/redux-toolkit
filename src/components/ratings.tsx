/**
 * Ratings component to display a visual representation of a product's average rating
 * along with the total number of customer reviews.
 *
 * Accepts the average rating as a Decimal and the number of reviews as a number.
 * Renders a row of star icons representing the rating, along with text showing the
 * numeric rating and count of reviews.
 */
import { Decimal } from "decimal.js";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export const Ratings = ({
  stars,
  count,
}: {
  stars: Decimal;
  count: number;
}) => {
  const ratings = Array.from({ length: 5 }, (e, i) => {
    let number = i + 0.5;
    return (
      <span key={i}>
        {(stars as unknown as number) >= i + 1 ? (
          <FaStar className="h-4 w-4 text-yellow-400 " />
        ) : (stars as unknown as number) >= number ? (
          <FaStarHalf className="h-4 w-4 text-yellow-400 " />
        ) : (
          <AiOutlineStar className="h-4 w-4 text-yellow-400 " />
        )}
      </span>
    );
  });

  return (
    <div className="flex flex-col gap-2 items-center justify-start text-xs">
      <span className="flex justify-start items-center mr-auto">{ratings} <span className="ml-2">{`(${stars})`}</span></span>
      <span className="text-xs text-gray-600">{`(${count} customers reviews)`}</span>
    </div>
  );
};