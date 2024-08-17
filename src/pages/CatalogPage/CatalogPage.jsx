import { getOffers } from "../../redux/api/operation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListItems from "../../components/ListItems/ListItems";
import { selectAllItems } from "../../redux/api/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  // const location = useLocation();

  // console.log(location, "CatalogPage");

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
};

export default CatalogPage;
