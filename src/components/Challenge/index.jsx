import styles from './challenge.module.scss';
import { Link } from 'react-router-dom';

export function Challenge() {
  return (
    <div className={styles.challenge}>
      <div className={styles.text}>
        <h1>Gosta de desafios?</h1>

        <ul>
          <li>Pratique seus conhecimentos</li>
          <li>Crie desafios</li>
          <li>Faça parte da comunidade SnakeTech</li>
          <li>Desafios para todos os níveis</li>
          <li>Compartilhe com seus amigos</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h1>Desafio Tech</h1>

        <div className={styles.container}>
          <h2>Faça parte da comunidade SnakeTech</h2>
          <img src="/assets/img/secundary/robo.png" alt="" />
        </div>

        <Link to="/challenge">
          <span>Participe aqui</span>
        </Link>
      </div>
    </div>
  );
}
