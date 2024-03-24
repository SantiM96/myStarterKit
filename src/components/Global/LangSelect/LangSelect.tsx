import styles from "./LangSelect.module.scss"
import Image from "next/image";
import Link from "next/link";

export default function LangSelect() {
  return (
    <div className={styles.component}>
      <Link href={""} locale="en">En</Link>
      <br />
      <Link href={""} locale="es">Es</Link>
    </div>
  );
}
