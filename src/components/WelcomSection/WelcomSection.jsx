import css from "./WelcomSection.module.css";

const WelcomeSection = () => {
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
        <div className={css.image}></div>
      </div>
    </>
  );
};

export default WelcomeSection;
