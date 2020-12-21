import React, { useEffect, useState } from 'react'
import Facebook from '../../Assets/images/facebook.svg'
import Twitter from '../../Assets/images/twitter.svg'
import YouTube from '../../Assets/images/youtube.svg'

const Contact = (props) => {
    const [contact, setContact] = useState(props.contact)
    const addr = contact.address.replace(/\,/, ',*').split('*')

    // * I'm having a bit of trouble trying to use the imported images from my assets folder because the data was being sent back as a String. I'm restructuring that String into a Component here.
    useEffect(() => {
        setContact({
            ...props.contact,
            social_media: [
                { ...props.contact.social_media, icon: Facebook },
                { ...props.contact.social_media, icon: Twitter },
                { ...props.contact.social_media, icon: YouTube }
            ]
        })
    }, [])

    return (
        <div className="contact">
            <div className="phoneEmail">
                <h1>{contact.phone}</h1>
                <p>{contact.contact_form.text} <a href={contact.contact_form.url}>{contact.contact_form.link_text}</a>.</p>
            </div>
            <div className="spacer" />
            <div className="addressSocial">
                <address>
                    <div>
                        {addr.map(addr => <h4>{addr}</h4>)}
                    </div>
                    <p>
                        <a href={contact.directions.url}>{contact.directions.link_text}</a> {contact.directions.text}
                    </p>
                </address>
                <div className="socialMedia">
                    {contact.social_media.map(link => <a href={link.url}><img src={link.icon} /></a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact
