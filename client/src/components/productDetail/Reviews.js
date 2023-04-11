import { useDispatch, useSelector } from "react-redux";
import Rating from "../home/Rating";
import { productCreateReview } from "../../redux/actions/productActions";
import { useState } from "react";
import { Alert, Select } from "antd";

const Reviews = ({ selectedProduct }) => {

  const [rating, setRating] = useState()
  const [comment, setComment] = useState()

  const userLogin = useSelector((state)=>state.userLogin)
  const {userData} = userLogin
  const dispatch = useDispatch()
  const addReviewHandler = () => {
    dispatch(productCreateReview(selectedProduct._id, { comment, rating }))
  }

  const handleChange = (value) => {
    setRating(value)
  };


  return (
    <div className="mt-6">
      {selectedProduct.reviews.length === 0 ? <h2 className="font-bold text-2xl underline underline-offset-2 decoration-blue-500 mb-2">
        No Reviews
      </h2> : <h2 className="font-bold text-2xl underline underline-offset-2 decoration-blue-500 mb-2">
        Reviews
      </h2>}


        <div className="flex flex-col">
          {
            selectedProduct.reviews.map((review, i) => {
              return (
                <div>
                  <h2 className="font-semibold">{review.name}</h2>
                  <Rating
                    value={review?.rating}
                    // text={`${review?.numReviews} reviews`}
                    color={"#F6B900"}
                  />
                  <p>{review.createdAt.substr(0, 10)}</p>
                  <p>{review.comment}</p>
                  <hr />
                </div>
              )
            })
          }
          {
            userData ? <div className="flex flex-col w-[30%] mt-3">
            <Select
              defaultValue="Select"
              onChange={handleChange}
              options={[
                {
                  value: '1',
                  label: '1-Poor',
                },
                {
                  value: '2',
                  label: '2-Average',
                },
                {
                  value: '3',
                  label: '3-Good',
                },
                {
                  value: '4',
                  label: '4-very Good',
                },
                {
                  value: '5',
                  label: '5-Excellent',
                },
              ]}
            />
            <textarea
              type="text"
              placeholder="Comment"
              onChange={(e) => setComment(e.target.value)}
              className="outline-none my-4 resize-none text-lg border border-blue-500 rounded-lg px-4 py-2 focus:border focus:border-blue-600"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg my-3" onClick={addReviewHandler}>Add Review</button>
          </div> : <Alert type={'warning'} className="w-[50%]" showIcon message={`Please SignIn to add a review`} />
          }

        </div>
    </div>
  );
};
export default Reviews;
