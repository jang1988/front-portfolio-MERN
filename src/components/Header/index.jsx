import React from 'react';
import styles from './index.module.css';

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
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about">О нас</a>
                    </li>
                    <li>
                        <a href="/services">Услуги</a>
                    </li>
                    {/* и другие пункты меню */}
                </ul>
            </nav>

            <div className={styles.auth}>
                {/* Здесь разместите ссылки на авторизацию, регистрацию и вход */}
                <a href="/login">Вход</a>
                <a href="/register">Регистрация</a>
            </div>

            <nav className={styles.bugerNav}>
                <div className={styles.burgerBtn} onClick={() => props.setActive(!props.active)}>
                    <span />
                </div>
            </nav>

        </div>
    );
};

export default Header;
