import styles from './about.module.scss';
import img from '../../assets/img/img.svg';
export function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <div className={styles.text}>
          <h2 className={styles.title}>O que é SnakeTech?</h2>
          <p>
            SnakeTech é o seu portal de notícias sobre o mundo tech, artigos
            sobre programação e uma área para desafios para você testar seus
            conhecimentos.
          </p>
        </div>
        <div className={styles.img}>
          <img src={img} alt="image-about" />
        </div>
      </div>
    </div>
  );
}
