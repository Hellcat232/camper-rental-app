import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ details }) => {
  return (
    <div className={css["size-div"]}>
      <h2>Vehicle details</h2>

      <div className={css["info-size"]}>
        <p>Form </p>
        <p>{details.form}</p>
      </div>
      <div className={css["info-size"]}>
        <p>Length </p>
        <p>{details.length}</p>
      </div>
      <div className={css["info-size"]}>
        <p>Width </p>
        <p>{details.width}</p>
      </div>
      <div className={css["info-size"]}>
        <p>Height </p>
        <p>{details.height}</p>
      </div>
      <div className={css["info-size"]}>
        <p>Tank </p>
        <p>{details.tank}</p>
      </div>
      <div className={css["info-size"]}>
        <p>Consumption </p>
        <p>{details.consumption}</p>
      </div>
    </div>
  );
};

export default VehicleDetails;
