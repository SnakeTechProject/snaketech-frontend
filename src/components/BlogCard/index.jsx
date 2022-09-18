import PropTypes from 'prop-types';
import styles from './blogCard.module.scss';

export function BlogCard({imgUrl, title, short}) {
  return (
    <div className={styles.cardContainer}>
      <img
        src={imgUrl}
        alt={title}
        className={styles.imgCard}
      />
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.textShort}>{short}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.btn}>Leia mais</button>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
};
