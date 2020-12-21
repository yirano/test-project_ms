import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./Card"

const MainContent = () => {
    const [mainData, setMainData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/main_content')
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
