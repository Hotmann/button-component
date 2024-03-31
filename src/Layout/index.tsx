import React from "react";
import { Navbar } from "../Navbar";

import styles from "./styles.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  );
};
