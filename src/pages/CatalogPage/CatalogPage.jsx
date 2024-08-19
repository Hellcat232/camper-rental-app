import { getOffers } from "../../redux/api/operation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Catalog.module.css";
import ListItems from "../../components/ListItems/ListItems";
import { selectAllItems } from "../../redux/api/selectors";
import SideBar from "../../components/SideBar/SideBar";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const items = useSelector();
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  return (
    <>
      <div className={css["catalog-page"]}>
        <SideBar fiiler={filteredCard} />
        {selectAllItems.length > 0 && <ListItems />}
      </div>
    </>
  );
}
