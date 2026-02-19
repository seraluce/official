"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "首页", href: "/" },
  { name: "关于", href: "/about" },
  { name: "赞助", href: "/sponsor" },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo 区域 */}
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="https://vercel.com/vc-ap-vercel-marketing/_next/static/media/vercel-logotype-light.03d65485.svg" 
              alt="Next.js Logo" 
              height={20} 
              width={0} 
              className={styles.logoImg}
            />
          </Link>
        </div>

        {/* 导航菜单 */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${activeItem === item.href ? styles.active : ''}`}
                  onClick={() => setActiveItem(item.href)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 用户操作区域 */}
        <div className={styles.userActions}>
          <button className={styles.loginBtn}>登录</button>
          <button className={styles.signupBtn}>注册</button>
        </div>
      </div>
    </header>
  );
}
