import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons'
import Search from "./Search"

const Nav = (props) => {
    const { menu, brand, navButton } = props
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 999 || document.documentElement.width > 999) {
            setShowMenu(true)
        }
    }, [])

    window.addEventListener('scroll', () => {
        setShowMenu(false)
    })

    const Logo = () => {
        return (
            <a href="#" className="logoContainer">
                <div className="logo">
                    <FontAwesomeIcon icon={faPiedPiperSquare} size="4x" />
                    <div className="companyName">
                        <h4>{brand.company_name}</h4>
                        <p>{brand.secondary}</p>
                    </div>
                </div>
            </a>
        )
    }



    return (
        <div className="nav">
            <div className="logoMenuIcon">
                <Logo />
                <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}>
                    <span className={showMenu ? "mIconAnimate" : ""}></span>
                    <span className={showMenu ? "mIconAnimate" : ""}></span>
                    <span className={showMenu ? "mIconAnimate" : ""}></span>
                </div>
            </div>

            <div className={showMenu ? "menu showMenu" : "menu "}>
                <div className="menuLinks">
                    {menu.map(menuItem => {
                        return <a href={menuItem.url}>{menuItem.text}</a>
                    })}
                </div>
                <div className="menuActions">
                    <a href={navButton.url}>
                        <button>{navButton.text}</button>
                    </a>
                    <Search />
                </div>
            </div>

        </div>

    )
}

export default Nav
