import Item from "../Item/Item";
import { selectAllItems } from "../../redux/api/selectors";
import { useSelector } from "react-redux";
import css from "./ListItems.module.css";
import { useState } from "react";

const ListItems = () => {
  const items = useSelector(selectAllItems);

  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  return (
    <div className={css.div}>
      <ul className={css.list}>
        {items.slice(0, visibleItems).map((item) => {
          return (
            <li key={item.id}>
              <Item item={item} />
            </li>
          );
        })}
      </ul>

      {visibleItems < items.length && (
        <button className={css["load-more-button"]} onClick={handleLoadMore}>
          Load More...
        </button>
      )}
    </div>
  );
};

export default ListItems;
