import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png"
import styles from'./header.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
export function Header() {
  return(
  <header>
    <div className={styles.container}>
      <Link to="/">
      <img src={logo}  alt="logo"/>
      </Link>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">Sobre</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/news">Tech News</NavLink></li>
        <li><NavLink to="/challenges">Desafios</NavLink></li>
        <li><NavLink to="/jobs">Vagas</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
         <div className={styles.search}>
         <AiOutlineSearch size={20} className={styles.iconePesquisa}/>
        <input placeholder="Buscar" type="text" name="Login" id="Login" />
           </div>

    </div>
  </header>)
}
