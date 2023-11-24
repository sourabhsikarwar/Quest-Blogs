import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, post }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt={post.slug} fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.01.2023 - </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>{post.title}</h1>
        </Link>
        <p className={styles.desc}>{post.desc}</p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
