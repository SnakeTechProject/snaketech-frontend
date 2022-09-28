import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import styles from './header.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.NavBar}>
          <Navigation />
          <MobileNavigation />
        </div>
        <div className={styles.search}>
          <AiOutlineSearch size={20} className={styles.iconSearch} />
          <input placeholder="Buscar" type="text" name="search" id="search" />
        </div>
      </div>
    </header>
  );
};
export { Header };
