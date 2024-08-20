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
  const handleClick = (name) => {
    filter(name);
  };

  const onSubmit = (data) => {
    handleClick(data);
  };

  return (
    <div className={css["side-bar"]}>
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

        <>
          <div style={{ marginTop: "32px" }}>
            <p>Filters</p>
            <h3 className={css["vehicle-equipment-title"]}>
              Vehicle equipment
            </h3>

            <ul className={css["equip-list"]}>
              <li className={css.equip} onClick={() => handleClick("AC")}>
                <MdOutlineAir className={css["equip-icon"]} /> <p>AC</p>
              </li>

              <li
                className={css.equip}
                onClick={() => handleClick("Automatic")}
              >
                <TbAutomaticGearbox className={css["equip-icon"]} />
                <p>Automatic</p>
              </li>
              <li className={css.equip} onClick={() => handleClick("Kitchen")}>
                <TbToolsKitchen2 className={css["equip-icon"]} /> <p>Kitchen</p>
              </li>
              <li className={css.equip} onClick={() => handleClick("TV")}>
                <GiTv className={css["equip-icon"]} /> TV
              </li>
              <li
                className={css.equip}
                onClick={() => handleClick("Shower/WC")}
              >
                <LiaShowerSolid className={css["equip-icon"]} />
                <p>Shower/WC</p>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: "32px" }}>
            <h3 className={css["vehicle-type"]}>Vehicle type</h3>

            <ul className={css["van-list"]}>
              <li className={css.vans} onClick={() => handleClick("Van")}>
                <TbCaravan className={css["van-icon"]} />
                <p>Van</p>
              </li>
              <li
                className={css.vans}
                onClick={() => handleClick("Integrated")}
              >
                <TbCaravan className={css["van-icon"]} />
                <p>Integrated</p>
              </li>
              <li className={css.vans} onClick={() => handleClick("Alcove")}>
                <TbCaravan className={css["van-icon"]} />
                <p>Alcove</p>
              </li>
            </ul>
          </div>
        </>

        <button
          className={css["search-btn"]}
          onSubmit={(e) => onSubmit(e.target.value)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

//=============================================================================================

// const SideBar = ({ applyFilters }) => {
//   const [filters, setFilters] = useState({
//     location: "",
//     transmission: "",
//     kitchen: false,
//     tv: false,
//     shower: false,
//     airConditioner: false,
//   });

//   console.log(filters);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     applyFilters(filters);
//   };

//   return (
//     <div className={css["side-bar"]}>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="location">Location</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             className={css.input}
//             value={filters.location}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div style={{ marginTop: "32px" }}>
//           <p>Filters</p>
//           <h3 className={css["vehicle-equipment-title"]}>Vehicle equipment</h3>

//           <ul className={css["equip-list"]}>
//             <li className={css.equip}>
//               <input
//                 type="checkbox"
//                 id="airConditioner"
//                 name="airConditioner"
//                 checked={filters.airConditioner}
//                 onChange={handleCheckboxChange}
//               />
//               <label htmlFor="airConditioner">
//                 <MdOutlineAir className={css["equip-icon"]} /> AC
//               </label>
//             </li>
//             <li className={css.equip}>
//               <input
//                 type="checkbox"
//                 id="transmission"
//                 name="transmission"
//                 value="Automatic"
//                 checked={filters.transmission === "Automatic"}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="transmission">
//                 <TbAutomaticGearbox className={css["equip-icon"]} /> Automatic
//               </label>
//             </li>
//             <li className={css.equip}>
//               <input
//                 type="checkbox"
//                 id="kitchen"
//                 name="kitchen"
//                 checked={filters.kitchen}
//                 onChange={handleCheckboxChange}
//               />
//               <label htmlFor="kitchen">
//                 <TbToolsKitchen2 className={css["equip-icon"]} /> Kitchen
//               </label>
//             </li>
//             <li className={css.equip}>
//               <input
//                 type="checkbox"
//                 id="tv"
//                 name="tv"
//                 checked={filters.tv}
//                 onChange={handleCheckboxChange}
//               />
//               <label htmlFor="tv">
//                 <GiTv className={css["equip-icon"]} /> TV
//               </label>
//             </li>
//             <li className={css.equip}>
//               <input
//                 type="checkbox"
//                 id="shower"
//                 name="shower"
//                 checked={filters.shower}
//                 onChange={handleCheckboxChange}
//               />
//               <label htmlFor="shower">
//                 <LiaShowerSolid className={css["equip-icon"]} /> Shower/WC
//               </label>
//             </li>
//           </ul>
//         </div>

//         <button type="submit" className={css["search-btn"]}>
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

export default SideBar;
