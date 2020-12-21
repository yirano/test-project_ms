import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CallToAction from "./CallToAction"
import Nav from "./Nav"
import SubMenu from "./SubMenu"

const initialState = {
    "brand": {
        "company_name": "",
        "secondary": ""
    },
    "menu": [],
    "nav_button": {
        "url": "",
        "text": ""
    },
    "cta": {
        "message": "",
        "button": {
            "url": "",
            "text": ""
        },
        "second": {
            "text": ""
        },
        "third": {
            "text": "",
            "url": ""
        }
    },
    "sub_menu": {
        "question": "",
        "links": []
    }
}

const Header = () => {
    const [headerData, setHeaderData] = useState(initialState)
    useEffect(() => {
        axios.get('http://localhost:8000/header')
            .then(res => {
                setHeaderData(res.data)
            }).catch(err => console.dir(err))
    }, [])

    return (
        <div className="header">
            <Nav menu={headerData.menu} brand={headerData.brand} navButton={headerData.nav_button} />
            <CallToAction cta={headerData.cta} />
            <SubMenu subMenu={headerData.sub_menu} />
        </div>
    )
}

export default Header
