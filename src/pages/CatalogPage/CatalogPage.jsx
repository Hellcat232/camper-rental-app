import { getOffers } from "../../redux/api/operation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Catalog.module.css";
import ListItems from "../../components/ListItems/ListItems";
import { selectAllItems } from "../../redux/api/selectors";
import SideBar from "../../components/SideBar/SideBar";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);

  let filteredArray = items.filter((item) => {
    return item.details;
  });

  // console.log(filteredArray);

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  const filter = (value) => {
    let filteredArray = [];

    console.log(value);

    if (value === "AC") {
      items.filter((item) => {
        // console.log(item, "AC");
      });
    } else if (value === "Automatic") {
      items.filter((item) => {
        // console.log(item, "Automatic");
      });
    } else if (value === "Kitchen") {
      items.filter((item) => {
        // console.log(item, "Kitchen");
      });
    } else if (value === "TV") {
      items.filter((item) => {
        // console.log(item, "TV");
      });
    } else if (value === "Shower/WC") {
      items.filter((item) => {
        // console.log(item, "Shower/WC");
      });
    } else if (value === "Van") {
      items.filter((item) => {
        // console.log(item, "Van");
      });
    } else if (value === "Integrated") {
      items.filter((item) => {
        // console.log(item, "Integrated");
      });
    } else if (value === "Alcove") {
      items.filter((item) => {
        // console.log(item, "Alcove");
      });
    }
  };

  return (
    <>
      <div className={css["catalog-page"]}>
        {/* <SideBar /> */}
        <SideBar filter={filter} />
        {items.length > 0 && <ListItems />}
      </div>
    </>
  );
}
