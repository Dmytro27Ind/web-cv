import React, { useEffect, useState } from 'react'
import { BsFacebook, BsTelegram, BsGithub } from 'react-icons/bs';
import { SiDevpost } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import cl from './ContactIcon.module.css'

function ContactIcon({link, name}) {
    let [icon, setIcon] = useState('')

    useEffect(() => {
        switch (name) {
            case 'facebook':
                setIcon(<BsFacebook className={cl["contact__icon"]}/>)
                break;
            case 'telegram':
                setIcon(<BsTelegram className={cl["contact__icon"]}/>)
                break;
            case 'github':
                setIcon(<BsGithub className={cl["contact__icon"]}/>)
                break;
            case 'devpost':
                setIcon(<SiDevpost className={cl["contact__icon"]}/>)
                break;
            case 'gmail':
                setIcon(<FiMail className={cl["contact__icon"]}/>)
                break;
            default:
                setIcon('')
        }
    }, [name])

    return (
        <a href={link} target="_blank" rel="noreferrer">
            {icon}
        </a>
    )
}

export default ContactIcon