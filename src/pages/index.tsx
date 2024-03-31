import { Button } from "../Button";
import styles from "./styles.module.css";

export const ButtonPage = () => {
  const sizes = ["sm", "md", "lg"];
  const colors = ["Default", "Primary", "Secondary", "Danger"];
  return (
    <div className={styles.btns}>
      <h1>Buttons</h1>
      <div className={styles.grp}>
        <Button />
        <Button variant="outline" />
        <Button variant="text" />
      </div>
      <div className={styles.grp}>
        <Button disableShadow />
      </div>
      <div className={styles.grp}>
        <Button disabled />
        <Button variant="text" disabled />
      </div>
      <div className={styles.grp}>
        <Button startIcon="local_grocery_store" />
        <Button endIcon="local_grocery_store" />
      </div>
      <div className={styles.grp}>
        {sizes.map((size) => {
          return <Button size={size} />;
        })}
      </div>
      <div className={styles.grp}>
        {colors.map((color) => {
          return <Button color={color} />;
        })}
      </div>
    </div>
  );
};
