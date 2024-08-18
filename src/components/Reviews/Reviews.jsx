import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOffersById } from "../../redux/api/operation";

export default function Reviews() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getOffersById(id));
  // }, []);

  return (
    <>
      <p>Reviews</p>
    </>
  );
}

// export default Reviews;
