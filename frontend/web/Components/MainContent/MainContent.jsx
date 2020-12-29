import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./Card.jsx"

const MainContent = () => {
    const [mainData, setMainData] = useState([])
    useEffect(() => {
        axios.get("https://test-project-ms.herokuapp.com/main_content")
            .then(res => {
                setMainData(res.data)
            }).catch(err => console.dir(err))
    }, [])

    return (
        <div className="mainContent">
            {mainData.map(item => <Card data={item} />)}
        </div>
    )
}

export default MainContent