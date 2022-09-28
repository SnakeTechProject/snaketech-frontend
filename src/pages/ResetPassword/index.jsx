import styles from './resetpassword.module.scss';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newPasswordSchema } from '../../utils/FormSchemas';

export function ResetPassword() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(newPasswordSchema) });

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
        {errors.passwordConfirm?.message && (
          <p>{errors.passwordConfirm?.message}</p>
        )}

        <button type="submit" className={styles.submitBtn}>
          Cadastre-se
        </button>
      </form>
    </div>
  );
}
