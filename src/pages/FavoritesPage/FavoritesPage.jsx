import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import css from "./FavoritesPage.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalPage from "../ModalPage/ModalPage";

import { IoMdHeartEmpty } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LiaGasPumpSolid } from "react-icons/lia";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import { selectOpenModal } from "../../redux/api/selectors";
import { IoClose } from "react-icons/io5";

export default function FavoritesPage() {
  const isOpenModal = useSelector(selectOpenModal);
  const [modalIsOpen, setIsOpen] = useState(isOpenModal);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [favoritesItems, setFavoritesItems] = useState(
    JSON.parse(localStorage.getItem("favoriteItems")) || []
  );

  const handleCardClick = () => {
    navigate(`/catalog`);
  };

  const openModal = (id) => {
    if (!modalIsOpen) {
      setIsOpen(true);
    }
    navigate(`/favorites/${id}`);
  };

  const closeModal = () => {
    if (modalIsOpen) {
      setIsOpen(false);
    }

    navigate(`/favorites`);
  };

  const handleNavigate = (id) => {
    openModal();
    navigate(`/favorites/${id}/reviews`);
  };

  const onDelete = (id) => {
    const updatedFavorites = favoritesItems.filter((item) => item.id !== id);
    setFavoritesItems(updatedFavorites);
    localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));
  };

  if (favoritesItems.length === 0) {
    navigate("/catalog");
    <p>No favorite items yet.</p>;
  }

  return (
    <div className={css.list}>
      <div style={{ display: "flex" }}>
        <button onClick={handleCardClick} className={css["back-link-btn"]}>
          Back Link
        </button>
      </div>
      {favoritesItems.length > 0 &&
        favoritesItems.map((item) => {
          return (
            <div key={item.id} className={css.card}>
              <div className={css["block-from-text"]}>
                <img src={item.gallery[0]} className={css["list-img"]} alt="" />
                <div className={css.size}>
                  <div>
                    <h3>{item.name}</h3>
                    <div className={css["reviews-location"]}>
                      <Link
                        to={`/favorites/${item.id}/reviews`}
                        onClick={() => handleNavigate(item.id)}
                      >
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
                  <button
                    onClick={() => openModal(item.id)}
                    className={css["show-more-btn"]}
                  >
                    Show more...
                  </button>
                </div>
              </div>

              <div className={css["price-and-heart"]}>
                <strong>${item.price}</strong>
                <IoClose onClick={() => onDelete(item.id)} />
              </div>

              {modalIsOpen && (
                <ModalPage
                  itemID={item.id}
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}
