import React from 'react'
import classes from  './Navbar.module.css'

const Navbar = () => {
  return (
    <header>
        <div className={classes.logo}>
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
        </div>
            <ul className={classes.navlinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        <div className={classes.buttons}>
            <button className={classes.btn_signup}>Sign Up</button>
            <button className={classes.btn_login}>Log In</button>
        </div>
    </header>
  )
}

export default Navbar