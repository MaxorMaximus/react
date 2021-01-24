import React from 'react';
import s from './Navbar.module.css';
console.log(s);
// let classes = {
//     'nav' : 'Navbar_nav__kzQDM';
//     'item' : 'Navbar_item__3hnaB';
// }

// {'${s.item} ${s.active}'}

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Setting</a>
        </div>
    </nav>
}

export default Navbar;
