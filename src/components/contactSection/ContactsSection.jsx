import React, { useState } from 'react'
import VrLine from '../UI/vrline/VrLine'
import ContactCategories from './ContactCategories'
import ContactIcon from '../UI/contactIcon/ContactIcon'

function ContactsSection() {
    const [categories] = useState([
        {name: "gmail", label: "Mail:"},
        {name: "github", label: "GitHub:"},
        {name: "telegram", label: "Telegram:"},
        {name: "phone", label: "Phone:"},
        {name: "devpost", label: "Devpost:"},
    ])
    const [data] = useState([
        {href: "mailto:dmytro27kagirov@gmail.com", span: "dmytro27kagirov@gmail.com"},
        {href: "https://github.com/Dmytro27Ind", span: "github.com/Dmytro27Ind"},
        {href: "https://t.me/lyn10i", span: "@lyn10i"},
        {href: "tel:+421951338470", span: "+421 951 338 470"},
        {href: "https://devpost.com/dmytro27kagirov", span: "devpost.com/dmytro27kagirov"},
    ])

  return (
    <div className='main__section' id='contacts'>
        <h2>Contacts</h2>
        <div className='contacts__table'>
            <VrLine height={134} borderWidth={2}/>
            <div className='contacts__categories-wrapper'>
                {categories.map((cat, ind) =>
                    <ContactCategories key={ind} name={cat.name} label={cat.label}/>
                )}
            </div>
            <div className='contacts__data'>
                {data.map((d, ind) =>
                    <a key={ind} href={d.href} target="_blank" rel="noreferrer">
                        <span>{d.span}</span>
                    </a>
                )}
            </div>
        </div>
        <div className='contacts-mobile'>
            <ContactIcon size={30} link='https://www.facebook.com/dmytro.kagirov.1' name="facebook"/>
            <ContactIcon size={30} link='https://t.me/lyn10i' name="telegram"/>
            <ContactIcon size={30} link='https://github.com/Dmytro27Ind' name="github"/>
            <ContactIcon size={30} link='https://devpost.com/dmytro27kagirov' name="devpost"/>
            <ContactIcon size={30} link='mailto:dmytro27kagirov@gmail.com' name="gmail"/>
            <ContactIcon size={30} link='tel:+421951338470' name="phone"/>
        </div>
    </div>
  )
}

export default ContactsSection