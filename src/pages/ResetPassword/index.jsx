import styles from './resetpassword.module.scss';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';

export function ResetPassword() {
  const { reset, register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Atualização de senha</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Digite sua nova senha"
          placeholder="Nova senha"
          fieldName="password"
          type="password"
          register={register}
        />

        <Input
          label="Repita a senha"
          fieldName="passwordConfirm"
          type="password"
          register={register}
        />

        <button type="submit" className={styles.submitBtn}>
          Cadastre-se
        </button>
      </form>
    </div>
  );
}
