import styles from "./Nav.module.css";
import Image from "next/image";
import menuIcon from "../public/menu-outline.svg";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div>A</div>
      <Image className="icon-menu" priority src={menuIcon} alt="Menu icon." />
    </nav>
  );
}
