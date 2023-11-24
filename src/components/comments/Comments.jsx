"use client";
import Image from "next/image";
import styles from "./comments.module.css";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="write a comment..." />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <div>Login to write a Comment!</div>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading..."
          : data?.map((comment) => (
              <div className={styles.comment} key={comment._id}>
                <div className={styles.user}>
                  {comment?.user?.image && (
                    <Image
                      src={comment.user.image}
                      alt="userImage"
                      className={styles.image}
                      width={50}
                      height={50}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>{comment.user.name}</span>
                    <span className={styles.date}>
                      {comment.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
