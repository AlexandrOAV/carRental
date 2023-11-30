import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './HomeMenu.module.css'

function HomeMenu() {
  return (
    <header className={css.header}>
        <nav className={css.container}>
        <ul className={css.list_menu}>
            <li className={css.menu_item}>  
                <NavLink 
                className={({ isActive }) =>isActive ? css.activeLink : css.menu_item} 
                to='/'>
                    Home
                </NavLink>
            </li>
            <li className={css.menu_item}>
                <NavLink 
                className={({ isActive }) =>isActive ? css.activeLink : css.menu_item} 
                to='/catalog'>
                    Catalog
                </NavLink>
                </li>
            <li className={css.menu_item}> 
                <NavLink 
                className={({ isActive }) =>isActive ? css.activeLink : css.menu_item} 
                to='/favorites'>
                    Favorites
                </NavLink>
            </li>
        </ul>
        </nav>
     
    </header>
  )
}

export default HomeMenu
