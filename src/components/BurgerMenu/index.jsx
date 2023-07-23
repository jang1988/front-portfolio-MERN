import React from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ header, items, active }) => {
    return (
        <div className={active ? `${style.menu} ${style.active}` : style.menu}>
            <div className={style.blur}>
                <div className={style.menuContent}>
                    <div className={style.menuHeader}>{header}</div>
                    <ul className={style.menuList}>
                        {items.map((item) => (
                            <li key={item.value}>
                                <Link href={item.href}>{item.value}</Link>
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
