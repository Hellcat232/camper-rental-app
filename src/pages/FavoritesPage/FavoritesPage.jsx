import { useNavigate, Link } from "react-router-dom";
import css from "./FavoritesPage.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

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

  // Извлекаем массив избранных объектов из localStorage
  const favoritesItems =
    JSON.parse(localStorage.getItem("favoriteItems")) || [];

  // Обработка клика на карточку для перехода к деталям
  const handleCardClick = (item) => {
    navigate(`/catalog`);
  };

  const openModal = () => {
    if (!modalIsOpen) {
      setIsOpen(true);
    }
    navigate(`/catalog/${favoritesItems.id}`);
  };

  // Проверка, есть ли избранные элементы
  if (favoritesItems.length === 0) {
    return <p>No favorite items yet.</p>;
  }

  return (
    <>
      <button onClick={handleCardClick}>Back Link</button>
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
                        to={`/catalog/${item.id}/reviews`}
                        // onClick={handleNavigate}
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
                  <button onClick={openModal} className={css["show-more-btn"]}>
                    Show more...
                  </button>
                </div>
              </div>

              <div className={css["price-and-heart"]}>
                <strong>${item.price}</strong>
                <IoClose onClick="" />
              </div>
            </div>
          );
        })}
    </>
  );
}
