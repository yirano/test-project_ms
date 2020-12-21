import React from 'react'

const Copyright = (props) => {
    const { copyright } = props
    return (
        <div className="copyright">
            <p>
                {copyright.symbol} {copyright.text}
            </p>
            {copyright.link.map(l => <p>{l.text} <a href={l.url}>{l.link_text}</a></p>)}
        </div>
    )
}

export default Copyright
