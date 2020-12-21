import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
    const { menu, brand, navButton } = props
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 999 || document.documentElement.width > 999) {
            setShowMenu(true)
        }
    }, [])

    window.addEventListener('resize', () => {
        if (window.innerWidth > 999 || document.documentElement.width > 999) {
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }
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
                <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}>Menu</div>
            </div>

            <div className={showMenu ? "menu " : "menu hideMenu"}>
                <div className="menuLinks">
                    {menu.map(menuItem => {
                        return <a href={menuItem.url}>{menuItem.text}</a>
                    })}
                </div>
                <div className="menuActions">
                    <a href={navButton.url}>
                        <button>{navButton.text}</button>
                    </a>
                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Nav
