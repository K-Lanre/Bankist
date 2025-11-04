import styles from "./HomePage.module.css";
import Button from "../button-compo/ButtonCompo";
function HomePage() {
  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          When
          {/* <!-- Green highlight effect --> */}
          <span className={styles.highlight}>banking</span>
          meets
          <br />
          <span className={styles.highlight}>minimalist</span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        {/* <button
          className={`${styles["btn--text"]} ${styles["btn--scroll-to"]}`}
        >
          Learn more &DownArrow;
        </button> */}
        <Button>Learn more</Button>
        <img
          src="img/hero.png"
          className={styles.header__img}
          alt="Minimalist bank items"
        />
      </div>
    </header>
  );
}

export default HomePage;
