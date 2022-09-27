import styles from './about.module.scss';
import img from '../../assets/img/img.svg';
export function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <h2 className={styles.title}>Gosta de desafios?</h2>
        <div className={styles.list}>
          <li>Pratique seus conhecimentos</li>
          <li>Crie Desafios</li>
          <li>Faça parte da comunidade Snaketech</li>
          <li>Desafios para todos os níveis</li>
          <li>Compartilhe com seus amigos</li>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Desafio Tech</h2>
        <div className={styles.textImg}>
          <p>Faça parte da comunidade SnakeTech</p>
          <img src={img} alt="imagem" />
        </div>
        <button className={styles.btn}>Participe aqui</button>
      </div>
    </div>
  );
}
