import { Input } from '../../components/Input';
import styles from './signup.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { signUpSchema } from '../../utils/FormSchemas';

export function SignUp() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  function onSubmit(data) {
    console.log(data);

    reset();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Cadastre-se e faça parte da comunidade SnakeTech
        </h1>
        <img src="/assets/img/registerLogo.png" alt="" />
      </div>

      <form className={styles.inputWrapper} onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" required fieldName="name" register={register} />
        {errors.name?.message && <p>{errors.name?.message}</p>}

        <Input
          label="E-mail"
          type="text"
          fieldName="email"
          required
          register={register}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}

        <Input
          label="Crie sua senha"
          placeholder="Criar senha"
          type="password"
          fieldName="password"
          required
          register={register}
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}

        <Input
          label="Repita a senha"
          placeholder="Repetir senha"
          fieldName="passwordConfirm"
          type="password"
          required
          register={register}
        />
        {errors.passwordConfirm?.message && (
          <p>{errors.passwordConfirm?.message}</p>
        )}

        <button className={styles.filledBtn}>Cadastre-se</button>
      </form>
    </div>
  );
}
