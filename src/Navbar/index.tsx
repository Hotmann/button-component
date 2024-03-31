import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <header>
        <p className={styles.main}>
          Dev<span className={styles.span}>challenges.io</span>
        </p>
      </header>
      <div className={styles.links}>
        <NavLink to="/colors">Colors</NavLink>
        <NavLink to="/typography">Typography</NavLink>
        <NavLink to="/spaces">Spaces</NavLink>
        <NavLink to="/buttons">Buttons</NavLink>
        <NavLink to="/inputs">Inputs</NavLink>
        <NavLink to="/grid">Grid</NavLink>
      </div>
    </div>
  );
};
