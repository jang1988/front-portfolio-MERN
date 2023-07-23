import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                {/* Здесь может быть ваш логотип (изображение или текст) */}
                <h1>LOGO</h1>
            </div>
            {/* Обычное меню для десктопов */}
            <nav className={styles.menu}>
                <ul>
                    <li>
                        <Link href="/">Главная</Link>
                    </li>
                    <li>
                        <Link href="/about">О нас</Link>
                    </li>
                    <li>
                        <Link href="/services">Услуги</Link>
                    </li>
                    {/* и другие пункты меню */}
                </ul>
            </nav>

            <div className={styles.auth}>
                {/* Здесь разместите ссылки на авторизацию, регистрацию и вход */}
                <Link href="/login">Вход</Link>
                <Link href="/register">Регистрация</Link>
            </div>

            <nav className={styles.bugerNav}>
                <div className={props.active ? `${styles.burgerBtn} ${styles.active}` : styles.burgerBtn} onClick={() => props.setActive(!props.active)}>
                    <span />
                </div>
            </nav>

        </div>
    );
};

export default Header;
