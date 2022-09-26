import styles from './singin.module.scss';
import { Input } from '../../components/Input';
import { FacebookIcon } from '../../components/FacebookIcon';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '../../utils/FormSchemas';

export function SignIn() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signInSchema) });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>Já é da casa?</span>
        <strong>Faça seu login</strong>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="E-mail"
          type="text"
          required
          fieldName="email"
          register={register}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}

        <Input
          label="Senha"
          type="password"
          required
          fieldName="password"
          register={register}
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}

        <Link to="/resetpassword" className={styles.resetPassword}>
          Esqueceu a senha?
        </Link>

        <div className={styles.btnWrapper}>
          <button type="submit" className={styles.filledBtn}>
            Entrar
          </button>
          <span>ou</span>
          <button type="button" className={styles.borderBtn}>
            Entrar com
            <FcGoogle size={20} />
          </button>
          <button type="button" className={styles.borderBtn}>
            Entrar com <FacebookIcon />
          </button>
          <span>Ainda não tem conta?</span>
          <Link to="/register" className={styles.filledBtn}>
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
