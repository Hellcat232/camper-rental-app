import { IoMdHeartEmpty } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LiaGasPumpSolid } from "react-icons/lia";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";

import css from "./Item.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ item }) => {
  return (
    <>
      <div className={css.card}>
        <img src={item.gallery[0]} width="30%" alt="" />
        <h3>{item.name}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <strong>${item.price}</strong>
          <IoMdHeartEmpty />
        </div>
        <div>
          <Link>
            <IoIosStarOutline style={{ color: "FFC531" }} />
            {item.rating}
            {`(${item.reviews.length} Reviews)`}
          </Link>
          <p>{item.location}</p>
        </div>
        <p className={css.description}>{item.description}</p>

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
        <button>Show more...</button>
      </div>
    </>
  );
};

export default Item;
