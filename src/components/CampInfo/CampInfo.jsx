import css from "./CampInfo.module.css";

import { MdOutlineAir } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LiaBedSolid } from "react-icons/lia";
import { GiTv } from "react-icons/gi";
import { LuDisc3 } from "react-icons/lu";
import { HiOutlineRadio } from "react-icons/hi2";
import { LiaShowerSolid } from "react-icons/lia";
import { TbToiletPaper } from "react-icons/tb";
import { TbFridge } from "react-icons/tb";
import { TbCooker } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { FaGripfire } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";

const CampInfo = ({ details }) => {
  return (
    <div className={css.div}>
      <li>
        <span className={css["details-item"]}>
          <MdOutlineAir />
          {details.airConditioner} AC
        </span>
      </li>

      <li>
        <span className={css["details-item"]}>
          <MdOutlineBathroom /> {details.bathroom} bathroom
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <TbToolsKitchen2 /> {details.kitchen} kitchen
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <LiaBedSolid /> {details.beds} beds
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <GiTv /> {details.TV} TV
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <LuDisc3 /> {details.CD} CD
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <HiOutlineRadio /> {details.radio} radio
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <LiaShowerSolid /> {details.shower} shower
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <TbToiletPaper /> {details.toilet} toilet
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <TbFridge /> {details.freezer} freezer
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <TbCooker /> {details.hob} hob
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <LuMicrowave /> {details.microwave} microwave
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <FaGripfire /> {details.gas}
          gas
        </span>
      </li>
      <li>
        <span className={css["details-item"]}>
          <IoWaterOutline /> {details.water} water
        </span>
      </li>
    </div>
  );
};

export default CampInfo;
