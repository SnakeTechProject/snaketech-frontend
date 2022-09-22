import styles from './singin.module.scss';
import { Input } from '../../components/Input';
import { FacebookIcon } from '../../components/FacebookIcon';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>Já é da casa?</span>
        <strong>Faça seu login</strong>
      </div>

      <Input title="E-mail" type="email" required />
      <Input title="Senha" type="password" required />

      <Link to="/resetpassword" className={styles.resetPassword}>
        Esqueceu a senha?
      </Link>

      <form className={styles.btnWrapper}>
        <button className={styles.filledBtn}>Entrar</button>
        <span>ou</span>
        <button className={styles.borderBtn}>
          Entrar com
          <FcGoogle size={20} />
        </button>
        <button className={styles.borderBtn}>
          Entrar com <FacebookIcon />
        </button>
        <span>Ainda não tem conta?</span>
        <Link to="/register" className={styles.filledBtn}>
          Cadastre-se
        </Link>
      </form>
    </div>
  );
}
