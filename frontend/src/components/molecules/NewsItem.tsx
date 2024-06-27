import styles from "./NewsItem.module.css";

export const NewsItem: React.FC<{ title: string, url: string, category: string, comment: number }> = ({title, url, category, comment}) => {
  return (
    <a className={styles.a} href={url}>
      <div className={styles.main}>
        <p className={styles.category}>{category}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.comment}>{comment} comments</p>
      </div>
    </a>
  );
}

export default NewsItem;