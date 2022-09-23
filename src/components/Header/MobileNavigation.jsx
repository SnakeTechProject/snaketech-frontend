import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <HiMenu
      size={60}
      className={styles.hamburger}
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <AiOutlineClose
      size={60}
      className={styles.hamburger}
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={styles.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
