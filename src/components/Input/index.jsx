import styles from './input.module.scss';

export function Input({ title, ...rest }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={title}>{title}</label>
      <input id={title} placeholder={title} {...rest} />
    </div>
  );
}
