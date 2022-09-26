import styles from './profile.module.scss';
import { CameraIcon } from '../../components/CameraIcon';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { profileSchema } from '../../utils/FormSchemas';
import { zodResolver } from '@hookform/resolvers/zod';

export function Profile() {
  const { reset, register, handleSubmit } = useForm({
    resolver: zodResolver(profileSchema),
  });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  const user = {
    avatar: '',
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Perfil</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.profileWrapper}>
          <div className={styles.profilePlaceholder}>
            {user.avatar ? (
              <img src={user.avatar} className={styles.profileImg} />
            ) : (
              <CameraIcon />
            )}
          </div>

          <label htmlFor="avatar" className={styles.profileBtn}>
            Ativar
          </label>
          <input
            type="file"
            {...register('avatar')}
            className={styles.hidden}
            id="avatar"
          />
        </div>

        <div className={styles.inputWrapper}>
          <Input
            label="Seu nome e sobrenome"
            placeholder="Nome e Sobrenome"
            fieldName="name"
            register={register}
          />

          <Input
            label="Seu nome de usuário"
            placeholder="Nome de usuário"
            fieldName="username"
            register={register}
          />

          <Input
            label="Sua formação"
            placeholder="Formação"
            fieldName="degree"
            register={register}
          />

          <Input
            label="Seu Linkedin"
            placeholder="Linkedin"
            fieldName="linkedin"
            register={register}
          />

          <button type="submit" className={styles.submitBtn}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
