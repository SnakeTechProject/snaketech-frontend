import styles from './profile.module.scss';
import { CameraIcon } from '../../components/CameraIcon';
import { Input } from '../../components/Input';

export function Profile() {
  const user = {
    avatar: '',
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Perfil</h1>
      <form>
        <div className={styles.profileWrapper}>
          <div className={styles.profilePlaceholder}>
            {user.avatar ? (
              <img src={user.avatar} className={styles.profileImg} />
            ) : (
              <CameraIcon />
            )}
          </div>

          <button className={styles.profileBtn}>Ativar</button>
        </div>

        <div className={styles.inputWrapper}>
          <Input title="Seu nome e sobrenome" placeholder="Nome e Sobrenome" />
          <Input title="Seu nome de usuário" placeholder="Nome de usuário" />
          <Input title="Sua formação" placeholder="Formação" />
          <Input title="Seu Linkedin" placeholder="Linkedin" />

          <button type="submit" className={styles.submitBtn}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
