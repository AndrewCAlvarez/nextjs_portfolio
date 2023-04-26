import styles from "./Nav.module.css";
import Image from "next/image";
import menuIcon from "../public/menu-outline.svg";
import utils from "../styles/utils.module.css";

export default function Nav() {
  return (
    <nav className={(styles.nav, utils.container)}>
      <div>A</div>
      {/* <Image className="icon-menu" priority src={menuIcon} alt="Menu icon." /> */}
    </nav>
  );
}
