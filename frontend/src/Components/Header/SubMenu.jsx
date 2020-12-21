import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SubMenu = (props) => {
    const { subMenu } = props
    const [showSubMenu, setShowSubMenu] = useState(false)
    return (
        <div className="subMenu" onClick={() => setShowSubMenu(!showSubMenu)}>
            <div className="subMenuPrompt" >
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ margin: '0.7rem' }} className="subMenuIcon" />
                <p>{subMenu.question}</p>
            </div>
            <div className={showSubMenu ? "subMenuLinks showSubMenu" : "subMenuLinks hideSubMenu"}>
                {subMenu.links.map(menuItem => <a href={menuItem.url}>{menuItem.text}</a>)}
            </div>
        </div>
    )
}

export default SubMenu
