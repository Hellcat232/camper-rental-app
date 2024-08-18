const VehicleDetails = ({ details }) => {
  return (
    <div>
      <h2 style={{ marginBottom: "48px", marginTop: "44px" }}>
        Vehicle details
      </h2>

      <p>Form {details.form}</p>
      <p>Length {details.length}</p>
      <p>Width {details.width}</p>
      <p>Height {details.height}</p>
      <p>Tank {details.tank}</p>
      <p>Consumption {details.consumption}</p>
    </div>
  );
};

export default VehicleDetails;
