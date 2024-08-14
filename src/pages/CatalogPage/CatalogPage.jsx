import { getOffers } from "../../redux/api/operation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListItems from "../../components/ListItems/ListItems";
import { selectItems } from "../../redux/api/selectors";

const CatalogPage = () => {
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
        {selectItems && <ListItems />}
      </div>
    </>
  );
};

export default CatalogPage;
