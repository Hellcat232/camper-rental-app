import Modal from "react-modal";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import { getOffersById } from "../../redux/api/operation.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import css from "./Modal.module.css";
import { selectItem } from "../../redux/api/selectors.js";
import { Suspense } from "react";
import Features from "../../components/Features/Features.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import { useState } from "react";

Modal.setAppElement("#root");

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const customStyles = {
  content: {
    position: "absolute",
    overflowY: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    marginTop: "10px",
    marginBottom: "10px",
    transform: "translate(-50%, -50%)",
    maxWidth: "982px",
    maxHeight: "100%",
    borderRadius: "20px",
    padding: "40px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

export default function ModalDetails({ modalIsOpen, closeModal, itemID }) {
  const itemDetail = useSelector(selectItem);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "features":
        return <Features id={itemID.id} item={itemDetail} />;
      case "reviews":
        return <Reviews id={itemID.id} item={itemDetail} />;

      default:
        null;
    }
  };
  // console.log("Location into Modal", location);

  useEffect(() => {
    if (itemID && id === itemID) {
      dispatch(getOffersById(id));
    }
  }, [dispatch, id, itemID]);

  // useEffect(() => {
  //   if (itemID) {
  //     dispatch(getOffersById(itemID));
  //   }
  // }, [dispatch, itemID]);

  if (!itemDetail) {
    return null;
  }

  // console.log("Detail after click", itemDetail);

  return (
    <>
      {itemDetail.map((item, index) => {
        // console.log(item.id, "id into Modal");

        return (
          <div key={item.id} className={css.modal}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className={css["modal-top"]}>
                <div className={css["title-and-closeButton"]}>
                  <h3>{item.name}</h3>
                  <button onClick={closeModal} className={css["close-btn"]}>
                    <IoClose style={{ width: "32px", height: "32px" }} />
                  </button>
                </div>

                <div className={css["review-and-location"]}>
                  <Link to="reviews">
                    <IoIosStarOutline style={{ color: "#FFC531" }} />
                    {item.rating}
                    {`(${item.reviews.length} Reviews)`}
                  </Link>
                  <p>{item.location}</p>
                </div>

                <strong>$ {item.price}</strong>

                <div className={css["modal-img-div"]}>
                  <img
                    src={item.gallery[0]}
                    className={css["modal-img"]}
                    alt={item.name}
                  />
                  <img
                    src={item.gallery[1]}
                    className={css["modal-img"]}
                    alt={item.name}
                  />
                  <img
                    src={item.gallery[2]}
                    className={css["modal-img"]}
                    alt={item.name}
                  />
                </div>

                <p>{item.description}</p>
              </div>

              {itemDetail.length > 0 && (
                <div className={css["link-block"]}>
                  <NavLink
                    to={`/catalog/${id}/features`}
                    className={buildLinkClass}
                    state={location.state}
                    onClick={() => setActiveTab("features")}
                  >
                    Features
                  </NavLink>
                  <NavLink
                    to={`${id}/reviews`}
                    className={buildLinkClass}
                    state={location.state}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </NavLink>
                </div>
              )}

              <div>{renderContent()}</div>

              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Modal>
          </div>
        );
      })}
    </>
  );
}

// export default ModalDetails;
