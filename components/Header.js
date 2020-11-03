import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [menuOptions] = useState([
    { path: '/', name: 'Home' },
    // { path: '/about', name: 'About Me' },
    // { path: '/resume', name: 'Resume' },
    { path: '/blog', name: 'Blog' },
  ]);
  return (
    <header>
      <nav>
        {menuOptions.map((menu) => (
          <Link key={menu.path} href={menu.path} passHref>
            <a className={menu.path === router.pathname ? 'active' : ''}>
              {menu.name}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
