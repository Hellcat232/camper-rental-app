import css from "./SideBar.module.css";
import { MdOutlineAir } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiTv } from "react-icons/gi";
import { LiaShowerSolid } from "react-icons/lia";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbCaravan } from "react-icons/tb";

const SideBar = () => {
  return (
    <div style={{ marginTop: "30px", width: "360px" }}>
      <form action="">
        <div>
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className={css.input}
          />
        </div>

        <div style={{ marginTop: "32px" }}>
          <p>Filters</p>
          <h3 className={css["vehicle-equipment-title"]}>Vehicle equipment</h3>

          <ul className={css["equip-list"]}>
            <li className={css.equip}>
              <MdOutlineAir className={css["equip-icon"]} /> <p>AC</p>
            </li>
            <li className={css.equip}>
              <TbAutomaticGearbox className={css["equip-icon"]} />{" "}
              <p>Automatic</p>
            </li>
            <li className={css.equip}>
              <TbToolsKitchen2 className={css["equip-icon"]} /> <p>Kitchen</p>
            </li>
            <li className={css.equip}>
              <GiTv className={css["equip-icon"]} /> TV
            </li>
            <li className={css.equip}>
              <LiaShowerSolid className={css["equip-icon"]} /> <p>Shower/WC</p>
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "32px" }}>
          <h3 className={css["vehicle-type"]}>Vehicle type</h3>

          <ul className={css["van-list"]}>
            <li className={css.vans}>
              <TbCaravan className={css["van-icon"]} />
              <p>Van</p>
            </li>
            <li className={css.vans}>
              <TbCaravan className={css["van-icon"]} />
              <p>Fully Integrated</p>
            </li>
            <li className={css.vans}>
              <TbCaravan className={css["van-icon"]} />
              <p>Alcove</p>
            </li>
          </ul>
        </div>

        <button className={css["search-btn"]}>Search</button>
      </form>
    </div>
  );
};

export default SideBar;
