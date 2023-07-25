import React from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ header, menuItems, active }) => {
    console.log('%c menuItems: ', 'font-size:12px;background-color: #6EC1C2;color:#fff;', menuItems)
    return (
        <div className={active ? `${style.menu} ${style.active}` : style.menu}>
            <div className={style.blur}>
                <div className={style.menuContent}>
                    <div className={style.menuHeader}>{header}</div>
                    <ul className={style.menuList}>
                        {menuItems.map((item) => (
                            <li key={item.value}>
                                <Link to={item.href}>{item.value}</Link>
                                <span className="material-symbols-outlined">
                                    {item.icon}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
