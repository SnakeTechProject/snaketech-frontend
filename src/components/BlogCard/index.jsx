// import React from 'react'
import styles from './blogCard.module.scss'

export function BlogCard(props) {

  return (<div className={styles.cardContainer}>
    <img className={styles.imgCard}
    src={props.img.imgUrl}
    alt={props.img.title} />
    <div className={styles.textContainer}>
      <div className={styles.textTitle}>{props.title}</div>
      <div className={styles.textShort}>{props.short}</div>
    </div>
    <div className={styles.buttonContainer}>
      <button className={styles.btn}>Leia mais</button>
    </div>
  </div>)
}
