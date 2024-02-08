import React from 'react'
import style from './main.module.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <nav className={style.Navigation}>
        <Link to="/" className={style.btn}>Create-User</Link>
        <Link to="/users" className={style.btn}>User</Link>
      </nav>
    </div>
  )
}

export default Nav
