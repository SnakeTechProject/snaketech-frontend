import styles from './resetpassword.module.scss';
import { Input } from '../../components/Input';

export function ResetPassword() {
  function handleSubmit() {}

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Atualização de senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          title="Digite sua nova senha"
          placeholder="Nova senha"
          type="password"
        />
        <Input title="Repita a senha" type="password" />

        <button type="submit" className={styles.submitBtn}>
          Cadastre-se
        </button>
      </form>
    </div>
  );
}
