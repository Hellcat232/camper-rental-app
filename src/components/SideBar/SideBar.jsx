import css from "./SideBar.module.css";
import clsx from "clsx";
import { MdOutlineAir } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiTv } from "react-icons/gi";
import { LiaShowerSolid } from "react-icons/lia";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbCaravan } from "react-icons/tb";
import { useState } from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(css["equip-black"], isActive && css["equip-red"]);
};

const SideBar = ({ filter }) => {
  const [filtersValue, setFiltersValue] = useState({
    location: "",
    transmission: "",
    kitchen: false,
    tv: false,
    shower: false,
    airConditioner: false,
    form: "",
  });

  console.log(filtersValue, "filtersValue");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFiltersValue((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFiltersValue((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filter(filtersValue);
    setFiltersValue({
      location: "",
      transmission: "",
      kitchen: false,
      tv: false,
      shower: false,
      airConditioner: false,
      form: "",
    });
  };

  const handleVehicleTypeChange = (e) => {
    const { value } = e.target;
    setFiltersValue((prevFilters) => ({
      ...prevFilters,
      form: value,
    }));
  };

  return (
    <div className={css["side-bar"]}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className={css.input}
            value={filtersValue.location}
            onChange={handleInputChange}
          />
        </div>

        <>
          <div style={{ marginTop: "32px" }}>
            <p>Filters</p>
            <h3 className={css["vehicle-equipment-title"]}>
              Vehicle equipment
            </h3>

            <ul className={css["equip-list"]}>
              <li className={css.equip}>
                <input
                  type="checkbox"
                  id="airConditioner"
                  name="airConditioner"
                  checked={filtersValue.airConditioner}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="airConditioner" className={css.label}>
                  <MdOutlineAir className={css["equip-icon"]} /> AC
                </label>
              </li>

              <li className={css.equip}>
                <input
                  type="checkbox"
                  id="transmission"
                  name="transmission"
                  // value="Automatic"
                  checked={filtersValue.transmission}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="transmission" className={css.label}>
                  <TbAutomaticGearbox className={css["equip-icon"]} /> Automatic
                </label>
              </li>
              <li className={css.equip}>
                <input
                  type="checkbox"
                  id="kitchen"
                  name="kitchen"
                  checked={filtersValue.kitchen}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="kitchen" className={css.label}>
                  <TbToolsKitchen2 className={css["equip-icon"]} /> Kitchen
                </label>
              </li>
              <li className={css.equip}>
                <input
                  type="checkbox"
                  id="tv"
                  name="tv"
                  checked={filtersValue.tv}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="tv" className={css.label}>
                  <GiTv className={css["equip-icon"]} /> TV
                </label>
              </li>
              <li className={css.equip}>
                <input
                  type="checkbox"
                  id="shower"
                  name="shower"
                  checked={filtersValue.shower}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="shower" className={css.label}>
                  <LiaShowerSolid className={css["equip-icon"]} />
                  Shower/WC
                </label>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: "32px" }}>
            <h3 className={css["vehicle-type"]}>Vehicle type</h3>

            <ul className={css["van-list"]}>
              <li className={css.vans}>
                <input
                  type="radio"
                  id="panelTruck"
                  name="form"
                  value="panelTruck"
                  checked={filtersValue.form === "panelTruck"}
                  onChange={handleVehicleTypeChange}
                />
                <label htmlFor="panelTruck" className={css.label}>
                  <TbCaravan className={css["van-icon"]} />
                  Van
                </label>
              </li>
              <li className={css.vans}>
                <input
                  type="radio"
                  id="fullyIntegrated"
                  name="form"
                  value="fullyIntegrated"
                  checked={filtersValue.form === "fullyIntegrated"}
                  onChange={handleVehicleTypeChange}
                />
                <label htmlFor="fullyIntegrated" className={css.label}>
                  <TbCaravan className={css["van-icon"]} />
                  Integrated
                </label>
              </li>
              <li className={css.vans}>
                <input
                  type="radio"
                  id="alcove"
                  name="form"
                  value="alcove"
                  checked={filtersValue.form === "alcove"}
                  onChange={handleVehicleTypeChange}
                />
                <label htmlFor="alcove" className={css.label}>
                  <TbCaravan className={css["van-icon"]} />
                  Alcove
                </label>
              </li>
            </ul>
          </div>
        </>

        <button className={css["search-btn"]}>Search</button>
      </form>
    </div>
  );
};

export default SideBar;
