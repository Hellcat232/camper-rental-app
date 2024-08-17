import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>Page wasn't found</h1>

      <Link to="/">Back to Home page</Link>
    </>
  );
};

export default NotFoundPage;
