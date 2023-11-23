import Image from "next/image"
import styles from "./featured.module.css"

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey Sourabh!</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora harum illo tenetur repellendus. Repudiandae id nesciunt fuga nihil vitae alias delectus animi aperiam officiis!</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured