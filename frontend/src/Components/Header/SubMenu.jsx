import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SubMenu = (props) => {
    const { subMenu } = props
    return (
        <div className="subMenu">
            <div className="subMenuPrompt">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ margin: '0.2rem 0 0.7rem' }} />
                <p>{subMenu.question}</p>
            </div>
            <div className="subMenuLinks">
                {subMenu.links.map(menuItem => <a href={menuItem.url}>{menuItem.text}</a>)}

            </div>
        </div>
    )
}

export default SubMenu
