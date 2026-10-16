import Link from "next/link";
import styles from "./styles/Home.module.css";

export default function Home() {
  console.log(styles);
  return (
    <>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem esse
        accusantium deserunt fuga consectetur quam sequi expedita excepturi sit
        ex, hic pariatur eius illo repellendus voluptatibus officiis similique
        voluptate animi?
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem esse
        accusantium deserunt fuga consectetur quam sequi expedita excepturi sit
        ex, hic pariatur eius illo repellendus voluptatibus officiis similique
        voluptate animi?
      </p>
      <Link href="/dishes" className={styles.btn}>
        See Dish Listing
      </Link>
    </>
  );
}
