import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffersById } from "../../redux/api/operation";
import css from "./Reviews.module.css";
import { selectItem } from "../../redux/api/selectors";
import BookingForm from "../BookingForm/BookingForm";
import { Avatar, Rating } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";
import { useState } from "react";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

export default function Reviews() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsOfReviews = useSelector(selectItem);
  const [value, setValue] = useState(2);

  console.log(detailsOfReviews, "detailsOfReviews");

  useEffect(() => {
    dispatch(getOffersById(id));
  }, [dispatch, id]);

  return (
    <div className={css["review-wrap"]}>
      {detailsOfReviews.length > 0 &&
        detailsOfReviews.map((detaile) => {
          return (
            <ul key={detaile.id} className={css.list}>
              <li className={css.li}>
                <div className={css["ava-name-rat"]}>
                  <Avatar
                    sx={{ bgcolor: light[500] }}
                    alt={detaile.reviews[0].reviewer_name}
                    src="/broken-image.jpg"
                  />
                  <div className={css["name-rat"]}>
                    <h4>{detaile.reviews[0].reviewer_name}</h4>
                    <Rating
                      name="simple-controlled"
                      value={detaile.reviews[0].reviewer_rating}
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </div>
                </div>
                <p>{detaile.reviews[0].comment}</p>
              </li>

              <li className={css.li}>
                <div className={css["ava-name-rat"]}>
                  <Avatar
                    sx={{ bgcolor: light[500] }}
                    alt={detaile.reviews[1].reviewer_name}
                    src="/broken-image.jpg"
                  />
                  <div className={css["name-rat"]}>
                    <h4>{detaile.reviews[1].reviewer_name}</h4>
                    <Rating
                      name="simple-controlled"
                      value={detaile.reviews[1].reviewer_rating}
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </div>
                </div>
                <p>{detaile.reviews[1].comment}</p>
              </li>
            </ul>
          );
        })}
      <BookingForm />
    </div>
  );
}

// export default Reviews;
