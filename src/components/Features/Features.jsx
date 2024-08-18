import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOffersById } from "../../redux/api/operation";
import { useDispatch } from "react-redux";

export default function Features() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <>
      <p>Features</p>
    </>
  );
}
