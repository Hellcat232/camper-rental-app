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
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(items); // Обновляем фильтрованные элементы при изменении списка items
  }, [items]);

  const filter = (filtersValue) => {
    console.log(filtersValue);
    const filteredArray = items.filter((item) => {
      const {
        airConditioner,
        transmission,
        kitchen,
        tv,
        shower,
        form,
        location,
      } = filtersValue;

      const matchesAirConditioner = airConditioner
        ? item.details.airConditioner
        : true;
      const matchesTransmission = transmission
        ? item.details.transmission === transmission
        : true;
      const matchesKitchen = kitchen ? item.details.kitchen : true;
      const matchesTV = tv ? item.details.tv : true;
      const matchesShower = shower ? item.details.shower : true;
      const matchesForm = form ? item.details.form === form : true;
      const matchesLocation = location
        ? item.location.includes(location)
        : true;

      return (
        matchesAirConditioner &&
        matchesTransmission &&
        matchesKitchen &&
        matchesTV &&
        matchesShower &&
        matchesForm &&
        matchesLocation
      );
    });

    setFilteredItems(filteredArray);
  };

  return (
    <>
      <div className={css["catalog-page"]}>
        {/* <SideBar /> */}
        <SideBar filter={filter} />
        {filteredItems.length > 0 ? (
          <ListItems items={filteredItems} />
        ) : (
          <p>No found items</p>
        )}
      </div>
    </>
  );
}
