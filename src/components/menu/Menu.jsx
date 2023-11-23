import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import MenuPosts from "./menuPosts/MenuPosts";
import Categories from "./categories/Categories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* popular section */}
      <div className={styles.section}>
        <h2 className={styles.subTitle}>{"What's hot"}</h2>
        <h1 className={styles.title}>Most Popular</h1>
        <MenuPosts withImage={true} />
      </div>

      {/* category section */}
      <div className={styles.section}>
        <h2 className={styles.subTitle}>Discover the topic</h2>
        <h1 className={styles.title}>Categories</h1>
        <Categories />
      </div>

      {/* editor section */}
      <div className={styles.section}>
        <h2 className={styles.subTitle}>{"Chosen by the editor"}</h2>
        <h1 className={styles.title}>Editors Pick</h1>
        <MenuPosts withImage={false} />
      </div>
    </div>
  );
};

export default Menu;
