import PropTypes from 'prop-types';
import styles from './jobsCard.module.scss';

export function JobsCard({role, time}) {
  return (
    <div className={styles.jobsContainer}>
      <div className={styles.role}>{role}</div>
      <div className={styles.time}>{time}</div>
    </div>
  );
}

JobsCard.propTypes = {
  role: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
