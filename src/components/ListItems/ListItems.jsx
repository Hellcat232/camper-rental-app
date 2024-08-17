import Item from "../Item/Item";
import { selectAllItems } from "../../redux/api/selectors";
import { useSelector } from "react-redux";
import css from "./ListItems.module.css";

const ListItems = () => {
  const items = useSelector(selectAllItems);

  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Item item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;
