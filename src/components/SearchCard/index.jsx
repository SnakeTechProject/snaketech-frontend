import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './searchCard.module.scss';

export function SearchCard({title, short}) {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.textTitle}>{title}</div>
      <div className={styles.textShort}>{short}</div>
      <div className={styles.buttonContainer}>
        <Link to={''} className={styles.btn}>
          Leia mais
        </Link>
      </div>
    </div>
  );
}

SearchCard.propTypes = {
  title: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
};
