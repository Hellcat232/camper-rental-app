import { getOffers } from "../../redux/api/operation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListItems from "../../components/ListItems/ListItems";
import { selectAllItems } from "../../redux/api/selectors";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        {selectAllItems.length > 0 && <ListItems />}
      </div>
    </>
  );
}
