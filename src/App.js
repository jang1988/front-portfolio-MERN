import React from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    const [menuActive, setMenuActive] = React.useState(false);

    const menuItems = [
        { value: 'Главная', href: '/', icon: 'chevron_left' },
        { value: 'О нас', href: '/about', icon: 'anchor' },
        { value: 'Услуги', href: '/services', icon: 'grade' },
    ];

    return (
        <div className="App">
            <Header active={menuActive} setActive={setMenuActive} menuItems={menuItems} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <BurgerMenu
                active={menuActive}
                header={'Меню'}
                menuItems={menuItems}
            />
        </div>
    );
}

export default App;
