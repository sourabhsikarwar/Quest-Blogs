import Image from "next/image";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="write a comment..." />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="userImage"
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Sourabh Sikarwar</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo
            alias impedit. Nobis soluta tempora voluptates ab porro
            exercitationem placeat dicta voluptas eius odio.
          </p>
        </div>
        
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="userImage"
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Sourabh Sikarwar</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo
            alias impedit. Nobis soluta tempora voluptates ab porro
            exercitationem placeat dicta voluptas eius odio.
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="userImage"
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Sourabh Sikarwar</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo
            alias impedit. Nobis soluta tempora voluptates ab porro
            exercitationem placeat dicta voluptas eius odio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
