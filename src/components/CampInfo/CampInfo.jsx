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
    <>
      <li>
        <MdOutlineAir />
        AC {details.airConditioner}
      </li>
      <li>
        <MdOutlineBathroom /> {details.bathroom} bathroom
      </li>
      <li>
        <TbToolsKitchen2 /> {details.kitchen} kitchen
      </li>
      <li>
        <LiaBedSolid /> {details.beds} beds
      </li>
      <li>
        <GiTv /> {details.TV}
        TV
      </li>
      <li>
        <LuDisc3 /> {details.CD}
        CD
      </li>
      <li>
        <HiOutlineRadio /> {details.radio} radio
      </li>
      <li>
        <LiaShowerSolid /> {details.shower}
        shower
      </li>
      <li>
        <TbToiletPaper /> {details.toilet}
        toilet
      </li>
      <li>
        <TbFridge /> {details.freezer}
        freezer
      </li>
      <li>
        <TbCooker /> {details.hob}
        hob
      </li>
      <li>
        <LuMicrowave /> {details.microwave}
        microwave
      </li>
      <li>
        <FaGripfire /> {details.gas}
        gas
      </li>
      <li>
        <IoWaterOutline /> {details.water}
        water
      </li>
    </>
  );
};

export default CampInfo;
