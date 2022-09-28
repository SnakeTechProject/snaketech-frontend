import styles from './challengepage.module.scss';

export function ChallengePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcomeContainer}>
        <div className={styles.textContainer}>
          <h1>Bem-vindo ao desafio tech!</h1>
          <ul>
            <li>Escolha a senioridade</li>
            <li>Monte seu desafio</li>
            <li>Publique na comunidade</li>
            <li>Compartilhe</li>
          </ul>
        </div>
        <img src='/assets/img/challengePage/robot.png' alt='Robô de desafio' />
      </div>
      <div className={styles.challengeContainer}>
        <form action="/">
          <h2>Defina a senioridade do seu desafio</h2>
          <div className={styles.radioContainer}>
            <label htmlFor='junior' className={styles.radioLabel}>
              <input type='radio' id='junior' name='seniority' value='Junior'></input>
              Júnior
            </label>
            <label htmlFor='pleno' className={styles.radioLabel}>
              <input type='radio' id='pleno' name='seniority' value='Pleno'></input>
              Pleno
            </label>
            <label htmlFor='senior' className={styles.radioLabel}>
              <input type='radio' id='senior' name='seniority' value='Senior'></input>
              Sênior
            </label>
          </div>

          <p>Crie seu desafio</p>
          <p>Título do seu desafio</p>

          <textarea id='challengeTitle' name='challengeTitle'
            placeholder='Título do desafio'>
          </textarea><br />
          <textarea id='challengeDescription' name='challengeDescription'
            placeholder='Descrição do desafio'></textarea><br />
          <input type='submit' value='Publicar'></input>
        </form>
      </div>
    </div>
  );
}
