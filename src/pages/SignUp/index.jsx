import { Input } from '../../components/Input';
import styles from './signup.module.scss';
import { useForm } from 'react-hook-form';

export function SignUp() {
  const { reset, register, handleSubmit } = useForm();

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
        <Input
          label="E-mail"
          type="email"
          fieldName="email"
          required
          register={register}
        />
        <Input
          label="Crie sua senha"
          placeholder="Criar senha"
          type="password"
          fieldName="password"
          required
          register={register}
        />
        <Input
          label="Repita a senha"
          placeholder="Repetir senha"
          fieldName="passwordConfirm"
          type="password"
          required
          register={register}
        />
        <button className={styles.filledBtn}>Cadastre-se</button>
      </form>
    </div>
  );
}
