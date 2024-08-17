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
import ModalDetails from "../Modal/ModalDetails";

const Item = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const openModal = () => {
    setIsOpen(true);
    navigate(`/catalog/${item.id}`);
  };

  const closeModal = () => {
    setIsOpen(false);
    navigate(`/catalog`);
  };

  const handleNavigate = () => {
    openModal();
    navigate(`/catalog/${item.id}`);
  };

  return (
    <>
      <div className={css.card}>
        <img src={item.gallery[0]} className={css["list-img"]} alt="" />
        <h3>{item.name}</h3>
        <div>
          <Link to="reviews">
            <IoIosStarOutline style={{ color: "#FFC531" }} />
            {item.rating}
            {`(${item.reviews.length} Reviews)`}
          </Link>
          <p>{item.location}</p>
        </div>
        <p className={css.description}>{item.description}</p>
        <div>
          <span>
            <IoPeopleOutline /> {item.adults} adults
          </span>
          <span>
            <TbAutomaticGearbox /> {item.transmission}
          </span>
          <span>
            <LiaGasPumpSolid /> {item.engine}
          </span>
          <span>
            <TbToolsKitchen2 /> Kitchen {item.details.kitchen}
          </span>
          <span>
            <LiaBedSolid /> Beds {item.details.beds}
          </span>
          <span>AC {item.details.airConditioner}</span>
          <button onClick={handleNavigate}>Show more...</button>
        </div>

        <div className={css["price-and-heart"]}>
          <strong>${item.price}</strong>
          <IoMdHeartEmpty />
        </div>
      </div>

      <ModalDetails
        itemID={item.id}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Item;
