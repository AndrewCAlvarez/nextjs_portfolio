import styles from "./Project.module.css";
import Image from "next/image";

export default function Project(props: any) {
  return (
    <div>
      <Image
        src={props.image}
        alt={`Hero section of portfolio project ${props.title}.`}
        width={400}
      />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <a href={props.link}>Website</a>
    </div>
  );
}
