import PropTypes from 'prop-types';
import styles from './topViewsCard.module.scss';

export function TopViewsCard({text}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

TopViewsCard.propTypes = {
  counter: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
