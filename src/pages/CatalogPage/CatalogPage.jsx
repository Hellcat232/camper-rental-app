import { getOffers } from "../../redux/api/operation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import css from "./Catalog.module.css";
import ListItems from "../../components/ListItems/ListItems";
import { selectAllItems } from "../../redux/api/selectors";
import SideBar from "../../components/SideBar/SideBar";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  return (
    <>
      <div className={css["catalog-page"]}>
        <SideBar />
        {selectAllItems.length > 0 && <ListItems />}
      </div>
    </>
  );
}
