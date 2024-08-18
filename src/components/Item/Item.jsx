import { IoMdHeartEmpty } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LiaGasPumpSolid } from "react-icons/lia";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import css from "./Item.module.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalPage from "../../pages/ModalPage/ModalPage";
import { useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/api/selectors";

const Item = ({ item }) => {
  const isOpenModal = useSelector(selectOpenModal);
  const [modalIsOpen, setIsOpen] = useState(isOpenModal);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const openModal = () => {
    if (!modalIsOpen) {
      setIsOpen(true);
    }
    navigate(`/catalog/${item.id}`);
  };

  const closeModal = () => {
    if (modalIsOpen) {
      setIsOpen(false);
    }

    // setIsOpen(false);
    navigate(`/catalog`);
  };

  // const handleNavigate = () => {
  //   openModal();
  //   // navigate(`/catalog/${item.id}`);
  // };

  return (
    <>
      <div className={css.card}>
        <div className={css["block-from-text"]}>
          <img src={item.gallery[0]} className={css["list-img"]} alt="" />
          <div className={css.size}>
            <div>
              <h3>{item.name}</h3>
              <div className={css["reviews-location"]}>
                <Link to={`/catalog/${item.id}/reviews`}>
                  <IoIosStarOutline style={{ color: "#FFC531" }} />
                  {item.rating}
                  {`(${item.reviews.length} Reviews)`}
                </Link>
                <p>{item.location}</p>
              </div>
            </div>
            <div style={{ width: "525px" }}>
              <p className={css.description}>{item.description}</p>
            </div>
            <div className={css.details}>
              <span className={css["details-item"]}>
                <IoPeopleOutline /> {item.adults} adults
              </span>
              <span className={css["details-item"]}>
                <TbAutomaticGearbox /> {item.transmission}
              </span>
              <span className={css["details-item"]}>
                <LiaGasPumpSolid /> {item.engine}
              </span>
              <span className={css["details-item"]}>
                <TbToolsKitchen2 /> Kitchen
              </span>
              <span className={css["details-item"]}>
                <LiaBedSolid /> {item.details.beds} Beds
              </span>
              <span className={css["details-item"]}>
                AC {item.details.airConditioner}
              </span>
            </div>
            <button onClick={openModal} className={css["show-more-btn"]}>
              Show more...
            </button>
          </div>
        </div>

        <div className={css["price-and-heart"]}>
          <strong>${item.price}</strong>
          <IoMdHeartEmpty />
        </div>
      </div>

      {modalIsOpen && (
        <ModalPage
          itemID={item.id}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Item;
