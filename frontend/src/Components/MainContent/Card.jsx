import React from 'react'

const Card = (props) => {
    const { data } = props
    const cardTitle = data.title.split(/(?<=\ )/)
    return (
        <div className="card">
            <div className="cardImage">
                <img src={data.image} />
            </div>
            <div className="cardDesc">
                {cardTitle.map(title => <h4>{title}</h4>)}
                <p>{data.content}</p>
            </div>
            <div className="cardButton">
                <a href={data.button.url}>
                    <button>{data.button.text}</button>
                </a>
            </div>
        </div>
    )
}

export default Card
