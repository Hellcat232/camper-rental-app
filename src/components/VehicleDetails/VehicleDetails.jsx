import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ details }) => {
  return (
    <div>
      <h2>Vehicle details</h2>
      <ul className={css["size-div"]}>
        <li className={css["info-size"]}>
          <p>Form </p>
          <p>{details.form}</p>
        </li>
        <li className={css["info-size"]}>
          <p>Length </p>
          <p>{details.length}</p>
        </li>
        <li className={css["info-size"]}>
          <p>Width </p>
          <p>{details.width}</p>
        </li>
        <li className={css["info-size"]}>
          <p>Height </p>
          <p>{details.height}</p>
        </li>
        <li className={css["info-size"]}>
          <p>Tank </p>
          <p>{details.tank}</p>
        </li>
        <li className={css["info-size"]}>
          <p>Consumption </p>
          <p>{details.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
