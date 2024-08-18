import { Link } from "react-router-dom";
import css from "./WelcomSection.module.css";
import { useNavigate } from "react-router-dom";

const WelcomeSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <>
      <div className={css.welcome}>
        <div className={css.title}>
          <h1>Welcom adventures</h1>
          <p>
            If you finding something to self relax, check our page and make
            book!
          </p>
        </div>
        <div className={css.image}>
          <img
            // className={css.image}
            // src="https://as1.ftcdn.net/v2/jpg/08/09/67/58/1000_F_809675821_5fpitkyRwgkrwL6MngMJVyb5rXvXHVIe.jpg"
            alt=""
          />
          <button onClick={handleClick} className={css.btn}>
            Press Click
          </button>
        </div>
        {/* <Link to="/catalog">press click</Link> */}
      </div>
    </>
  );
};

export default WelcomeSection;
