import React from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import Header from './components/Header';
import Main from './components/Main';

function App() {

    const [menuActive, setMenuActive] = React.useState(false);
    
    const items = [
        { value: 'Главная', href: '/', icon: 'chevron_left' },
        { value: 'О нас', href: '/about', icon: 'anchor' },
        { value: 'Услуги', href: '/services', icon: 'grade' },
    ];

    return (
        <div className="App">
            <Header active={menuActive} setActive={setMenuActive} />
            <Main />
            <Main />
            <BurgerMenu active={menuActive} setActive={setMenuActive} header={'Меню'} items={items} />
        </div>
    );
}

export default App;
