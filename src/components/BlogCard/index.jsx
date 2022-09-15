// import React from 'react'
import styles from './blogCard.module.scss'

export function BlogCard(props) {
  const {img, title, short} = props.card
  return (<div className={styles.cardContainer}>
    <img className={styles.imgCard}
    src={img.imgUrl}
    alt={img.title} />
    <div className={styles.textContainer}>
      <div className={styles.textTitle}>{title}</div>
      <div className={styles.textShort}>{short}</div>
    </div>
    <div className={styles.buttonContainer}>
      <button className={styles.btn}>Leia mais</button>
    </div>
  </div>)
}
