import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import styles from './header.module.scss';

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
      </div>
    </header>
  );
};
export { Header };
