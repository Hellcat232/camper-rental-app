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

  const filter = (value) => {
    switch (value) {
      case "AC":
        return console.log(value, "AC");
      case "Kitchen":
        return console.log(value, "Kitchen");
      case "TV":
        return console.log(value, "TV");
      case "Automatic":
        return console.log(value, "Automatic");
      case "Shower/WC":
        return console.log(value, "Shower/WC");
      case "Integrated":
        return console.log(value, "Integrated");
      case "Alcove":
        return console.log(value, "Alcove");
      case "Van":
        return console.log(value, "Van");
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  return (
    <>
      <div className={css["catalog-page"]}>
        <SideBar filter={filter} />
        {items.length > 0 && <ListItems />}
      </div>
    </>
  );
}
