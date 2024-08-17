import Modal from "react-modal";
import { NavLink, Outlet } from "react-router-dom";
import { getOffersById } from "../../redux/api/operation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import css from "./Modal.module.css";
import { selectAllItems, selectItem } from "../../redux/api/selectors.js";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "982px",
    borderRadius: "20px",
    padding: "40px",
  },
};

const ModalDetails = ({ modalIsOpen, closeModal, itemID }) => {
  const itemDetail = useSelector(selectItem);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();

  console.log("Detail before click", itemDetail);

  useEffect(() => {
    if (itemID && id === itemID) {
      dispatch(getOffersById(id));
    }
  }, [dispatch, id, itemID]);

  if (!itemDetail) {
    return null; // или какой-то fallback UI
  }

  console.log("Detail after click", itemDetail);

  return (
    <>
      {itemDetail.map((item) => {
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
                  <button onClick={closeModal}>close</button>
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

              <div>
                <NavLink to={`/catalog/${id}/features`}>Features</NavLink>
                <NavLink to={`/catalog/${id}/reviews`}>Reviews</NavLink>
              </div>
              <Outlet />
            </Modal>
          </div>
        );
      })}
    </>
  );
};

export default ModalDetails;
