import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Contact from "./Contact"
import Copyright from "./Copyright"

const initialState = {
    "contact": {
        "phone": "",
        "contact_form": {
            "url": "",
            "link_text": "",
            "text": ""
        },
        "address": "",
        "directions": {
            "url": "",
            "link_text": "",
            "text": ""
        },
        "social_media": []
    },
    "copyright": {
        "symbol": "",
        "text": "",
        "link": []
    }
}

const Footer = () => {
    const [footerData, setFooterData] = useState(initialState)
    useEffect(() => {
        axios.get('http://localhost:8000/footer')
            .then(res => {
                setFooterData(res.data)
            }).catch(err => console.dir(err))
    }, [])
    return (
        <footer>
            <Contact contact={footerData.contact} />
            <Copyright copyright={footerData.copyright} />
        </footer>
    )
}

export default Footer
