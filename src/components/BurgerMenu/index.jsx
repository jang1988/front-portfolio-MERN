import React from 'react';
import style from './index.module.css';

const BurgerMenu = ({ header, items, active }) => {
    return (
        <div className={active ? `${style.menu} ${style.active}` : style.menu}>
            <div className={style.blur}>
                <div className={style.menuContent}>
                    <div className={style.menuHeader}>{header}</div>
                    <ul className={style.menuList}>
                        {items.map((item) => (
                            <li key={item.value}>
                                <a href={item.href}>{item.value}</a>
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
