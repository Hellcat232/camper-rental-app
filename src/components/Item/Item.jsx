import { FaStar } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LiaGasPumpSolid } from "react-icons/lia";
import { TbAutomaticGearbox } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import css from "./Item.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalPage from "../../pages/ModalPage/ModalPage";
import { useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/api/selectors";

const Item = ({ item }) => {
  const isOpenModal = useSelector(selectOpenModal);
  const [modalIsOpen, setIsOpen] = useState(isOpenModal);
  const navigate = useNavigate();
  const location = useLocation();
  const [heart, setHeart] = useState(() => {
    const filter = JSON.parse(localStorage.getItem("favoriteItems")) || null;
    return filter.find((findItem) => findItem.id === item.id) ? item : null;
  });

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

    navigate(`/catalog`);
  };

  const handleNavigate = () => {
    openModal();
    navigate(`/catalog/${item.id}/reviews`);
  };

  const toFavorite = () => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("favoriteItems")) || [];

    const isItemAlreadyFavorite = existingFavorites.some(
      (favorite) => favorite.id === item.id
    );

    if (!isItemAlreadyFavorite) {
      const updatedFavorites = [...existingFavorites, item];

      localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));

      setHeart(item); // Обновление состояния после добавления в избранное
    }
  };

  return (
    <>
      <div className={css.card}>
        <div className={css["block-from-text"]}>
          <img src={item.gallery[0]} className={css["list-img"]} alt="" />
          <div className={css.size}>
            <div>
              <h3>{item.name}</h3>
              <div className={css["reviews-location"]}>
                <NavLink
                  to={`/catalog/${item.id}/reviews`}
                  onClick={handleNavigate}
                  style={{ textDecoration: "underline" }}
                >
                  <FaStar style={{ color: "#FFC531" }} />
                  {item.rating}
                  {`(${item.reviews.length} Reviews)`}
                </NavLink>
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
          <button onClick={toFavorite} className={css["btn-heart"]}>
            {heart ? (
              <AiFillHeart size="24px" className={css["full-heart"]} />
            ) : (
              <AiOutlineHeart size="24px" className={css["empty-heart"]} />
            )}
          </button>
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
