import React, { useEffect, useState } from 'react'
import { BsFacebook, BsTelegram, BsGithub, BsFillTelephoneFill } from 'react-icons/bs';
import { SiDevpost } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import cl from './ContactIcon.module.css'
import { IconContext } from "react-icons";

function ContactIcon({link, name, size}) {
    let [icon, setIcon] = useState('')

    useEffect(() => {
        switch (name) {
            case 'facebook':    setIcon(<BsFacebook/>);             break;
            case 'telegram':    setIcon(<BsTelegram/>);             break;
            case 'github':      setIcon(<BsGithub/>);               break;
            case 'devpost':     setIcon(<SiDevpost/>);              break;
            case 'gmail':       setIcon(<FiMail/>);                 break;
            case 'phone':       setIcon(<BsFillTelephoneFill/>);    break;
            default:            setIcon('')
        }
    }, [name, size])

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ size: size, className: cl["contact__icon"] }}>
                {icon}
            </IconContext.Provider>
        </a>
    )
}

export default ContactIcon