import React, { useState, useEffect } from 'react'

const CallToAction = (props) => {
    const { cta } = props
    const msg = cta.message.split(/(?<=\,)/)
    console.log(msg)

    return (
        <div className="cta">
            <div className="ctaMessage">
                <h1>{msg.map(msg => {
                    return (
                        <><span>{msg}<br /></span></>
                    )
                })}</h1>
            </div>
            <div className="ctaLinks">
                <a href={cta.button.url}>
                    <button>{cta.button.text}</button>
                </a>
                <p>{cta.second.text} <a href={cta.third.url}>{cta.third.text}</a></p>
            </div>
        </div>
    )
}

export default CallToAction
