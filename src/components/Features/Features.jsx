import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOffersById } from "../../redux/api/operation";
import { useDispatch, useSelector } from "react-redux";
import css from "./Features.module.css";
import CampInfo from "../CampInfo/CampInfo";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { selectItem } from "../../redux/api/selectors";
import BookingForm from "../BookingForm/BookingForm";

export default function Features() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsOfFeatures = useSelector(selectItem);

  useEffect(() => {
    dispatch(getOffersById(id));
  }, [dispatch, id]);

  return (
    <>
      {detailsOfFeatures.length > 0 &&
        detailsOfFeatures.map((detaile) => {
          return (
            <div key={detaile.id} className={css["features-block"]}>
              <ul className={css["info-about-camp"]}>
                <CampInfo details={detaile.details} />
                <VehicleDetails details={detaile} />
                <BookingForm item={detaile} />
              </ul>
            </div>
          );
        })}
    </>
  );
}
