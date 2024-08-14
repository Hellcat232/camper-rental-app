import Item from "../Item/Item";
import { selectItems } from "../../redux/api/selectors";
import { useSelector } from "react-redux";

const ListItems = () => {
  const items = useSelector(selectItems);

  return (
    <div
      style={{
        width: "890px",
        marginRight: "64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {items.map((item) => {
        return <Item key={item._id} item={item} />;
      })}
    </div>
  );
};

export default ListItems;
