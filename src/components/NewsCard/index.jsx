import PropTypes from 'prop-types';
import styles from './newsCard.module.scss';

export function NewsCard({imgUrl, text}) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.imgCard}
        src={imgUrl}
        alt={text} />
      <div className={styles.textContainer}>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
};
