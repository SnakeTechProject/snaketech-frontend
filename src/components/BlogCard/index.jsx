// import React from 'react'
import { Link } from 'react-router-dom';
import styles from './blogCard.module.scss';

export function BlogCard(props) {
  const { img, title, short } = props.card;
  const id = props.card.id;

  return (
    <div className={styles.cardContainer}>
      <img className={styles.imgCard} src={img.imgUrl} alt={img.title} />
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.textShort}>{short}</div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to={`/blog/${id}`} className={styles.btn}>
          Leia mais
        </Link>
      </div>
    </div>
  );
}
