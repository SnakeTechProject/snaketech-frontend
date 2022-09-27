import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
const NavLinks = (props) => {
  return (
    <div className={styles.navlinksContainer}>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink to="/" className={styles.buttonLink}>
            Home
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink to="/about" className={styles.buttonLink}>
            Sobre
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink to="/blog" className={styles.buttonLink}>
            Blog
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink to="/news" className={styles.buttonLink}>
            Tech News
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink to="/challenges" className={styles.buttonLink}>
            Desafios
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink to="/jobs" className={styles.buttonLink}>
            Vagas
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink to="/login" className={styles.buttonLink}>
            Login
          </NavLink>
        </li>
      </ul>
      <div className={styles.search}>
        <AiOutlineSearch size={20} className={styles.iconSearch} />
        <input placeholder="Buscar" type="text" name="search" id="search" />
      </div>
    </div>
  );
};

export default NavLinks;
