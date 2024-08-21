import { Link, NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>Page wasn't found</h1>

      <NavLink style={{ textDecoration: "underline" }} to="/">
        Back to Home page
      </NavLink>
    </>
  );
};

export default NotFoundPage;
