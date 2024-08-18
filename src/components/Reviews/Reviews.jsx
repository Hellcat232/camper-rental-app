import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffersById } from "../../redux/api/operation";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectItem } from "../../redux/api/selectors";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

export default function Reviews() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsOfReviews = useSelector(selectItem);

  console.log(detailsOfReviews, "detailsOfReviews");

  useEffect(() => {
    dispatch(getOffersById(id));
  }, [dispatch, id]);

  return <p>I'm review - {id}</p>;
}

// export default Reviews;
