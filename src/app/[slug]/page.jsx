import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image src="/p1.jpeg" alt="hero" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Sourabh Sikarwar</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="hero" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              aut enim qui distinctio, labore voluptates veritatis. Error labore
              officia possimus exercitationem odio enim a!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              in modi molestias rem ab sunt nobis placeat pariatur facilis
              quisquam earum vel, ea nesciunt dolore.
            </p>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              in modi molestias rem ab sunt nobis placeat pariatur facilis
              quisquam earum vel, ea nesciunt dolore.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
