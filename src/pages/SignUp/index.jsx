import { Input } from '../../components/Input';
import styles from './signup.module.scss';

export function SignUp() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Cadastre-se e faça parte da comunidade SnakeTech
        </h1>
        <img src="/assets/img/registerLogo.png" alt="" />
      </div>

      <form className={styles.inputWrapper}>
        <Input title="Nome" required />
        <Input title="E-mail" type="email" required />
        <Input
          title="Crie sua senha"
          placeholder="Criar senha"
          type="password"
          required
        />
        <Input
          title="Repita a senha"
          placeholder="Repetir senha"
          type="password"
          required
        />
        <button className={styles.filledBtn}>Cadastre-se</button>
      </form>
    </div>
  );
}
