import Rating from "../home/Rating";

const Reviews = ({ selectedProduct }) => {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-2xl underline underline-offset-2 decoration-blue-500 mb-2">
        Reviews
      </h2>
      <div className="">
        <Rating
          value={selectedProduct?.rating}
          text={`${selectedProduct?.numReviews} reviews`}
          color={"#F6B900"}
        />
      </div>
    </div>
  );
};
export default Reviews;
